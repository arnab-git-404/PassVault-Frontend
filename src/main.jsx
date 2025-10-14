import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { MasterPasswordProvider } from "./context/MasterPasswordContext.jsx";
import { LoadingBarContainer } from "react-top-loading-bar";


// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
// StrictMode currently helps with:
createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <MasterPasswordProvider>
      <LoadingBarContainer>
        <App />
      </LoadingBarContainer>
    </MasterPasswordProvider>
  </GlobalProvider>
);
