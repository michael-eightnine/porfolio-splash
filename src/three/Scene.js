import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Plane, Html } from '@react-three/drei';
import Sphere from './Sphere';
import { CameraParallax } from './helpers';

const Scene = () => (
  <Canvas className="scene-container">
    <CameraParallax canvasSelector=".scene-container" mouseMoveFactor={0.0025} />
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
    <pointLight position={[-10, 0, -20]} color="#898fa5" intensity={2.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />
    <Sphere args={[1, 24, 24]} />
    <Html position={[1, 0, 1.5]}>
      <div className="about">
        <h2>specializing in</h2>
        <ul>
          <li>front-end development</li>
          <li>collaborative design</li>
          <li>"making it happen"</li>
        </ul>
      </div>
    </Html>
  </Canvas>
);

export default Scene;
