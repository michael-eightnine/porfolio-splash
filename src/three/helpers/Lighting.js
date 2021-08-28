import PropTypes from 'prop-types';
import { useSpring, animated, config } from 'react-spring/three';

/**
 * Helper component that provides our scene lighting
 *
 * @property {object} currentTheme - currently active scene theme
 * @returns {JSX}
 */
const Lighting = ({ currentTheme }) => {
  const { color } = useSpring({
    config: config.wobbly,
    color: currentTheme.lightingColor
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <animated.pointLight
        position={[-10, 0, -20]}
        color={color}
        intensity={2.5}
      />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </>
  );
};

Lighting.propTypes = {
  currentTheme: PropTypes.object.isRequired
};

export default Lighting;
