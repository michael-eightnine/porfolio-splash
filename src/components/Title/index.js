import { useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

const Title = ({ copy }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentLength = displayText.length;
    const copyArray = copy.split('');
    if (currentLength === copyArray.length) return;

    setTimeout(
      () => {
        setDisplayText(`${displayText}${copyArray[currentLength]}`);
      },
      currentLength === 0 ? 750 : Math.random() * (180 - 50) + 50
    );
  }, [displayText, copy]);

  return (
    <>
      <h1
        className={classnames('title', {
          'title--typing-complete': displayText.length === copy.length,
          'title--typing-near-complete': displayText.length >= copy.length - 3
        })}
      >
        {displayText}
        <span />
      </h1>
      <h1 aria-hidden="true" className="title title--overlap">
        {displayText}
      </h1>
    </>
  );
};

export default Title;
