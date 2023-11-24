import React from 'react';
import TyreCondtion from '../TyreCondtion';

const ConditionReport = () => (
  <div className="ch-accordion">
    <details>
      <summary>
        <img src="/images/icon-tick-contained.svg" alt="Tick" className="ch-mr--2" />
        Tyres
      </summary>
      <div className="ch-accordion__content ch-pv--4">
          <TyreCondtion condition="good" mileage={10900} location="Front driver side" className="ch-mb--4" />
          <TyreCondtion condition="good" mileage={10900} location="Front passenger side" className="ch-mb--4" />
          <TyreCondtion condition="good" mileage={10900} location="Rear driver side" className="ch-mb--4" />
          <TyreCondtion condition="good" mileage={10900} location="Rear passenger side" className="ch-mb--4" />
          {/* <a href="#">Our safe driving estimates explained</a> */}
      </div>
    </details>
  </div>
)

export default ConditionReport;