import React, { useState } from 'react';
import Card from '../Card';

const WorkCard = props => {
  const [showParts, setShowParts] = useState(false);

  const Essential = () => (
    <>
      <span className="ch-text--uppercase ch-color--ac-red ch-fw--600 ch-fs--2">Essential</span>
      {/* <span className="ch-chip ch-chip--lg ch-chip--outline ch-chip--red ch-fw--600">MOT fail</span> */}
    </>
  );

  const Advisory = () => (
    <>
      <span className="ch-text--uppercase ch-color--ac-orange ch-fw--600 ch-fs--2">Advisory</span>
      {/* <span className="ch-chip ch-chip--lg ch-chip--outline ch-chip--orange ch-fw--600">MOT advisory</span> */}
    </>
  )
  return (
    <div className={`ch-ba--1 ch-bc--grey-3 ch-bg--white ch-rounded ch-shadow--md ${props.className}`}>
      <div className="ch-pa--3">
        <div className="ch-display--flex ch-align-items--center ch-justify-content--between ch-mb--2">
          { props.type == "essential" ? <Essential /> : <Advisory />}
        </div>

        <div>
          <span className="ch-fs--1 ch-text--uppercase ch-fw--600 ch-color--grey-5 ch-display--block">{props.group}</span>
          <h2 className="ch-fs--4 ch-mb--1">{props.subGroup} - {props.component}</h2>
          <span className="ch-fs--3">{props.cause} - {props.action}</span>
        </div>

        { props.notes && (
          <div className="ch-rounded ch-bg--grey-1 ch-pa--2 ch-ba--1 ch-bc--grey-2 ch-mt--2">
            <h3 className="ch-fs--3 ch-mb--1">Technician's notes</h3>
            <p className="ch-mb--0 ch-fs--3">{props.notes}</p>
          </div>
        )}
      </div>

      {props.partDescriptions.length > 0 && (
        <div className="ch-bt--1 ch-bc--grey-3 ch-bg--grey-1 ch-pa--3 owa-multipart" onClick={() => setShowParts(!showParts)}>
          <div className="ch-display--flex ch-align-items--center ch-justify-content--between">
            <div className="ch-display--flex">
              <img src="/images/icon-attention.svg" className="ch-mr--2" alt="Attention" />
              <span className="ch-fs--3">This repair includes multiple parts</span>
            </div>
            <button className="ch-btn ch-btn--link ch-pa--0 ch-display--block ch-ml--4" style={{whiteSpace: "nowrap"}} onClick={() => setShowParts(!showParts)}>{ showParts ? "Hide parts" : "Show parts" }</button>
          </div>
          { showParts &&
            <ul className="ch-mt--2">
              { props.partDescriptions.map((part, index) => 
                <li className={`ch-display--flex ch-justify-content--between ch-align-items--center ch-pa--2 ${index % 2 ? `ch-bg--grey-1` : `ch-bg--grey-2`}`}>
                  <span>{part}</span>
                </li>
              ) }
            </ul>
          }
        </div>
      )}
    </div>
  )
};

export default WorkCard;