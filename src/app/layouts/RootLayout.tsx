import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0.4, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
