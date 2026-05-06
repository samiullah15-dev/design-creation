// This is the entry point of the React application. It imports the necessary modules and renders the App component into the DOM.
  import { createRoot } from "react-dom/client";
  import App from "./app/App.jsx";
  import "./styles/index.css";

  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
  