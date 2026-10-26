import { Button } from "@/components/ui/Button";
export default function NotFound() {
  return (
    <div className="container-x grid min-h-dvh place-content-center gap-6 text-center">
      <p className="font-mono text-accent-cyan">404</p>
      <h1 className="font-display text-5xl font-bold text-white">Page not found</h1>
      <div><Button href="/">Back home</Button></div>
    </div>
  );
}
