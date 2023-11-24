import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../Utilities/ScrollToTop';
import Header from '../../Components/Header';

const PaymentOptions = props => {
  return (
    <>
      <ScrollToTop />
      <Header progress={props.progress} title="Payment options" />
      <div className="ch-container ch-mt--2 ch-pb--3 ch-flex--auto">
        <h2 className="ch-mb--3">How do you want to pay?</h2>

        <form>
          <div className="ch-form__group">  
            <input
              id="payment-1"
              type="radio"
              name="paymentMethod"
              value="EasyPay"
              className="ch-radio"
            />
            <label htmlFor="payment-1" className="ch-radio__label ch-radio__label--large ch-radio__label--primary ch-pv--3">
              <div className="ch-display--flex ch-align-items--center ch-justify-content--between">
                <div>
                  Spread the cost
                  <small>Pay in 3, 6 or 10 months</small>
                </div>
                <img src="/images/easy-pay-logo.svg" alt="EasyPay" />
              </div>
            </label>
          </div>   
          <div className="ch-form__group">  
            <input
              id="payment-2"
              type="radio"
              name="paymentMethod"
              value="Credit card"
              className="ch-radio"
            />
            <label htmlFor="payment-2" className="ch-radio__label ch-radio__label--large ch-radio__label--primary ch-pv--4">
              Credit or debit card
            </label>
          </div>   
          <div className="ch-form__group">  
            <input
              id="payment-3"
              type="radio"
              name="paymentMethod"
              value="Pay in branch"
              className="ch-radio"
            />
            <label htmlFor="payment-3" className="ch-radio__label ch-radio__label--large ch-radio__label--primary ch-pv--4">
              Pay in branch
            </label>
          </div>          
        </form>
      </div>
      <div className="owa-sticky-total ch-flex--none ch-bg--white ch-bt--1 ch-bc--grey-3 ch-pa--2">
        <Link to={props.nextPage} className="ch-btn ch-btn--block ch-btn--success ch-mb--2">Continue</Link>
        <Link to={`/review-and-confirm/`} className="ch-btn ch-btn--block">Back to summary</Link>
      </div>
    </>
  );
};

export default PaymentOptions;