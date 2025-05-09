  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import "lenis/dist/lenis.css";
  import { HelmetProvider } from "react-helmet-async";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { Analytics } from "@vercel/analytics/react";
  import { SpeedInsights } from "@vercel/speed-insights/react";

  const queryClient = new QueryClient();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Analytics />
          <SpeedInsights />
          <App />
        </HelmetProvider>
      </QueryClientProvider>
    </StrictMode>
  );
