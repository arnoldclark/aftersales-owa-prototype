import React from 'react';
import Card from '../Card';

const SummaryCard = props => {
  let formattedType = props.type.charAt(0).toUpperCase() + props.type.slice(1);

  return (
    <Card className={props.className}>
      <div className="ch-display--flex ch-align-items--center ch-mb--2">
        <img src={`/images/icon-${props.type}.svg`} alt={`${formattedType} icon`}/>
        <span className="ch-fs--3 ch-ml--2 ch-fw--500">{formattedType}</span>
      </div>
      { props.work.length > 0 && (
        <ul className="ch-list ch-measure">
          { props.work.map((item, i) => (
            <li key={i}>{item.componentDescription} - {item.cause}</li>
          ))}
        </ul>
      ) }
    </Card>
  )
};

export default SummaryCard;