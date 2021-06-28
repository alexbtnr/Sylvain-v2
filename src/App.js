import React from "react";

// Pages
import Home from "./pages/Home";

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyles />
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
