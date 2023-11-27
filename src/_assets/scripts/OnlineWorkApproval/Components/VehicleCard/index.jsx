import React from 'react';
import Card from '../Card';

const VehicleCard = props => (
  <Card>
    <span className="ch-fs--3 ch-display--block">Visual health check complete</span>
    <span className="ch-fs--4 ch-text--bold ch-display--block">{props.vehicle.manufacturer} {props.vehicle.model} {props.vehicle.spec}</span>
    <div className="ch-mt--2">
      <span className="ch-chip ch-chip--lg ch-chip--yellow ch-mr--2 ch-fw--600">{props.vehicle.reg}</span>
      {/* <a href="#">What's checked?</a> */}
    </div>
  </Card>
);

export default VehicleCard;