import { useRef } from 'react';
import { useAccordion } from 'Hooks';
import ContactButton from './ContactButton';
import './style.scss';
import classnames from 'classnames';
import Wordmark from '../Wordmark';

const ContactBar = () => {
  const bioContentRef = useRef();
  const bioContainerRef = useRef();
  const { expanded, setExpanded } = useAccordion(bioContentRef.current, bioContainerRef.current);

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
      <h4 className="contact-bar__title">
        Let's talk!
      </h4>
      <div className="contact-bar__content-wrapper" >
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
            Contact
          </ContactButton>
          <ContactButton
            isHidden={expanded}
            href="https://hta.eightnine.co/"
          >
            Hometown Advantage
          </ContactButton>
        </div>
        <div className="contact-bar__bio-container" ref={bioContainerRef}>
          <div className="contact-bar__bio-content" ref={bioContentRef}>
            <p className="contact-bar__bio-paragraph">
              While titled as a front-end architect, Michael Smith strives to bridge the gap between
              design and development by pairing years of front-end development experience with over
              a decade of visual design expertise. He's primarily focused on React development,
              having concepted and built applications, experiences, and sites for global brands like
              Enterprise Rent-A-Car and Nationwide as well as smaller, niche brands like Monit and
              Liberty Fund.
            </p>
            <p className="contact-bar__bio-paragraph">
              That's the "professional third person" elevator pitch. On a more casual note, I
              believe in exactly what the header of this site says. I am fully invested in
              delivering the best work possible, and helping to elevate teams, brands, and agencies
              to that same standard. Experimental design and experiences really speak to me, but any
              project where I can dive into detailed design and development gives me that "good days
              work" feeling.
            </p>
            <p className="contact-bar__bio-paragraph">Reach out, let's build something together.</p>
            <p className="contact-bar__bio-links">
              <a href="mailto:michael@eightnine.co">michael[at]eightnine.co</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/michael-smith-103716139/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/michael-eightnine"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
