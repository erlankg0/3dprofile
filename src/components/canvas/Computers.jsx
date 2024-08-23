import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf'); // Исправлен путь к файлу

  return (
    <>
      <hemisphereLight intensity={1} groundColor={'black'} />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? .5 : .75}
        position={isMobile ? [0, -3, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.02, -0.1]}
      />

    </>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setMobile(mediaQuery.matches);

    const handleMediaQuearyChange = (event) => {
      setMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQuearyChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuearyChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;