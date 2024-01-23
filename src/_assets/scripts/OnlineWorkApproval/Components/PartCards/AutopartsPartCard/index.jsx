import React, { useState } from 'react';
import Card from '../../Card';

const AutopartsPartCard = props => {
  let CurrencyPounds = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });

  const [showParts, setShowParts] = useState(false);

  const parts = props.part.parts;
  const partRowColors = [""]

  return (
    <Card className={props.className}>
      <h3 className="ch-mb--1 ch-fs--4">Arnold Clark approved</h3>
      <span className="ch-display--block ch-fs--2 ch-mb--1">A quality alternative by Arnold Clark</span>
      <div className="ch-display--flex ch-justify-content--between ch-align-items--center ch-mb--1">
        <span className="ch-display--block ch-fs--4 ch-color--ac-pricing ch-fw--500">{CurrencyPounds.format(props.part.price)}</span>
        { parts.length > 0 && <button className="ch-btn ch-btn--link ch-pa--0" onClick={() => setShowParts(!showParts)}>{ showParts ? "Hide parts" : "Show parts" }</button>}
      </div>
      { parts.length > 0 && showParts &&
        <ul className="ch-mb--2">
          { parts.map((part, index) => 
            <li className={`ch-display--flex ch-justify-content--between ch-align-items--center ch-pa--2 ${index % 2 ? `ch-bg--grey-1` : `ch-bg--grey-2`}`}>
              <span>{part.description}</span>
              <span className="ch-color--ac-pricing ch-fw--500">{CurrencyPounds.format(part.price)}</span>
            </li>
          ) }
        </ul>
      }
      <div className="ch-rounded ch-bg--grey-1 ch-ba--1 ch-bc--grey-2 ch-pa--2 ch-mb--2">
        <div className="ch-display--flex ch-align-items--center ch-text--center ch-centered ch-mb--1">
          { props.part.inStock ? <img src="/images/icon-tick-contained.svg" width="18" height="18" className="ch-mr--1" alt="tick icon" /> : <img src="/images/icon-calendar.svg" width="18" height="18" className="ch-mr--1" alt="calendar icon" /> }
          <strong>{ props.part.inStock? "Available today" : `Available ${props.part.inStockDate}` }</strong>
        </div>
        <p className="ch-text--center ch-fs--1 ch-mb--0">{ props.part.inStock ? "In stock ready to be fitted today" : "Your service advisor will contact you to arrange fitting of these parts" }</p>
      </div>
      { props.chosen ? (
        <div className="owa-part-selected ch-display--flex ch-align-items--center ch-text--center ch-centered ch-ba--2 ch-bc--ac-blue ch-rounded">
          <img src="/images/icon-tick.svg" alt="tick icon" className="ch-mr--1" />
          <span className="ch-fs--3 ch-fw--500">Part selected</span>
        </div>
      ) : (
        <button className="ch-btn ch-btn--primary ch-btn--block" onClick={() => props.choosePart(props.id, 2, props.part.price)}>Choose part</button>
      )}
    </Card>
  )
}

export default AutopartsPartCard;