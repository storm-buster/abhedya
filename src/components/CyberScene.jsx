import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { MathUtils } from 'three'

function EnergyCore({ mode, pointerRef }) {
  const coreRef = useRef(null)
  const knotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [pulsed, setPulsed] = useState(false)
  const isCompact = mode === 'compact'

  useFrame((state, delta) => {
    const pointer = pointerRef?.current ?? { x: 0, y: 0 }
    const xFactor = isCompact ? 0.6 : 1.15
    const yFactor = isCompact ? 0.35 : 0.78

    state.camera.position.x = MathUtils.lerp(
      state.camera.position.x,
      pointer.x * xFactor,
      0.04,
    )
    state.camera.position.y = MathUtils.lerp(
      state.camera.position.y,
      pointer.y * yFactor,
      0.04,
    )
    state.camera.lookAt(0, 0, 0)

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * (isCompact ? 0.2 : 0.28)
      coreRef.current.rotation.y += delta * (isCompact ? 0.3 : 0.42)
    }

    if (knotRef.current) {
      knotRef.current.rotation.x -= delta * (isCompact ? 0.14 : 0.18)
      knotRef.current.rotation.y += delta * (isCompact ? 0.22 : 0.32)
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (isCompact ? 0.18 : 0.26)
      ringRef.current.rotation.x -= delta * (isCompact ? 0.1 : 0.14)
    }
  })

  return (
    <group scale={isCompact ? 0.85 : 1}>
      <Float
        floatIntensity={isCompact ? 0.7 : 1.2}
        rotationIntensity={isCompact ? 0.45 : 0.85}
        speed={isCompact ? 1.05 : 1.6}
      >
        <mesh
          onClick={() => setPulsed((value) => !value)}
          onPointerOut={() => setHovered(false)}
          onPointerOver={() => setHovered(true)}
          ref={coreRef}
          scale={hovered ? 1.06 : 1}
        >
          <icosahedronGeometry args={[isCompact ? 1.08 : 1.4, 2]} />
          <meshStandardMaterial
            color={hovered ? '#4dc9f6' : '#9b4dff'}
            emissive={pulsed ? '#4dc9f6' : '#7b2fff'}
            emissiveIntensity={pulsed ? 1.2 : 0.5}
            metalness={0.75}
            roughness={0.1}
            wireframe={!isCompact}
          />
        </mesh>
      </Float>

      <mesh ref={knotRef}>
        <torusKnotGeometry args={[isCompact ? 2.05 : 2.45, 0.08, 240, 24]} />
        <meshStandardMaterial
          color="#7b2fff"
          emissive="#9b4dff"
          emissiveIntensity={0.45}
          metalness={0.5}
          roughness={0.18}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[isCompact ? 2.8 : 3.25, 0.05, 16, 200]} />
        <meshStandardMaterial
          color="#e040fb"
          emissive="#e040fb"
          emissiveIntensity={0.5}
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

function SceneContents({ mode, pointerRef }) {
  const isCompact = mode === 'compact'

  return (
    <>
      <ambientLight intensity={isCompact ? 0.35 : 0.3} />
      <pointLight
        color="#4dc9f6"
        distance={isCompact ? 18 : 22}
        intensity={isCompact ? 16 : 22}
        position={[4, 3.5, 5]}
      />
      <pointLight
        color="#9b4dff"
        distance={isCompact ? 14 : 18}
        intensity={isCompact ? 20 : 28}
        position={[-4, -3, 4]}
      />
      <spotLight
        angle={0.4}
        color="#e040fb"
        distance={isCompact ? 18 : 22}
        intensity={isCompact ? 10 : 15}
        penumbra={0.8}
        position={[0, 6, 8]}
      />
      <Stars
        count={isCompact ? 1000 : 2000}
        depth={isCompact ? 24 : 32}
        factor={2.8}
        fade
        radius={45}
        speed={0.4}
      />
      <Sparkles
        color="#9b4dff"
        count={isCompact ? 50 : 100}
        scale={isCompact ? 7 : 9}
        size={2.2}
        speed={0.25}
      />
      <Sparkles
        color="#4dc9f6"
        count={isCompact ? 20 : 40}
        scale={isCompact ? 5 : 7}
        size={1.5}
        speed={0.15}
      />
      <EnergyCore mode={mode} pointerRef={pointerRef} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={isCompact ? 0.4 : 0.3}
        enablePan={false}
        enableRotate={!isCompact}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.85}
        minPolarAngle={Math.PI / 2.65}
      />
    </>
  )
}

export default function CyberScene({ mode = 'hero', pointerRef }) {
  const isCompact = mode === 'compact'

  return (
    <Canvas
      camera={{ fov: isCompact ? 48 : 52, position: [0, 0, isCompact ? 7 : 8] }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#0a0a1a']} />
      <fog attach="fog" args={['#0a0a1a', isCompact ? 8 : 9, isCompact ? 16 : 20]} />
      <Suspense fallback={null}>
        <SceneContents mode={mode} pointerRef={pointerRef} />
      </Suspense>
    </Canvas>
  )
}
