"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";


// Body (base + lid shell share the same footprint)
const BODY_W = 4.0;
const BODY_D = 2.84; // depth (z)
const BODY_H = 0.12; // thickness of base

// Lid shell (same width/depth, thinner)
const LID_H = 0.06;

// Screen bezel frame (matte black) – sits on the FRONT face of the lid
const BEZEL_W = BODY_W - 0.06; // 0.03 inset per side from shell edge
const BEZEL_D = BODY_D - 0.06;

// Active screen (the glowing display)
// Chin is thicker than top/sides but not oversized
const SCREEN_SIDE_INSET = 0.06; // from bezel edge
const SCREEN_TOP_INSET = 0.08;
const SCREEN_BOTTOM_INSET = 0.14; // smaller visible chin for Apple logo
const SCREEN_W = BEZEL_W - SCREEN_SIDE_INSET * 2;
const SCREEN_D = BEZEL_D - SCREEN_TOP_INSET - SCREEN_BOTTOM_INSET;
// The screen centre is shifted upward because the chin is fatter than the top
const SCREEN_Z_OFFSET = (SCREEN_BOTTOM_INSET - SCREEN_TOP_INSET) / 2;

// Keyboard recess
const KB_W = 3.6;
const KB_D = 1.3;

// Trackpad
const TP_W = 1.4;
const TP_D = 0.9;

// HTML pixel sizes (these map onto the 3D plane via distanceFactor)
const HTML_SCREEN_W = 780;
const HTML_SCREEN_H = Math.round(HTML_SCREEN_W * (SCREEN_D / SCREEN_W));

const HTML_KB_W = 720;
const HTML_KB_H = 264;

// ─── Materials ───────────────────────────────────────────
function useMaterials() {
  return useMemo(
    () => ({
      aluminum: new THREE.MeshStandardMaterial({
        color: "#dfe7f3",
        roughness: 0.22,
        metalness: 0.85,
      }),
      darkPlastic: new THREE.MeshStandardMaterial({
        color: "#0a1221",
        roughness: 0.55,
        metalness: 0.4,
      }),
      trackpad: new THREE.MeshStandardMaterial({
        color: "#0f172a",
        roughness: 0.3,
        metalness: 0.7,
      }),
      bezel: new THREE.MeshStandardMaterial({
        color: "#04070d",
        roughness: 0.9,
        metalness: 0.08,
      }),
    }),
    []
  );
}

// ─── Keyboard (pure HTML, positioned on a 3D plane) ─────
function Keyboard() {
  return (
    <mesh position={[0, BODY_H / 2 + 0.011, -0.22]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[KB_W, KB_D]} />
      <meshBasicMaterial color="#0b0f19" />
      <Html transform distanceFactor={2.0} position={[0, 0, 0.001]} zIndexRange={[5, 0]}>
        <div
          className="bg-[#0b0f19] p-2 flex flex-col justify-between select-none font-mono text-[9px] text-[#cbd5e1] rounded border border-slate-800/80"
          style={{ width: HTML_KB_W, height: HTML_KB_H }}
        >
          {/* Function Row */}
          <div className="flex gap-1 justify-between h-7">
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-semibold text-slate-300">esc</div>
            {["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"].map((f) => (
              <div key={f} className="bg-[#1e293b] flex-1 rounded flex items-center justify-center border border-slate-700/60 text-[8px] text-slate-400 font-medium">{f}</div>
            ))}
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-[8px] text-slate-300">⏻</div>
          </div>

          {/* Number Row */}
          <div className="flex gap-1 justify-between h-[34px]">
            {["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="].map((k) => (
              <div key={k} className="bg-[#1e293b] flex-1 rounded flex items-center justify-center border border-slate-700/60 font-semibold text-slate-200">{k}</div>
            ))}
            <div className="bg-[#1e293b] w-14 rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">delete</div>
          </div>

          {/* QWERTY Row */}
          <div className="flex gap-1 justify-between h-[34px]">
            <div className="bg-[#1e293b] w-14 rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">tab</div>
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"].map((k) => (
              <div key={k} className="bg-[#1e293b] flex-1 rounded flex items-center justify-center border border-slate-700/60 font-semibold text-slate-200">{k}</div>
            ))}
          </div>

          {/* Home Row */}
          <div className="flex gap-1 justify-between h-[34px]">
            <div className="bg-[#1e293b] w-[68px] rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">caps lock</div>
            {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"].map((k) => (
              <div key={k} className="bg-[#1e293b] flex-1 rounded flex items-center justify-center border border-slate-700/60 font-semibold text-slate-200">{k}</div>
            ))}
            <div className="bg-[#1e293b] w-[68px] rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">return</div>
          </div>

          {/* Bottom-letter Row */}
          <div className="flex gap-1 justify-between h-[34px]">
            <div className="bg-[#1e293b] w-[84px] rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">shift</div>
            {["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"].map((k) => (
              <div key={k} className="bg-[#1e293b] flex-1 rounded flex items-center justify-center border border-slate-700/60 font-semibold text-slate-200">{k}</div>
            ))}
            <div className="bg-[#1e293b] w-[84px] rounded flex items-center justify-center border border-slate-700/60 text-[8px] font-medium text-slate-300">shift</div>
          </div>

          {/* Spacebar Row */}
          <div className="flex gap-1 justify-between h-[34px] text-[8px]">
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-slate-300">fn</div>
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-slate-300">ctrl</div>
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-slate-300">opt</div>
            <div className="bg-[#1e293b] w-12 rounded flex items-center justify-center border border-slate-700/60 font-bold text-slate-200">⌘</div>
            <div className="bg-[#1e293b] flex-1 rounded border border-slate-700/60" />
            <div className="bg-[#1e293b] w-12 rounded flex items-center justify-center border border-slate-700/60 font-bold text-slate-200">⌘</div>
            <div className="bg-[#1e293b] w-10 rounded flex items-center justify-center border border-slate-700/60 text-slate-300">opt</div>
            <div className="bg-[#1e293b] w-[26px] rounded flex items-center justify-center border border-slate-700/60 text-[9px] text-slate-300">◀</div>
            <div className="w-[28px] flex flex-col gap-[2px] h-full">
              <div className="bg-[#1e293b] flex-1 rounded-t flex items-center justify-center border border-slate-700/60 text-[6px] text-slate-300 leading-none">▲</div>
              <div className="bg-[#1e293b] flex-1 rounded-b flex items-center justify-center border border-slate-700/60 text-[6px] text-slate-300 leading-none">▼</div>
            </div>
            <div className="bg-[#1e293b] w-[26px] rounded flex items-center justify-center border border-slate-700/60 text-[9px] text-slate-300">▶</div>
          </div>
        </div>
      </Html>
    </mesh>
  );
}

