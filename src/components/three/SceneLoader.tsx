"use client";
import dynamic from "next/dynamic";

/** Code-split Three.js so it never blocks first paint or SSR. */
const Scene = dynamic(() => import("./Scene"), { ssr: false });
export function SceneLoader() { return <Scene />; }
