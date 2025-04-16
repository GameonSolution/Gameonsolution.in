import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "lenis/dist/lenis.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

<noscript>
  <style>{`
    .no-js-fallback {
      display: block !important;
    }
  `}</style>
  <div className="no-js-fallback">
    <h1>South India's No.1 Sports Infrastructure Developer</h1>
    <p>GameOn Solution</p>
  </div>
</noscript>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