// ─── Screen Content (VS Code IDE) ───────────────────────
function ScreenContent() {
  return (
    <Html
      center
      transform
      wrapperClass="laptop-screen"
      distanceFactor={2.0}
      position={[0, 0, 0.001]}
      zIndexRange={[10, 0]}
    >
      <div
        className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col select-none overflow-hidden relative font-sans text-[11px] text-white"
        style={{ width: HTML_SCREEN_W, height: HTML_SCREEN_H }}
      >
        {/* Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-black rounded-b-md flex items-center justify-center z-30">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-blue-900" />
          </div>
        </div>

        {/* macOS Menu Bar */}
        <div className="h-6 bg-slate-900/90 backdrop-blur-md flex items-center justify-between px-3 text-xs border-b border-white/10 z-20 shrink-0">
          <div className="flex items-center gap-3 text-[11px] font-medium text-slate-200">
            <span className="text-white text-sm font-bold ml-1"></span>
            <span className="font-semibold text-white">Code</span>
            <span>File</span>
            <span>Edit</span>
            <span>Selection</span>
            <span>View</span>
            <span>Go</span>
            <span>Run</span>
            <span>Terminal</span>
            <span>Window</span>
            <span>Help</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-slate-300 font-mono">
            <span>🔋 100%</span>
            <span>📶</span>
            <span>Mon 9:41 AM</span>
          </div>
        </div>

        {/* VS Code Window */}
        <div className="m-1.5 flex-1 bg-[#1e1e1e]/95 backdrop-blur-xl border border-slate-700/60 rounded-lg flex flex-col shadow-2xl overflow-hidden font-mono text-[11px]">
          {/* Titlebar */}
          <div className="h-7 bg-[#323233] flex items-center justify-between px-3 text-[#cccccc] text-xs border-b border-[#252526] shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[12px] text-[#cccccc] font-semibold">App.tsx — Portfolio — Visual Studio Code</span>
            </div>
            <div className="text-[10px] text-[#888888] bg-[#252526] px-2 py-0.5 rounded border border-[#3c3c3c]">
              React Native 0.74
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex overflow-hidden min-h-0">
            {/* Activity Bar */}
            <div className="w-9 bg-[#333333] flex flex-col items-center py-2.5 gap-3 text-[#858585] shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Editor */}
            <div className="flex-1 bg-[#1e1e1e] flex flex-col min-w-0">
              {/* Tab Bar */}
              <div className="h-7 bg-[#252526] flex items-center px-2 gap-1 border-b border-[#1e1e1e] shrink-0">
                <div className="bg-[#1e1e1e] text-white px-3 py-1 text-[11px] flex items-center gap-1.5 border-t-2 border-[#007acc] rounded-t-sm font-medium">
                  <span className="text-[#61dafb]">⚛</span> App.tsx
                </div>
              </div>

              {/* Code Area */}
              <div className="p-3 font-mono text-[13px] leading-relaxed text-[#d4d4d4] flex gap-3 overflow-hidden flex-1 min-h-0">
                {/* Line Numbers */}
                <div className="text-[#6e7681] text-right select-none space-y-1 pr-2 border-r border-[#2b2b2b] shrink-0 text-[13px]">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Code */}
                <div className="space-y-0.5 text-left pl-1 min-w-0">
                  <div>
                    <span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">React</span>, &#123; <span className="text-[#9cdcfe]">useState</span> &#125; <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;react&apos;</span>;
                  </div>
                  <div>
                    <span className="text-[#c586c0]">import</span> &#123; <span className="text-[#9cdcfe]">View</span>, <span className="text-[#9cdcfe]">Text</span>, <span className="text-[#9cdcfe]">StyleSheet</span> &#125; <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&apos;react-native&apos;</span>;
                  </div>
                  <div className="text-[#6a9955]">
                    // 🚀 Senior React Native &amp; Full-Stack Developer
                  </div>
                  <div>
                    <span className="text-[#569cd6]">export const</span> <span className="text-[#4ec9b0]">DeveloperPortfolio</span> = () =&gt; &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#569cd6]">const</span> [<span className="text-[#9cdcfe]">name</span>] = <span className="text-[#dcdcaa]">useState</span>(<span className="text-[#ce9178]">&apos;Muhammad Hamza Saleem&apos;</span>);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#569cd6]">const</span> [<span className="text-[#9cdcfe]">experience</span>] = <span className="text-[#dcdcaa]">useState</span>(<span className="text-[#ce9178]">&apos;4+ Years Building Apps&apos;</span>);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#c586c0]">return</span> (
                  </div>
                  <div className="pl-8">
                    &lt;<span className="text-[#4ec9b0]">View</span> <span className="text-[#9cdcfe]">style</span>=&#123;<span className="text-[#9cdcfe]">styles</span>.<span className="text-[#9cdcfe]">container</span>&#125;&gt;
                  </div>
                  <div className="pl-12">
                    &lt;<span className="text-[#4ec9b0]">Text</span> <span className="text-[#9cdcfe]">style</span>=&#123;<span className="text-[#9cdcfe]">styles</span>.<span className="text-[#9cdcfe]">title</span>&#125;&gt;&#123;<span className="text-[#9cdcfe]">name</span>&#125;&lt;/<span className="text-[#4ec9b0]">Text</span>&gt;
                  </div>
                  <div className="pl-12">
                    &lt;<span className="text-[#4ec9b0]">Text</span> <span className="text-[#9cdcfe]">style</span>=&#123;<span className="text-[#9cdcfe]">styles</span>.<span className="text-[#9cdcfe]">subtitle</span>&#125;&gt;&#123;<span className="text-[#9cdcfe]">experience</span>&#125;&lt;/<span className="text-[#4ec9b0]">Text</span>&gt;
                  </div>
                  <div className="pl-8">
                    &lt;/<span className="text-[#4ec9b0]">View</span>&gt;
                  </div>
                  <div className="pl-4">);</div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Bar */}
          <div className="h-12 bg-[#181818] border-t border-[#2d2d2d] p-2 text-[10px] font-mono text-[#cccccc] shrink-0">
            <div className="flex items-center gap-3 text-[#858585] mb-0.5 font-medium">
              <span className="text-white border-b border-[#007acc] pb-0.5">TERMINAL</span>
              <span>PROBLEMS</span>
              <span>OUTPUT</span>
            </div>
            <div className="text-[#3fb950] font-semibold flex items-center gap-1.5">
              <span>✔</span> iOS Build Succeeded in 3.2s [iPhone 15 Pro]
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

