import React from 'react';
import Card from '../../Card';

const NoRepairCard = props => (
  <Card className={props.className}>
    { props.chosen ? (
      <div className="owa-part-selected ch-display--flex ch-align-items--center ch-text--center ch-centered ch-ba--2 ch-bc--ac-blue ch-rounded">
        <img src="/images/icon-tick.svg" alt="tick icon" className="ch-mr--1" />
        <span className="ch-fs--3 ch-fw--500">I don't want this repair</span>
      </div>
    ) : (
      <button className="ch-btn ch-btn--primary ch-btn--block" onClick={() => props.choosePart(props.id, 3, 0)}>I don't want this repair</button>
    ) }
    
  </Card>
);

export default NoRepairCard;