import { useRef } from 'react';
import { useAccordion } from 'Hooks';
import ContactButton from './ContactButton';
import './style.scss';
import classNames from 'classnames';

const ContactBar = ({ currentTheme }) => {
  const bioContentRef = useRef();
  const bioContainerRef = useRef();
  const { expanded, setExpanded } = useAccordion(bioContentRef.current, bioContainerRef.current);

  const themeStyle = {
    container: {
      backgroundColor: currentTheme.primaryColor
    },
    title: {
      color: expanded ? currentTheme.secondaryColor : currentTheme.primaryColor
    },
    text: {
      color: currentTheme.secondaryColor
    },
    bio: {
      backgroundColor: currentTheme.primaryColor,
      color: currentTheme.secondaryColor
    }
  };

  return (
    <div
      className={classNames('contact-bar', {
        'contact-bar--expanded': expanded
      })}
    >
      <h4 style={themeStyle.title} className="contact-bar__title">
        Let's talk!
      </h4>
      <div className="contact-bar__content-wrapper" style={themeStyle.container}>
        <div className="contact-bar__list">
          <ContactButton style={themeStyle.text} href="./MichaelSmith_CV.pdf">
            Resumé
          </ContactButton>
          <ContactButton
            isActive={expanded}
            onClick={() => setExpanded(!expanded)}
            style={themeStyle.text}
          >
            Contact
          </ContactButton>
          <ContactButton style={themeStyle.text} href="https://hta.eightnine.co/">
            Hometown Advantage
          </ContactButton>
        </div>
        <div className="contact-bar__bio-container" ref={bioContainerRef}>
          <div className="contact-bar__bio-content" ref={bioContentRef} style={themeStyle.bio}>
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
              <a href="https://www.linkedin.com/in/michael-smith-103716139/">LinkedIn</a>
              <a href="https://github.com/michael-eightnine">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
