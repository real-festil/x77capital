import React from "react";
import "./styles/index.scss";
import Entrance from "./components/Entrance";
import LeftSideBar from "./components/LeftSideBar";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Container children={<>text</>} />
        </Route>
        <Route path="/login">
          <Entrance />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
