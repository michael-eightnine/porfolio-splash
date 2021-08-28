import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Specialization } from 'Components';
import Sphere from '../Sphere';
import { CameraParallax, Lighting } from '../helpers';

const Scene = ({ currentTheme, onThemeChange }) => (
  <Canvas className="scene-container">
    <CameraParallax canvasSelector=".app" mouseMoveFactor={0.0025} />
    <Lighting {...{ currentTheme }} />
    <Sphere {...{ currentTheme, onThemeChange }} />
    <Html position={[3, -1, -1]} center zIndexRange={[16, 20]}>
      <Specialization {...{ currentTheme }} />
    </Html>
  </Canvas>
);

export default Scene;
