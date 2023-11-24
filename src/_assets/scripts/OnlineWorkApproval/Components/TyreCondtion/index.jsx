import React from 'react';

const TyreCondtion = props => {
  let formattedCondition = props.condition.charAt(0).toUpperCase() + props.condition.slice(1);
  let formattedMileage = props.mileage.toLocaleString('en-GB');

  return (
    <div className={`ch-display--flex ch-align-items--center ${props.className}`}>
      <img src={`/images/icon-tyre-${props.condition}.svg`} alt="Tyre conditon" className="ch-mr--2" />
      <div>
        <span className="ch-fs--1 ch-display--block">{props.location} tyre</span>
        <span className="ch-fs--3 ch-fw--500 ch-fs--1 ch-display--block">{formattedCondition} condition</span>
        <span className="ch-display--block">Up to <strong>{formattedMileage} miles</strong> of legal driving left</span>
      </div>
    </div>  
  )
};

export default TyreCondtion;