import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { easeElasticOut } from 'd3-ease';
import { Html, MeshWobbleMaterial, Sphere as SphereBase } from '@react-three/drei';
import { useSpring, animated } from 'react-spring/three';
import { THEMES } from 'Constants';
import { Wordmark } from 'Components';

const AnimatedWobbleMaterial = animated(MeshWobbleMaterial);

const DURATION = 4000;

const Sphere = ({ currentTheme, onThemeChange }) => {
  const meshRef = useRef();
  const themeIndexRef = useRef(0);

  useEffect(() => {
    const rotateTheme = () => {
      const currentThemeIndex = themeIndexRef.current;
      const nextIndex = currentThemeIndex === THEMES.length - 1 ? 0 : currentThemeIndex + 1;
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
        <animated.mesh scale={scale}>
          <Html distanceFactor={5} transform zIndexRange={[10, 15]}>
            <Wordmark {...{ currentTheme }} />
          </Html>
          <SphereBase args={[5, 100, 100]}>
            a
            <AnimatedWobbleMaterial attach="material" factor={factor} speed={0.25} color={color} />
          </SphereBase>
        </animated.mesh>
      </mesh>
    </>
  );
};

export default Sphere;
