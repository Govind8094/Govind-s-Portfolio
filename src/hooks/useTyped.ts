"use client";
import { useEffect, useState } from "react";

/** Cycles through words with a typewriter effect. */
export function useTyped(words: readonly string[], speed = 70, pause = 1600) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, i = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let next = del ? speed / 2 : speed;
      if (!del && i === word.length) { del = true; next = pause; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; next = 300; }
      t = setTimeout(tick, next);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words, speed, pause]);
  return text;
}
