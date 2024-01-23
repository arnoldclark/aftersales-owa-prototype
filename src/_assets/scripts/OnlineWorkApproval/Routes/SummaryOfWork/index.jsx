import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import VehicleCard from '../../Components/VehicleCard';
import SummaryCard from '../../Components/SummaryCard';
import ConditionReport from '../../Components/ConditionReport';
import ScrollToTop from '../../Utilities/ScrollToTop';

const SummaryOfWork = props => {
  const essentialWork = props.work.filter(work => work.reportCategory === "essential");
  const advisoryWork = props.work.filter(work => work.reportCategory === "advisory");

  return (
    <>
      <ScrollToTop />
      <Header progress={props.progress} title="Summary of work" />
      <div className="ch-container ch-mt--2 ch-flex--auto">
        <VehicleCard vehicle={props.vehicle} />

        
        <div className="owa-citnow-video ch-mt--4">
          <iframe className="owa-citnow-video__iframe" width="100%" height="100%" scrolling="no" src="https://www.arnoldclarkcarpreview.com/embed/2bnK2XGC7" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <p className="ch-fs--1 ch- ch-mt--2 ch-mb--3 ch-color--grey-5">Your vehicle might need other checks to fully understand the issues we found</p>

        <h2 className="ch-mt--4 ch-fs--4 ch-mb--1">Work for you to approve</h2>
        <p className="ch-fs--3">Here's what we found during our checks</p>
  
        { essentialWork.length > 0 && <SummaryCard type="essential" work={essentialWork} className="ch-mb--3" />}
        { advisoryWork.legnth > 0 && <SummaryCard type="advisory" work={advisoryWork} /> }
  
        <hr className="ch-mt--4 ch-mb--3 ch-bg--grey-3" />
  
        <h2>Condition report</h2>
        <ConditionReport />
  
        <Link to={'/review-work/1'} className="ch-btn ch-btn--success ch-btn--block ch-mt--4 ch-mb--3">Next: Review Work</Link>
      </div>
    </>
  );
}

export default SummaryOfWork;