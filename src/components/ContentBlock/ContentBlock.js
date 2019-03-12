import React from "react";
import PropTypes from "prop-types";
import WithTransition from "../WithTransition/WithTransition";
import "./content-block.scss";

/**
 * Main content component for the single portfolio page. Contains biographic copy
 * and links to resume, HTA and GitHub
 *
 * Utilizes the WithTransition component for a consistent visibility transition state
 *
 * @param {object} props - react props
 * @param {boolean} props.transitionActive - is this component transitioning into view?
 *                                           provided by the WithTransition HOC
 * @returns {ReactComponent}
 */
const ContentBlock = ({ transitionActive }) => (
  <div
    className={
      transitionActive
        ? "content-block content-block--transition"
        : "content-block"
    }
  >
    <p className="content-block__section">
      Michael Smith is a front-end web developer &amp; visual artist working and
      living in Chicago. Professionally, he's focused on architecting &amp;
      building complex, eye-catching, and scalable React + Redux web apps for a wide
      variety of clients. Recently, cutting edge web technologies such as
      Service Workers and AR have become a major pursuit as well.
    </p>
    <p className="content-block__section">
      Outside of professional development he spends his time creating visual
      art, in both digital and analog mediums, often from an experimental angle.
      This creativity and willingness to innovate back shines through to his
      professional work, ensuring all his clients receive the most thoughtful
      solution possible.
    </p>
    <div className="content-block__links">
      <a href="mailto:michael@eightnine.co">Contact</a>
      <a href="google.com">Résumé</a>
      <a
        href="http://hta.eightnine.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hometown [dis]Advantage
      </a>
      <a
        href="https://github.com/michael-eightnine"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
);

ContentBlock.propTypes = {
  transitionActive: PropTypes.bool
};

export default WithTransition(ContentBlock);
