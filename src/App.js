import React, { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

// Styles
import GlobalStyles from "./components/GlobalStyles";
import { AnimatePresence } from "framer-motion";

// Router
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [formList, setFormList] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getLocalReservations();
  }, []);

  useEffect(() => {
    saveLocalReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formList]);

  const saveLocalReservations = () => {
    localStorage.setItem("reservations", JSON.stringify(formList));
  };

  const getLocalReservations = () => {
    if (localStorage.getItem("reservations") === null) {
      localStorage.setItem("reservations", JSON.stringify([]));
    } else {
      let localReservations = JSON.parse(localStorage.getItem("reservations"));
      setFormList(localReservations);
    }
  };

  return (
    <div className='App'>
      <GlobalStyles />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home formList={formList} setFormList={setFormList} />
          </Route>
          <Route path='/reservations'>
            <Reservations
              formList={formList}
              setFormList={setFormList}
              alert={alert}
              setAlert={setAlert}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
