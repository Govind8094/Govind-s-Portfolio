import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
/** Register GSAP plugins exactly once (client only). */
export function setupGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}
export { gsap, ScrollTrigger };
