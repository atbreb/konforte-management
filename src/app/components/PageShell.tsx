import { useImagePreload } from "../hooks/useImagePreload";
import { type ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  preloadImages?: string[];
}

export function PageShell({ children, preloadImages = [] }: PageShellProps) {
  const loaded = useImagePreload(preloadImages);

  return (
    <div
      className="transition-opacity duration-300"
      style={{ opacity: loaded ? 1 : 0.6 }}
    >
      {children}
    </div>
  );
}
