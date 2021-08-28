import { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Specialization } from 'Components';
import { useMediaQuery } from 'Hooks';
import { THEMES } from 'Constants';
import Sphere from '../Sphere';
import { CameraParallax, Lighting } from '../helpers';

/**
 * Main Three export, renders the sphere scene and handles the logic behind the active scene theme
 *
 * @returns {JSX}
 */
const Scene = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const currentTheme = useMemo(
    () => THEMES[currentThemeIndex],
    [currentThemeIndex]
  );

  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const showSpecialization = useMediaQuery('(min-width: 600px)');

  const desktopPosition = [3, -1, -1];
  const tabletPosition = [1.75, -2.5, -1];

  return (
    <Canvas className="scene-container">
      <CameraParallax
        canvasSelector=".app"
        mouseMoveFactor={isDesktop ? 0.0025 : 0.001}
      />
      <Lighting {...{ currentTheme }} />
      <Sphere {...{ currentTheme }} onThemeChange={setCurrentThemeIndex} />
      {showSpecialization && (
        <Html
          position={isDesktop ? desktopPosition : tabletPosition}
          center
          zIndexRange={[16, 20]}
        >
          <Specialization />
        </Html>
      )}
    </Canvas>
  );
};

export default Scene;
