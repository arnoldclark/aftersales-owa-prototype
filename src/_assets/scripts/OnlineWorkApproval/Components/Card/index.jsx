import React from 'react';

const Card = props => (
  <div className={`ch-bg--white ch-rounded ch-shadow--md ch-pv--4 ch-ph--3 ch-ba--1 ch-bc--grey-3 ${props.className}`}>
    {props.children}
  </div>
);

export default Card;