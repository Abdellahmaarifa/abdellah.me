import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import "./styles/main.css";
import ProjectContextProvider from "./context/Project";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);
