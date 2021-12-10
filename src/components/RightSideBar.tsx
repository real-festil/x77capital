import { ButtonBase } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getBalances } from "../common/Inquiries/Balances";

const RightSideBar = () => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [balancesData, setBalancesData] = useState(null as any);

  const handleTab = (item: number): void => {setActiveTab(item)};
  const renderActiveClass = (i: number) => {
    if (activeTab === i) {
      return 'activeTab';
    }
  }

  useEffect(() => {
    handleProfit();
  }, [])

  useEffect(() => {
    if (active) {
      setBalancesData(balancesData.filter((b: any) => b.actual_balance))
    } else {
      handleProfit();
    }
  }, [active])

  const handleProfit = async () => {
    const res = await getBalances();
    console.log(res);
    setBalancesData(res.data);
  }

  console.log(`balancesData`, balancesData)

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
            {balancesData && balancesData.filter((item: { bec: { type: string; }; }) => item.bec.type === '1').map((item: { bec: { name: any; currency: any; }; id: any, actual_balance: any; }) => (
              <li key={item.id}>{`${item.bec.name}: ${item.actual_balance || 0} ${item.bec.currency}`}</li>
            ))}
          </WrapUlTab>
          <WrapUlTab active={activeTab} i={1}>
            {balancesData && balancesData.filter((item: { bec: { type: string; }; }) => item.bec.type === '2').map((item: { bec: { name: any; currency: any; }; id: any, actual_balance: any; }) => (
              <li key={item.id}>{`${item.bec.name}: ${item.actual_balance || 0} ${item.bec.currency}`}</li>
            ))}
          </WrapUlTab>
          <WrapUlTab active={activeTab} i={2}>
            {balancesData && balancesData.filter((item: { bec: { type: string; }; }) => item.bec.type === '3').map((item: { bec: { name: any; currency: any; }; id: any, actual_balance: any; }) => (
              <li key={item.id}>{`${item.bec.name}: ${item.actual_balance || 0} ${item.bec.currency}`}</li>
            ))}
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
