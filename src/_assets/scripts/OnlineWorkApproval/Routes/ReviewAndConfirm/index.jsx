import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../Utilities/ScrollToTop';
import Header from '../../Components/Header';

const ReviewAndConfirm = props => {
  const workToApprove = props.work.filter(work => work.customerChoicePrice > 0);

  let CurrencyPounds = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });

  const renderStockChip = work => {
    const chosenPart = work.customerChoice === 1 ? work.parts.manufacturer : work.parts.autoparts;

    return (
      <span className={chosenPart.inStock ? `ch-chip ch-chip--lg ch-chip--green` : `ch-chip ch-chip--lg ch-chip--orange`}>
        {chosenPart.inStock ? "In stock" : `Available ${chosenPart.inStockDate}`}
      </span>
    )
  }

  return (
    <>
      <ScrollToTop />
      <Header progress={props.progress} title="Review and confirm work" />
      <div class="ch-container ch-mt--2 ch-pb--3 ch-flex--auto">
        <h2 className="ch-mb--1">Summary of work</h2>
        <p className="ch-mb--3 ch-fs--3">Please review and confirm the work</p>

        <div className="ch-ba--1 ch-bc--grey-3 ch-shadow--md ch-bg--white ch-rounded owa-approved-work ch-mb--4">
          <h3 className="ch-bg--grey-1 ch-bb--1 ch-bc--grey-3 ch-pa--2 ch-fs--3 ch-mb--0 owa-approved-work__title">Work you've just approved</h3>
          <ul className="owa-approved-work__list">
            { workToApprove.map((work, i) => (
              <li key={i} className="ch-ph--2 ch-pv--3 ch-bb--1 ch-bc--grey-3">
                <div className="ch-display--flex ch-align-items--center ch-justify-content--between ch-mb--1">
                  <span className="ch-fs--3">{work.subGroup} - {work.componentDescription}</span>
                  <span className="ch-fs--3 ch-fw--500">{ CurrencyPounds.format(work.customerChoicePrice) }</span>
                </div>
                <div className="ch-mb--1">
                  <span class="ch-fs--3">{work.cause} - {work.action}</span>
                </div>
                { renderStockChip(work) }
              </li>
            ))}
          </ul>
        </div>

        <div className="ch-ba--1 ch-bc--grey-3 ch-shadow--md ch-bg--white ch-rounded owa-grand-total">
          <div className="ch-bg--grey-1 ch-bb--1 ch-bc--grey-3 ch-pa--2 ch-display--flex ch-align-items--center ch-justify-content--between">
            <span className="ch-fs--3 ch-fw--500 ch-mr--6">Spread over 3 or 6 interest-free payments</span>
            <img src="/images/easy-pay-logo.svg" alt="EasyPay" />
          </div>
          <div className="ch-pa--2 ch-display--flex ch-align-items--center ch-justify-content--between">
            <span className="ch-fs--3"><strong className="ch-fw--500">Total</strong> incl. VAT</span>
            <span className="ch-fs--5 ch-fw--500 ch-color--ac-pricing">{ CurrencyPounds.format(props.totalPrice) }</span>
          </div>
        </div>
      </div>

      <div className="owa-sticky-total ch-flex--none ch-bg--white ch-bt--1 ch-bc--grey-3 ch-pa--2">
        <Link to={props.nextPage} className="ch-btn ch-btn--block ch-btn--success">Next: {props.nextPageDescription}</Link>
      </div>
    </>
  );
}

export default ReviewAndConfirm;