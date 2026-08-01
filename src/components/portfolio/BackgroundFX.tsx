import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundFX() {
  console.log("[BackgroundFX] render");

  useEffect(() => {
    console.log("[BackgroundFX] MOUNTED");
    return () => console.log("[BackgroundFX] UNMOUNTED");
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.98 0.005 250) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0.005 250) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Floating blobs */}
      <motion.div
        className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.21 258), transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.15 210), transparent 70%)" }}
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 280), transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}