// ─── Main Laptop Model ──────────────────────────────────
function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const mat = useMaterials();
  const { camera, gl } = useThree();
  const dragRef = useRef({ x: 0, y: 0, active: false });

  const scale = 0.78;

  React.useEffect(() => {
    const element = gl.domElement;

    const handlePointerDown = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      dragRef.current.active = true;
      dragRef.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      dragRef.current.y = (0.5 - (event.clientY - rect.top) / rect.height) * 2;
      element.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragRef.current.active) return;
      const rect = element.getBoundingClientRect();
      dragRef.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2.2;
      dragRef.current.y = (0.5 - (event.clientY - rect.top) / rect.height) * 1.6;
    };

    const handlePointerUp = () => {
      dragRef.current.active = false;
    };

    element.addEventListener("pointerdown", handlePointerDown);
    element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("pointerup", handlePointerUp);
    element.addEventListener("pointerleave", handlePointerUp);

    return () => {
      element.removeEventListener("pointerdown", handlePointerDown);
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerup", handlePointerUp);
      element.removeEventListener("pointerleave", handlePointerUp);
    };
  }, [gl]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!groupRef.current) return;

    const dragX = dragRef.current.x * 0.9;
    const dragY = dragRef.current.y * 0.75;
    const idleY = Math.sin(t * 0.7) * 0.18;
    const idleX = Math.sin(t * 1.1) * 0.04;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      dragRef.current.active ? dragX : idleY,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -0.08 + (dragRef.current.active ? dragY : idleX),
      0.08
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -0.28 + Math.sin(t * 1.3) * 0.06,
      0.08
    );

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2, 0.04);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.0, 0.04);
    camera.lookAt(0, 0.12, 0);
  });

  return (
    <group ref={groupRef} scale={scale} position={[0, -0.28, 0]} rotation={[0, 0, 0]}>
      {/* ─── Base Chassis ─── */}
      <RoundedBox
        args={[BODY_W, BODY_H, BODY_D]}
        radius={0.05}
        smoothness={4}
        position={[0, 0, 0]}
        material={mat.aluminum}
      />

      {/* Keyboard recess */}
      <RoundedBox
        args={[KB_W, 0.018, KB_D]}
        radius={0.02}
        smoothness={2}
        position={[0, BODY_H / 2 + 0.001, -0.22]}
        material={mat.darkPlastic}
      />

      <Keyboard />

      {/* Trackpad */}
      <RoundedBox
        args={[TP_W, 0.013, TP_D]}
        radius={0.02}
        smoothness={2}
        position={[0, BODY_H / 2 + 0.001, 0.78]}
        material={mat.trackpad}
      />

      {/* ─── Lid (hinged at back edge) ─── */}
      <group position={[0, BODY_H / 2, -BODY_D / 2]} rotation={[-Math.PI * 0.52, 0, 0]}>
        <group position={[0, 0, BODY_D / 2]}>
          {/* Outer aluminium shell */}
          <RoundedBox
            args={[BODY_W, LID_H, BODY_D]}
            radius={0.04}
            smoothness={4}
            material={mat.aluminum}
          />

          {/* Apple logo on the BACK of the lid */}
          <mesh position={[0, -(LID_H / 2 + 0.001), 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
            <Html center transform distanceFactor={2.0} position={[0, 0, -0.001]} zIndexRange={[1, 0]}>
              <div className="w-[100px] h-[100px] flex items-center justify-center text-white text-4xl font-bold select-none drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">

              </div>
            </Html>
          </mesh>

          {/* ─── Front face of lid ─── */}

          {/* Matte-black bezel (full front face) */}
          <RoundedBox
            args={[BEZEL_W + 0.04, 0.012, BEZEL_D + 0.04]}
            radius={0.03}
            smoothness={4}
            position={[0, LID_H / 2 + 0.005, 0]}
            material={mat.bezel}
          />

          {/* Apple logo on the CHIN (centered in the fat bottom bezel) */}
          <mesh
            position={[0, LID_H / 2 + 0.006, -(BEZEL_D / 2 - SCREEN_BOTTOM_INSET / 2)]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[0.32, 0.32]} />
            <meshBasicMaterial transparent opacity={0} />
            <Html center transform distanceFactor={2.0} position={[0, 0, 0.001]} zIndexRange={[2, 0]}>
              <div className="text-cyan-300/95 text-[26px] font-bold select-none flex items-center justify-center drop-shadow-[0_0_18px_rgba(34,211,238,0.8)]">
                
              </div>
            </Html>
          </mesh>

          {/* Active screen display */}
          <mesh
            position={[0, LID_H / 2 + 0.003, SCREEN_Z_OFFSET]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[SCREEN_W, SCREEN_D]} />
            <meshBasicMaterial color="#090d16" />
            <ScreenContent />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// ─── Exported Scene ─────────────────────────────────────
export default function HeroScene3D() {
  return (
    <div className="relative w-full h-full min-w-0 mx-auto overflow-visible">
      <Canvas
        camera={{ position: [0, 2, 7.0], fov: 34 }}
        dpr={[1, 1.5]}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 100 } }}
        performance={{ min: 0.5 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#38bdf8" />
        <directionalLight position={[-5, -2, -2]} intensity={0.4} color="#a855f7" />
        <Environment preset="city" background={false} />

        <LaptopModel />

        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.35}
          scale={7.5}
          blur={1.2}
          far={2.4}
          resolution={512}
        />
      </Canvas>
    </div>
  );
}
