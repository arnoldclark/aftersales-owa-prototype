import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import TotalCard from '../../Components/TotalCard';
import WorkCard from '../../Components/WorkCard';
import ScrollToTop from '../../Utilities/ScrollToTop';
import ManufacturerPartCard from '../../Components/PartCards/ManufacturerPartCard';
import AutopartsPartCard from '../../Components/PartCards/AutopartsPartCard';
import NoRepairCard from '../../Components/PartCards/NoRepairCard';

const ReviewWork = props => {
  let manufacturerPart = props.parts.manufacturer;
  let acPart = props.parts.autoparts;

  const [optionChosen, setOptionChosen] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const navigate = useNavigate();

  const validate = () => {
    if(optionChosen) {
      navigate(props.nextPage);
      setOptionChosen(false);
      setValidationError(null);
    } else {
      setValidationError("Please choose an option before continuing.")
    }
  }

  const choosePart = (id, choice, price) => {
    props.setCustomerChoice(id, choice, price);
    setValidationError(null);
    setOptionChosen(true);
  }

  return (
    <>
      <ScrollToTop />
      <Header progress={props.progress} title="Choose your parts" />
      <div className="ch-container ch-mt--2 ch-pb--3 ch-flex--auto">
        <WorkCard 
          className="ch-mb--4" 
          type={props.work.reportCategory} 
          group={props.work.group} 
          subGroup={props.work.subGroup} 
          component={props.work.componentDescription} 
          cause={props.work.cause} 
          action={props.work.action} />

        <h2 className="ch-mb--2">Choose your parts</h2>

        { manufacturerPart && (
          <ManufacturerPartCard 
            id={props.work.id} 
            className="ch-mb--4" 
            vehicle={props.vehicle} 
            part={manufacturerPart} 
            chosen={props.work.customerChoice === 1} 
            choosePart={choosePart} />
        )}
        
        { acPart && (
          <AutopartsPartCard 
            id={props.work.id} 
            className="ch-mb--4" 
            vehicle={props.vehicle} 
            part={acPart} 
            chosen={props.work.customerChoice === 2} 
            choosePart={choosePart} />
        )}

        <NoRepairCard 
          id={props.work.id} 
          chosen={props.work.customerChoice === 3} 
          choosePart={choosePart} />
      </div>

      <TotalCard totalPrice={props.totalPrice}>
        { validationError && <span className="ch-color--ac-red ch-fw--500 ch-display--block ch-text--center ch-mb--2 ch-fs--3">{validationError}</span> }
        {/* <Link to={props.nextPage} className="ch-btn ch-btn--success ch-btn--block ch-mt--2">Next: {props.nextPageDescription}</Link> */}
        <button onClick={() => validate()} className="ch-btn ch-btn--success ch-btn--block">Next: {props.nextPageDescription}</button>
      </TotalCard>
    </>
  )
};

export default ReviewWork;