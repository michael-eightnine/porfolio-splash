import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';
import { easeElasticOut } from 'd3-ease';
import {
  Html,
  MeshWobbleMaterial,
  Sphere as SphereBase
} from '@react-three/drei';
import { useSpring, animated } from 'react-spring/three';
import { THEMES } from 'Constants';
import { Wordmark } from 'Components';

const AnimatedWobbleMaterial = animated(MeshWobbleMaterial);

const DURATION = 4000;

/**
 * react-three-fiber based component, renders a 3D sphere that contains the site wordmark
 * Every `DURATION` this component cycles to a new theme variation
 *
 * @property {object} currentTheme - currently active scene theme
 * @property {function} onThemeChange - function to update the current themes
 * @returns {JSX}
 */
const Sphere = ({ currentTheme, onThemeChange }) => {
  const meshRef = useRef();
  const themeIndexRef = useRef(0);

  useEffect(() => {
    const rotateTheme = () => {
      const currentThemeIndex = themeIndexRef.current;
      const nextIndex =
        currentThemeIndex === THEMES.length - 1 ? 0 : currentThemeIndex + 1;
      themeIndexRef.current = nextIndex;
      onThemeChange(nextIndex);
    };

    setInterval(rotateTheme, DURATION);
  }, [onThemeChange]);

  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.0075;
  });

  const { color, scale, factor } = useSpring({
    config: {
      duration: DURATION,
      easing: easeElasticOut
    },
    factor: currentTheme.factor,
    scale: currentTheme.scale,
    color: currentTheme.sphereColor
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, -10]}>
        <animated.mesh {...{ scale }}>
          <Html distanceFactor={5} transform zIndexRange={[10, 15]}>
            <Wordmark color={currentTheme.logoColor} isSphereWordmark />
          </Html>
          <SphereBase args={[5, 100, 100]}>
            <AnimatedWobbleMaterial
              attach="material"
              {...{ factor, color }}
              speed={0.25}
            />
          </SphereBase>
        </animated.mesh>
      </mesh>
    </>
  );
};

Sphere.propTypes = {
  currentTheme: PropTypes.object.isRequired,
  onThemeChange: PropTypes.func.isRequired
};

export default Sphere;
