import './style.scss';

/**
 * Specialization content component, intended for rendering floating within the threejs scene
 *
 * @returns {JSX}
 */
const Specialization = () => (
  <div className="specialization">
    <h2 className="specialization__title">specializing in</h2>
    <ul className="specialization__list">
      <li>Front-End Architecture</li>
      <li>Visual &amp; Interface Design</li>
      <li>{`"Making It Happen"`}</li>
    </ul>
  </div>
);

export default Specialization;
