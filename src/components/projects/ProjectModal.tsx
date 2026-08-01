"use client";

import React, { useState, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Smartphone } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Environment, 
  Float, 
  ContactShadows, 
  PresentationControls, 
  useTexture, 
  RoundedBox 
} from "@react-three/drei";
import * as THREE from "three";

// --- 3D Image Panel ---
function DynamicImagePanel({ url, index, currentIndex }: { url: string, index: number, currentIndex: number }) {
  const texture = useTexture(url);
  const meshRef = useRef<THREE.Group>(null);
  
  // Calculate aspect ratio to perfectly fit the image without stretching
  const aspect = texture.image ? texture.image.width / texture.image.height : 1;
  const width = aspect > 1 ? 4 : 4 * aspect;
  const height = aspect > 1 ? 4 / aspect : 4;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const isCurrent = currentIndex === index;
    const isPrev = index < currentIndex;
    const isNext = index > currentIndex;
    
    // Target Coverflow Positions
    let targetX = 0;
    let targetZ = -4; // hide if way off
    let targetRotY = 0;
    let targetScale = 0;

    if (isCurrent) {
      targetX = 0;
      targetZ = 0;
      targetRotY = 0;
      targetScale = 1;
    } else if (isPrev && currentIndex - index === 1) {
      targetX = -2.5;
      targetZ = -2;
      targetRotY = Math.PI / 6;
      targetScale = 0.7;
    } else if (isNext && index - currentIndex === 1) {
      targetX = 2.5;
      targetZ = -2;
      targetRotY = -Math.PI / 6;
      targetScale = 0.7;
    } else if (isPrev) {
      targetX = -4;
      targetZ = -4;
      targetRotY = Math.PI / 4;
      targetScale = 0.4;
    } else if (isNext) {
      targetX = 4;
      targetZ = -4;
      targetRotY = -Math.PI / 4;
      targetScale = 0.4;
    }
    
    // Smooth dampening interpolation
    meshRef.current.position.x = THREE.MathUtils.damp(meshRef.current.position.x, targetX, 5, delta);
    meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, targetZ, 5, delta);
    meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotY, 5, delta);
    
    const currentScale = meshRef.current.scale.x;
    const nextScale = THREE.MathUtils.damp(currentScale, targetScale, 5, delta);
    meshRef.current.scale.setScalar(nextScale);
  });

  return (
    <group ref={meshRef}>
       <RoundedBox args={[width + 0.1, height + 0.1, 0.05]} radius={0.05} smoothness={4} castShadow>
         <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.8} />
       </RoundedBox>
       {/* Front Face */}
       <mesh position={[0, 0, 0.026]}>
         <planeGeometry args={[width, height]} />
         <meshBasicMaterial map={texture} />
       </mesh>
       {/* Back Face */}
       <mesh position={[0, 0, -0.026]} rotation={[0, Math.PI, 0]}>
         <planeGeometry args={[width, height]} />
         <meshBasicMaterial map={texture} />
       </mesh>
    </group>
  );
}

// --- 3D Gallery Canvas ---
function ThreeDGallery({ images, currentIndex }: { images: string[], currentIndex: number }) {
  return (
    <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <Environment preset="city" />
        <PresentationControls 
          global 
          rotation={[0, 0, 0]} 
          polar={[-0.1, 0.1]} 
          azimuth={[-0.3, 0.3]}
          config={{ mass: 1, tension: 170, friction: 26 }}
        >
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <Suspense fallback={null}>
              {images.map((img, idx) => (
                <DynamicImagePanel 
                  key={img} 
                  url={`/images/${img}`} 
                  index={idx} 
                  currentIndex={currentIndex} 
                />
              ))}
            </Suspense>
          </Float>
        </PresentationControls>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xl"
        style={{ perspective: 2000 }}
      >
        <motion.div
          initial={{ opacity: 0, rotateX: 60, rotateY: -20, scale: 0.7, z: -800, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: -60, rotateY: 20, scale: 0.7, z: -800, y: -100 }}
          transition={{ type: "spring", damping: 25, stiffness: 120, mass: 1 }}
          className="relative w-full max-w-5xl glass-panel rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.15)] my-8"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left 3D Showcase */}
            <div className="lg:col-span-7 bg-slate-950/90 flex flex-col items-center justify-center relative min-h-[400px] sm:min-h-[500px] overflow-hidden">
              {images.length > 0 ? (
                <>
                  <ThreeDGallery images={images} currentIndex={currentImgIndex} />

                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/50 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors cursor-pointer border border-white/10 z-10 shadow-lg"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/50 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors cursor-pointer border border-white/10 z-10 shadow-lg"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Carousel Dots */}
                  {images.length > 1 && (
                    <div className="absolute bottom-6 flex items-center gap-2 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImgIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            idx === currentImgIndex
                              ? "bg-cyan-400 w-6 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              : "bg-slate-400 hover:bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-slate-500 text-sm">No screenshots available</div>
              )}
            </div>

            {/* Right Details Panel */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-l border-white/5">
              <div>
                {/* Header Logo + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    initial={{ rotateZ: -180, opacity: 0 }}
                    animate={{ rotateZ: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.2, damping: 15 }}
                    className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/20 p-2.5 flex items-center justify-center shrink-0 shadow-lg"
                  >
                    <img
                      src={`/images/${project.logo}`}
                      alt={project.name}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-extrabold text-white tracking-tight">{project.name}</h3>
                    <span className="text-sm font-mono text-cyan-400 font-medium tracking-wide">Mobile & Full Stack</span>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-300 text-base leading-relaxed mb-8"
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-500 block mb-3 font-semibold">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {project.languages.map((lang, lIdx) => (
                      <span
                        key={lIdx}
                        className="px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-sm font-medium text-cyan-300 flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3 pt-6 border-t border-slate-800"
              >
                {project.playstore && (
                  <a
                    href={project.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Get on Google Play</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.appstore && (
                  <a
                    href={project.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Get on App Store</span>
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

