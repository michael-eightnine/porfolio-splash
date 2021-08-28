import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

/**
 * Large title component, emulates the given `copy` being typed onto the page
 * Renders another H1, hidden from screen readers, to create the offset stroke UI
 *
 * @property {string} copy - text to render in this title
 * @returns {JSX}
 */
const Title = ({ copy }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentLength = displayText.length;
    const copyArray = copy.split('');
    // If all characters are typed, exit
    if (currentLength === copyArray.length) return;

    // Push a new character from `copy` to `displayText` on a delay to emulate typing
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

Title.propTypes = {
  copy: PropTypes.string.isRequired
};

export default Title;
