import { useState, useEffect } from "react";

const TIMEOUT_MS = 3000;

export function useImagePreload(srcs: string[]): boolean {
  const [loaded, setLoaded] = useState(srcs.length === 0);

  useEffect(() => {
    if (srcs.length === 0) {
      setLoaded(true);
      return;
    }

    let cancelled = false;

    const promises = srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    );

    const timeout = new Promise<void>((resolve) =>
      setTimeout(resolve, TIMEOUT_MS)
    );

    Promise.race([Promise.all(promises), timeout]).then(() => {
      if (!cancelled) setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [srcs.join(",")]);

  return loaded;
}
