import React from "react";
import "./styles/index.scss";
import Entrance from "./components/Entrance";
import LeftSideBar from "./components/LeftSideBar";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import OtcSingle from "./pages/OtcSingle";
import RightSideBar from "./components/RightSideBar";
import Arbitrage from "./pages/Arbitrage";
import OtcLinking from "./pages/OtcLinking";

function App() {
  return (
    <div className="App ">
      <Header />
      <Switch>
        <Route path="/login">
          <Entrance />
        </Route>

        <Route path="/pages">
          <div className="container-organism">
            <LeftSideBar />
            <Route path="/pages/OTC-Single">
              <OtcSingle />
            </Route>
            <Route path="/pages/Arbitrage">
              <Arbitrage />
            </Route>
            <Route path="/pages/OTC-Linking">
              <OtcLinking />
            </Route>
            <RightSideBar />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
