import { forwardRef } from 'react';
import './style.scss';

const AboutAccordion = forwardRef((props, ref) => {
  const { contentRef, containerRef } = ref;

  return (
    <div className="about__container" ref={containerRef}>
      <div className="about__content" ref={contentRef}>
        <div className="about__scroller">
          <p className="about__paragraph">
            {`While titled as a front-end architect, Michael Smith strives to
              bridge the gap between design and development by pairing years of
              front-end development experience with over a decade of visual
              design expertise. He's primarily focused on React development,
              having concepted and built applications, experiences, and sites
              for global brands like Enterprise Rent-A-Car and Nationwide as
              well as smaller, niche brands like Monit and Liberty Fund.`}
          </p>
          <p className="about__paragraph">
            {`That's the "professional third person" elevator pitch. On a more
              casual note, I believe in exactly what the header of this site
              says. I am fully invested in delivering the best work possible,
              and helping to elevate teams, brands, and agencies to that same
              standard. Experimental design and experiences really speak to me,
              but any project where I can dive into detailed design and
              development gives me that "good days work" feeling.`}
          </p>
        </div>
        <div className="about__non-scroller">
          <p className="about__paragraph">
            {`Reach out, let's build something together.`}
          </p>
          <p className="about__links">
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
  );
});

AboutAccordion.displayName = 'AboutAccordion';

export default AboutAccordion;
