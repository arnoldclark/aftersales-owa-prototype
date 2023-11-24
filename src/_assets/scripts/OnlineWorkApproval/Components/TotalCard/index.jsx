import React from 'react';

const TotalCard = props => {
  let CurrencyPounds = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });

  return (
    <div className="owa-sticky-total ch-flex--none">
      <div className="ch-bg--grey-3 ch-centered ch-text--center ch-pv--2 ch-display--flex ch-align-items--center">
        <span className="ch-fs--3 ch-mr--1">Spread the cost with</span> 
        <img src="/images/easy-pay-logo.svg" alt="EasyPay" />
      </div>
      <div className="ch-bg--grey-2 ch-pv--2">
        <div className="ch-container">
          <div className="ch-text--center ch-mb--1">
            <span className="ch-fs--3">Total</span> <span className="owa-total-price ch-color--ac-pricing ch-fw--500">{CurrencyPounds.format(props.totalPrice)}</span>
          </div>
          { props.totalPrice > 0 && (
            <div className="ch-text--center ch-mb--2">
              <span><strong>or</strong> 3 interest-free payments of { CurrencyPounds.format(props.totalPrice / 3)}</span>
              {/* <img src="/images/icon-info.svg" alt="info icon" />   */}
            </div>
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default TotalCard;