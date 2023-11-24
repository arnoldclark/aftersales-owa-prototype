import React from 'react';

const Header = ({title, progress}) => (
  <div className={progress === 100 ? `ch-bg--white ch-shadow--sm ch-flex--none ch-stepper--complete` : `ch-bg--white ch-shadow--sm ch-flex--none`}>
    <div className="ch-container">
      <div className="ch-display--flex ch-align-items--center ch-pv--2 ch-relative">
        <img src="/images/ac-emblem-contained.svg" alt="Arnold Clark" className="ch-absolute" />
        <h1 className="ch-fs--3 ch-text--bold ch-mb--0 ch-centered">{title}</h1>
        {progress === 100 && <span className="ch-stepper__percentage ch-absolute"></span>}
      </div>
    </div>
    <div className="ch-progress" style={{height: '3px'}}>
      <div className="ch-progress__bar" style={{width: progress + '%'}}></div>
    </div>
  </div>
);

export default Header;