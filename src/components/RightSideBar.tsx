import { ButtonBase } from "@material-ui/core";
import { useState } from "react";

const RightSideBar = () => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTab = (item: number): void => {setActiveTab(item)};
  const renderActiveClass = (i: number) => {
    if (activeTab === i) {
      return 'activeTab';
    }
  }

  return (
    <div className="right-side-bar">
      <div className="right-side-bar__menu">
        <span className="title">Balance</span>
        <div className="right-side-bar__trading">
          <div className='right-side-bar__trading-wrap'>
            <span className={`right-side-bar__text-content ${renderActiveClass(0)}`}
            onClick={() => handleTab(0)}>Banks</span>
            <span className={`right-side-bar__text-content ${renderActiveClass(1)}`}
            onClick={() => handleTab(1)}>Exchanges</span>
            <span className={`right-side-bar__text-content ${renderActiveClass(2)}`}
            onClick={() => handleTab(2)}>Cashes</span>
          </div>
        </div>
          <WrapUlTab active={activeTab} i={0}>
            <li>Bank-1: 2567 UAH</li>
            <li>Bank-2: 2567 UAH</li>
            <li>Bank-3: 2567 UAH</li>
            <li>Bank-4: 2567 UAH</li>
            <li>Bank-5: 2567 UAH</li>
            <li>Bank-6: 2567 UAH</li>
            <li>Bank-1: 2567 UAH</li>
            <li>Bank-2: 2567 UAH</li>
            <li>Bank-3: 2567 UAH</li>
            <li>Bank-4: 2567 UAH</li>
            <li>Bank-5: 2567 UAH</li>
          </WrapUlTab>
          <WrapUlTab active={activeTab} i={1}>
            <li>Exchange-1: 2567 UAH</li>
            <li>Exchange-2: 2567 UAH</li>
            <li>Exchange-3: 2567 UAH</li>
            <li>Exchange-4: 2567 UAH</li>
            <li>Exchange-5: 2567 UAH</li>
            <li>Exchange-6: 2567 UAH</li>
            <li>Exchange-1: 2567 UAH</li>
            <li>Exchange-2: 2567 UAH</li>
            <li>Exchange-3: 2567 UAH</li>
            <li>Exchange-4: 2567 UAH</li>
            <li>Exchange-5: 2567 UAH</li>
          </WrapUlTab>
          <WrapUlTab active={activeTab} i={2}>
            <li>Cashe-1: 2567 UAH</li>
            <li>Cashe-2: 2567 UAH</li>
            <li>Cashe-3: 2567 UAH</li>
            <li>Cashe-4: 2567 UAH</li>
            <li>Cashe-5: 2567 UAH</li>
            <li>Cashe-6: 2567 UAH</li>
            <li>Cashe-1: 2567 UAH</li>
            <li>Cashe-2: 2567 UAH</li>
            <li>Cashe-3: 2567 UAH</li>
            <li>Cashe-4: 2567 UAH</li>
            <li>Cashe-5: 2567 UAH</li>
          </WrapUlTab>
      </div>
      <div className="following-container">
        <div className="following-container__folow">
          <span
            className={`following-container__folow__off ${!active && "active"}`}
            onClick={() => setActive(false)}
          >
            off
          </span>
          <span
            className={`following-container__folow__on ${active && "active"}`}
            onClick={() => setActive(true)}
          >
            on
          </span>
        </div>
        <span className="following-container__text">Hide zero balances </span>
      </div>
      <ButtonBase type="submit" className="button-close">
        <span className="button-close__text">Close a trading session</span>
      </ButtonBase>
    </div>
  );
};

export interface IWrapUlTab {
  children: JSX.Element | JSX.Element[];
  active: number;
  i: number;
}

const WrapUlTab = ({children, active, i}: IWrapUlTab) => {
  return (
    <ul className='right-side-bar__text-list' style={{
      display: active === i ? 'block' : 'none'
    }}>
      {children}
    </ul>
  )
}

export default RightSideBar;
