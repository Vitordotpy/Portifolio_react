import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const BlackHole = () => {
  const earth = useGLTF('./blackhole/scene.gltf')
  return (
    <primitive object={earth.scene} scale={1.2} position={[0,-2.2,0]} rotation={[0,0,0]}/>
  )
}

const BlackHoleCanvas = () =>{
  return (<Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer:true}} camera={{position:[0, 0, 6]}} >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <BlackHole />
    </Suspense>
    <Preload all/>
  </Canvas>)
}

export default BlackHoleCanvas