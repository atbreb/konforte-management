import { useImagePreload } from "../hooks/useImagePreload";
import { type ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  preloadImages?: string[];
}

export function PageShell({ children, preloadImages = [] }: PageShellProps) {
  const loaded = useImagePreload(preloadImages);

  if (!loaded) {
    return <div className="min-h-screen" />;
  }

  return <>{children}</>;
}
