import React from 'react';
import ScrollToTop from '../../Utilities/ScrollToTop';
import Header from '../../Components/Header';
import Card from '../../Components/Card';

const ThankYou = props => {
  return (
    <>
      <ScrollToTop />
      <Header progress={props.progress} title="Thank you" />
      <div className="ch-container ch-flex--auto">
        <div className="ch-mv--5">
          <img src="/images/ac-logo.svg" alt="Arnold Clark" className="ch-centered" />
        </div>

        <Card className="ch-mb--4">
          <div className="ch-text-center ch-mb--2"><img src="/images/icon-tick-large.svg" className="ch-centered" alt="tick" /></div>
          <p className="ch-fs--4 ch-text--center ch-mh--2 ch-mb--0">We’ve sent an email to <strong>usertest@email.com</strong> with all the details of the work</p>
        </Card>

        <h2>What happens next?</h2>
        <p className="ch-fs--3">Your service adviser, Alexander will contact you when your vehicle is ready to collect.</p>
      </div>
    </>
  )
}

export default ThankYou;