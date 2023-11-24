import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../Utilities/ScrollToTop';

const Index = () => (
  <>
    <ScrollToTop />
    <div className="ch-container ch-flex--auto">
      <div className="ch-mv--4">
        <img src="/images/ac-logo.svg" alt="Arnold Clark" className="ch-centered" />
      </div>
      <p className="ch-display--block ch-fw--500 ch-fs--3 ch-text--center ch-centered ch-ma--5">Please enter your vehicle registration and surname.</p>
      <p className="ch-text--center ch-mh--4 ch-mb--4">We need this information to ensure you only see information about <strong>your</strong> vehicle.</p>

      <div className="ch-bg--white ch-rounded ch-shadow--md ch-pa--3 ch-ba--1 ch-bc--grey-3">
      <div className="ch-form__group">
          <label htmlFor="registration" className="ch-form__control-label">Registration</label>
          <input type="text" name="registration" id="registration" className="ch-form__control" value="BK66AFO" />
        </div>
        <div className="ch-form__group">
          <label htmlFor="surname" className="ch-form__control-label">Surname</label>
          <input type="text" name="surname" id="surname" className="ch-form__control" value="Clark" />
        </div>

        <p className="ch-text--center ch-fs--1 ch-mt--4">Next you can view your Vehicle Health Check and any work required</p>
        <Link to={'/summary-of-work'} className="ch-btn ch-btn--success ch-btn--block">View work summary</Link>
      </div>
    </div>
  </>
);

export default Index;