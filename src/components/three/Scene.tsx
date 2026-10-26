"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Fixed full-screen background: a drifting "data" particle field plus a
 * wireframe icosahedron, with pointer parallax and scroll-linked rotation.
 * Perf: DPR capped, paused when tab hidden / off-screen, fully disposed on unmount,
 * particle count scales down on small screens.
 */
export default function Scene() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 14;

    // Particles
    const count = small ? 700 : 1800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [new THREE.Color("#7c5cff"), new THREE.Color("#22d3ee"), new THREE.Color("#f472b6")];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = palette[i % 3];
      col.set([c.r, c.g, c.b], i * 3);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pMat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.8, depthWrite: false });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Wireframe core
    const coreGeo = new THREE.IcosahedronGeometry(3.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: "#7c5cff", wireframe: true, transparent: true, opacity: 0.22 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(window.innerWidth < 1024 ? 0 : 5, 0, -2);
    scene.add(core);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      core.position.x = window.innerWidth < 1024 ? 0 : 5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    let raf = 0;
    let running = true;
    const clock = new THREE.Clock();
    const frame = () => {
      raf = requestAnimationFrame(frame);
      const t = clock.getElapsedTime();
      const scroll = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      points.rotation.y = t * 0.02 + scroll * 1.2;
      points.rotation.x = scroll * 0.6;
      core.rotation.x = t * 0.12 + scroll * 2;
      core.rotation.y = t * 0.18;
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (-mouse.y * 0.9 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    const start = () => { if (!running && !reduced) { running = true; clock.start(); frame(); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    if (reduced) { renderer.render(scene, camera); running = false; } else frame();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      pGeo.dispose(); pMat.dispose(); coreGeo.dispose(); coreMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mount} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
