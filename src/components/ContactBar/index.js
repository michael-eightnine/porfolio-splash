import { useRef } from 'react';
import { useAccordion } from 'Hooks';
import classnames from 'classnames';
import ContactButton from './ContactButton';
import Wordmark from '../Wordmark';
import AboutAccordion from './AboutAccordion';
import './style.scss';

/**
 * Contact bar content component, sits at the bottom edge of the viewport
 * Has accordion functionality triggered by the "Contact" button, which reveals content and triggers a full page mask
 *
 * @returns {JSX}
 */
const ContactBar = () => {
  const bioContentRef = useRef();
  const bioContainerRef = useRef();
  const { expanded, setExpanded } = useAccordion(
    bioContentRef.current,
    bioContainerRef.current
  );

  return (
    <div
      className={classnames('contact-bar', {
        'contact-bar--expanded': expanded
      })}
    >
      <div
        aria-hidden={!expanded}
        className="contact-bar__mask"
        onClick={() => setExpanded(false)}
      >
        {expanded && <Wordmark />}
      </div>
      <h4 className="contact-bar__title">{`Let's talk!`}</h4>
      <div className="contact-bar__content-wrapper">
        <div
          className={classnames('contact-bar__list', {
            'contact-bar__list--expanded': expanded
          })}
        >
          <ContactButton isHidden={expanded} href="./MichaelSmith_CV.pdf">
            Resumé
          </ContactButton>
          <ContactButton
            isActive={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            About
          </ContactButton>
          <ContactButton isHidden={expanded} href="https://hta.eightnine.co/">
            Hometown Advantage
          </ContactButton>
        </div>
        <AboutAccordion
          ref={{
            contentRef: bioContentRef,
            containerRef: bioContainerRef
          }}
        />
      </div>
    </div>
  );
};

export default ContactBar;
