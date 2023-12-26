import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import { Canvas, events } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Rocket = ({ isMobile }) => {
  const model = useGLTF('public/rocket_planet/scene.gltf');
  return (
    <mesh>
      <hemisphereLight 
      intensity={3}
      groundColor="black" />
      <primitive
        object={model.scene}
        scale={0.025}
        rotation={[0, 0, 0.1]}
      />
    </mesh>
  )
}

const RocketCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} camera={{ position: isMobile ? [20, 0, 17.5] : [20, 3, 5], fov: 2 }}
      gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          autoRotate
        />
        <Rocket isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RocketCanvas 