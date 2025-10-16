import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { MasterPasswordProvider } from "./context/MasterPasswordContext.jsx";
import { LoadingBarContainer } from "react-top-loading-bar";
import { inject } from '@vercel/analytics'

inject()

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <MasterPasswordProvider>
      <LoadingBarContainer>
        <App />
      </LoadingBarContainer>
    </MasterPasswordProvider>
  </GlobalProvider>
);
