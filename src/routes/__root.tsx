import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, Suspense, type ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Navbar from "@/components/portfolio/Navbar";
import BackgroundFX from "@/components/portfolio/BackgroundFX";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const title = "Portfolio | Vedant Modi";
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: title },
        { name: "description", content: "Portfolio of Vedant Modi — Full-Stack Web Developer, AI Enthusiast, and B.Sc. IT Student. Building modern web experiences with React, Node.js, and AI." },
        { name: "author", content: "Vedant Modi" },
        { property: "og:title", content: title },
        { property: "og:description", content: "Portfolio of Vedant Modi — Full-Stack Web Developer, AI Enthusiast, and B.Sc. IT Student. Building modern web experiences with React, Node.js, and AI." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: "Portfolio of Vedant Modi — Full-Stack Web Developer, AI Enthusiast, and B.Sc. IT Student. Building modern web experiences with React, Node.js, and AI." },
        { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45bd92d9-83d2-4e8e-bc6a-36ed938351c6/id-preview-34c46331--7482f738-abe1-4369-aae6-9ef426e22210.lovable.app-1783603370722.png" },
        { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45bd92d9-83d2-4e8e-bc6a-36ed938351c6/id-preview-34c46331--7482f738-abe1-4369-aae6-9ef426e22210.lovable.app-1783603370722.png" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  console.log("[RootComponent] render, pathname =", pathname);

  useEffect(() => {
    console.log("[RootComponent] MOUNTED");
    return () => console.log("[RootComponent] UNMOUNTED");
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [mouse, setMouse] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${header.offsetHeight}px`
        );
      }
    };

    updateNavbarHeight();

    const header = document.querySelector("header");
    let resizeObserver: ResizeObserver | null = null;
    if (header) {
      resizeObserver = new ResizeObserver(() => {
        updateNavbarHeight();
      });
      resizeObserver.observe(header);
    }

    window.addEventListener("resize", updateNavbarHeight);
    window.addEventListener("scroll", updateNavbarHeight);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("scroll", updateNavbarHeight);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen overflow-x-hidden">
        <BackgroundFX />
        
        {/* Mouse glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed z-0 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl transition-transform duration-200"
          style={{
            left: mouse.x - 190,
            top: mouse.y - 190,
            background:
              "radial-gradient(circle, oklch(0.65 0.21 258 / 0.6), transparent 70%)",
          }}
        />

        {/* Scroll progress */}
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
        />

        <Navbar />

        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </QueryClientProvider>
  );
}
