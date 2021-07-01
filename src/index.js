import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router } from "react-router-dom";
import LanguageContextProvider from "./contexts/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <SimpleReactLightbox>
        <Router>
          <App />
        </Router>
      </SimpleReactLightbox>
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
