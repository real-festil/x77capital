import "./styles/index.scss";
import Entrance from "./components/Entrance";
import LeftSideBar from "./components/LeftSideBar";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import OtcSingle from "./pages/OtcSingle";
import RightSideBar from "./components/RightSideBar";
import Arbitrage from "./pages/Arbitrage";
import OtcLinking from "./pages/OtcLinking";
import ProfitLog from "./pages/ProfitLog";
import BankAccounting from "./pages/BankAccounting";
import Statistics from "./pages/Statistics";
import SecureP from "./pages/SecureP";

function App() {
  return (
    <div className="App ">
      <Header />
      <Switch>
        <Route path="/login">
          <Entrance typePage="login" />
        </Route>
        <Route path="/reg">
          <Entrance typePage="registration" />
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
            <Route path="/pages/profit-log" exact>
              <ProfitLog />
            </Route>
            <Route path="/pages/bank-accounting" exact>
              <BankAccounting />
            </Route>
            <Route path="/pages/statistics" exact>
              <Statistics />
            </Route>
            <Route path="/pages/securep" exact>
              <SecureP />
            </Route>
            <RightSideBar />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
