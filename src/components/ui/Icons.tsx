import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

const paths: Record<string, React.ReactNode> = {
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2a2.5 2.5 0 0 1 5 0v3" /></>,
  github: <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C6.700 2.700 5.700 3 5.700 3a4.300 4.300 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.300 9.400c0 4.600 2.800 5.700 5.500 6A3 3 0 0 0 9 17.700V21" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.500 6.500v.01" /></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  pin: <><path d="M12 21s7-6.200 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11Z" /><circle cx="12" cy="10" r="2.500" /></>,
};

export function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}>{paths[name] ?? null}</svg>;
}
