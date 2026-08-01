"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Html, 
  Environment, 
  ContactShadows, 
  Float, 
  MeshWobbleMaterial, 
  Stars, 
  OrbitControls,
  RoundedBox
} from "@react-three/drei";
import * as THREE from "three";

// --- 3D World Scene (Inner Universe) ---
function WorldScene({ onBack }: { onBack: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const { camera } = useThree();

  useEffect(() => {
    // Reset camera position for the 3D world view
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 2) * 0.3;
      meshRef.current.rotation.y = Math.cos(t / 2) * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.x = Math.cos(t * 0.3) * 0.4;
    }
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={meshRef} scale={1.8}>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <MeshWobbleMaterial
            color="#38bdf8"
            factor={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            wireframe={false}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef} scale={2.8}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={1}
        />
      </mesh>

      <Html position={[0, -4, 0]} center>
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full transition-all text-sm uppercase tracking-widest font-semibold"
        >
          Return to Reality
        </button>
      </Html>
      
      <OrbitControls autoRotate autoRotateSpeed={0.5} enablePan={false} maxDistance={15} minDistance={3} />
    </group>
  );
}

// --- Premium Realistic Laptop Model ---
function PremiumLaptop({ onInteract, isOpen }: { onInteract: () => void, isOpen: boolean }) {
  const lid = useRef<THREE.Group>(null);
  
  // Materials for a sleek, Apple-like look
  const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: "#94a3b8", // Slate 400
    roughness: 0.3,
    metalness: 0.7,
  });
  
  const darkPlasticMaterial = new THREE.MeshStandardMaterial({
    color: "#0f172a", // Slate 900
    roughness: 0.8,
    metalness: 0.2,
  });
  
  const screenBezelMaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.1,
    metalness: 0.9,
  });

  useFrame((state, delta) => {
    if (lid.current) {
      // Open to -105 degrees (-Math.PI * 0.58)
      const targetRotation = isOpen ? -Math.PI * 0.58 : 0;
      lid.current.rotation.x = THREE.MathUtils.damp(lid.current.rotation.x, targetRotation, 4, delta);
    }
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Base Chassis */}
      <RoundedBox args={[4.2, 0.15, 3.2]} radius={0.05} smoothness={4} position={[0, 0, 0]} material={aluminumMaterial} receiveShadow castShadow />
      
      {/* Keyboard Indent & Keys */}
      <RoundedBox args={[3.8, 0.02, 1.5]} radius={0.02} smoothness={2} position={[0, 0.076, -0.2]} material={darkPlasticMaterial} />
      
      {/* Trackpad */}
      <RoundedBox args={[1.4, 0.02, 0.9]} radius={0.02} smoothness={2} position={[0, 0.076, 1.1]} material={new THREE.MeshStandardMaterial({ color: "#64748b", roughness: 0.4, metalness: 0.5 })} />

      {/* Lid (hinged at the back) */}
      <group position={[0, 0.075, -1.6]} ref={lid}>
        {/* The lid itself, shifted forward so its bottom rests on the hinge */}
        <group position={[0, 0, 1.6]}>
          {/* Lid outer shell */}
          <RoundedBox args={[4.2, 0.12, 3.2]} radius={0.05} smoothness={4} material={aluminumMaterial} castShadow />
          
          {/* Screen Bezel (inner face of lid) */}
          <RoundedBox args={[4.0, 0.01, 3.0]} radius={0.05} smoothness={2} position={[0, 0.06, 0]} material={screenBezelMaterial} />
          
          {/* Glowing Screen (only when open) */}
          <mesh position={[0, 0.066, 0]} rotation={[-Math.PI / 2, 0, 0]}>
             <planeGeometry args={[3.9, 2.9]} />
             <meshBasicMaterial color="#000000" />
             {isOpen && (
               <Html 
                 transform 
                 wrapperClass="laptop-screen" 
                 distanceFactor={1.22} 
                 position={[0, 0, 0.005]} 
                 occlude="blending"
               >
                  <div className="w-[1280px] h-[800px] bg-slate-950 flex flex-col justify-between p-12 border-2 border-slate-800 rounded-xl overflow-hidden relative cursor-default select-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
                    {/* A complete looking portfolio layout inside the screen */}
                    
                    {/* Navbar */}
                    <div className="w-full flex justify-between items-center bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-md z-10">
                      <div className="text-3xl font-bold text-white tracking-wider flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                        HAMZA.DEV
                      </div>
                      <div className="flex gap-10 text-slate-300 text-2xl font-medium">
                        <span className="hover:text-white cursor-pointer transition-colors">Projects</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Skills</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Experience</span>
                      </div>
                      <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xl font-medium transition-all border border-white/10">
                        Contact Me
                      </button>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex flex-col items-center text-center mt-8">
                      <div className="px-8 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-2xl font-medium mb-8">
                        React Native & Next.js Expert
                      </div>
                      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 mb-8 drop-shadow-2xl leading-tight max-w-5xl">
                        Building Exceptional Digital Experiences
                      </h1>
                      <p className="text-slate-400 text-4xl max-w-4xl mb-16 leading-relaxed">
                        I craft high-performance mobile applications and immersive web interfaces that push the boundaries of modern design.
                      </p>
                      
                      {/* The Magic Button */}
                      <button 
                        onClick={onInteract}
                        className="group relative px-14 py-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-4xl font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(59,130,246,0.6)] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                        <span className="relative z-10 flex items-center gap-4">
                          Enter 3D Experience
                          <svg className="w-10 h-10 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Stats / Tech Stack */}
                    <div className="w-full grid grid-cols-4 gap-8 mt-auto z-10">
                      {['React Native', 'Next.js', 'TypeScript', 'Three.js'].map((tech) => (
                        <div key={tech} className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm shadow-xl">
                           <span className="text-slate-300 text-3xl font-semibold tracking-wide">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Background Grid & Glow */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
                  </div>
               </Html>
             )}
          </mesh>
        </group>
      </group>
    </group>
  );
}

// --- Controller to manage transitions ---
function SceneController({ 
  sceneState, 
  setSceneState 
}: { 
  sceneState: 'laptop' | 'transitioning' | 'world', 
  setSceneState: (s: 'laptop' | 'transitioning' | 'world') => void 
}) {
  const { camera } = useThree();
  const [isOpen, setIsOpen] = useState(false);
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    // Open laptop after a small delay on load
    const t = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  useFrame((state) => {
    if (sceneState === 'laptop' || sceneState === 'transitioning') {
      const targetPos = new THREE.Vector3(0, 2, 8);
      const targetLook = new THREE.Vector3(0, 0, 0);

      if (sceneState === 'transitioning') {
        // Zoom into the screen dynamically
        targetPos.set(0, 0.2, -0.2); 
        targetLook.set(0, 0.2, -2);
        
        // When camera is close enough to the screen, snap to world state
        if (camera.position.distanceTo(targetPos) < 0.5) {
          setSceneState('world');
        }
      } else {
        // Subtle floating animation for the laptop state
        targetPos.x = Math.sin(state.clock.elapsedTime * 0.3) * 1.5;
        targetPos.y = 2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
      }

      // Smoothly move the camera
      camera.position.lerp(targetPos, sceneState === 'transitioning' ? 0.04 : 0.02);
      lookAtTarget.current.lerp(targetLook, sceneState === 'transitioning' ? 0.04 : 0.02);
      camera.lookAt(lookAtTarget.current);
    }
  });

  if (sceneState === 'world') {
    return (
      <WorldScene onBack={() => {
        setSceneState('laptop');
        // Instantly reset camera position to avoid glitchy transition back
        camera.position.set(0, 2, 8);
        lookAtTarget.current.set(0, 0, 0);
      }} />
    );
  }

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" castShadow />
      <spotLight position={[0, 10, 0]} intensity={1} color="#10b981" />
      <Environment preset="city" />
      <PremiumLaptop onInteract={() => setSceneState('transitioning')} isOpen={isOpen} />
      <ContactShadows position={[0, -1.01, 0]} opacity={0.5} scale={10} blur={2} far={2} />
    </>
  );
}

export default function HeroScene3D() {
  const [sceneState, setSceneState] = useState<'laptop' | 'transitioning' | 'world'>('laptop');

  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        shadows
      >
        <SceneController sceneState={sceneState} setSceneState={setSceneState} />
      </Canvas>
    </div>
  );
}
