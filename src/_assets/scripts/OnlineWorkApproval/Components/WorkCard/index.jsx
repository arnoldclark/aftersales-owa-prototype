import React from 'react';
import Card from '../Card';

const WorkCard = props => {
  const Essential = () => (
    <>
      <span className="ch-text--uppercase ch-color--ac-red ch-fw--600 ch-fs--2">Essential</span>
      <span className="ch-chip ch-chip--lg ch-chip--outline ch-chip--red ch-fw--600">MOT fail</span>
    </>
  );

  const Advisory = () => (
    <>
      <span className="ch-text--uppercase ch-color--ac-orange ch-fw--600 ch-fs--2">Advisory</span>
      <span className="ch-chip ch-chip--lg ch-chip--outline ch-chip--orange ch-fw--600">MOT advisory</span>
    </>
  )
  return (
    <Card className={props.className}>
      <div className="ch-display--flex ch-align-items--center ch-justify-content--between ch-mb--2">
        { props.type == "essential" ? <Essential /> : <Advisory />}
      </div>

      <div>
        <span className="ch-fs--1 ch-text--uppercase ch-fw--600 ch-color--grey-5 ch-display--block">{props.group}</span>
        <h2 className="ch-fs--4 ch-mb--1">{props.subGroup} - {props.component}</h2>
        <span className="ch-fs--3">{props.cause} - {props.action}</span>
      </div>

      { props.notes && (
        <div className="ch-rounded ch-bg--grey-1 ch-pa--3 ch-ba--1 ch-bc--grey-2">
          <h3 className="ch-fs--3 ch-mt--2 ch-mb--1">Technician's notes</h3>
          <p className="ch-mb--0 ch-fs--3">{props.notes}</p>
        </div>
      )}
    </Card>
  )
};

export default WorkCard;