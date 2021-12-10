import { Box, Container, MenuItem, Select, Button, } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getAccounts } from "../common/Inquiries/Accounts";
import { postAdmin } from "../common/Inquiries/SecureP";
import Arrow from '../images/arrow.svg';

export default function SecureP() {
  const [active, setActive] = useState<number>(0);
  const [accounts, setAccounts] = useState(null as any);
  const [changeBavValues, setChangeBavValues] = useState({
    amount: null as any,
    comments: null as any,
    account0: null as any,
  });
  const [changeBecValues, setChangeBecValues] = useState({
    amount: null as any,
    comments: null as any,
    account0: null as any,
  });
  const [changeBecTransferValues, setChangeBecTransferValues] = useState({
    amount: null as any,
    comments: null as any,
    account0: null as any,
    account1: null as any,
  });

  useEffect(() => {
    handleAccounts();
  }, []);

  const handleAccounts = async () => {
    const res = await getAccounts();
    setAccounts(res.data);
  }

  const onBavSubmit = async () => {
    const res = await postAdmin('1', +changeBavValues.amount, +changeBavValues.account0, changeBavValues.comments);

    console.log(`res`, res)
  }

  const onBecSubmit = async () => {
    const res = await postAdmin('2', +changeBecValues.amount, +changeBecValues.account0, changeBecValues.comments);

    console.log(`res`, res)
  }

  const onBecTransferSubmit = async () => {
    const res = await postAdmin('3', +changeBecTransferValues.amount, +changeBecTransferValues.account0, changeBecTransferValues.comments, +changeBecTransferValues.account1);

    console.log(`res`, res)
  }

  const handleActive = (item: number): void => {setActive(item)};

  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>SecureP</h2>
      </Box>
      <Box className='securep__btns'>
        <button
          className={active === 0 ? 'securep-active-btn' : ''}
          onClick={() => handleActive(0)}
        >Change BAV</button>
        <button
          className={active === 1 ? 'securep-active-btn' : ''}
          onClick={() => handleActive(1)}
        >Change BEC Value</button>
        <button
          className={active === 2 ? 'securep-active-btn' : ''}
          onClick={() => handleActive(2)}
        >BEC Transfers</button>
      </Box>
      <Box className='securep__form-first'
      style={{display: active === 0 ? 'block' : 'none'}}>
        <h3>Change Bank Accounting Volume</h3>
        <form>
          <div>
            <input type='text' placeholder='Value of volume*' value={changeBavValues.amount} onChange={(e: any) => setChangeBavValues({...changeBavValues, amount: e.target.value})} />
            {accounts && (
              <Select className='profitLog-select securep-select' onChange={(e) => setChangeBavValues({...changeBavValues, account0: e.target.value})} defaultValue={accounts[0].bec.name}>
                {accounts && accounts.filter((acc: any) => acc.bec.type === 'bank').map((acc:any) => (
                  <MenuItem value={acc.bec.id}>{acc.bec.name}</MenuItem>
                  ))}
              </Select>
            )}
          </div>
          <textarea className='securep-textarea' placeholder='Message' value={changeBavValues.comments} onChange={(e: any) => setChangeBavValues({...changeBavValues, comments: e.target.value})} />
          <div>
            <input type='text' placeholder='Value of volume*' />
            <Button variant='contained' onClick={onBavSubmit}>Change</Button>
          </div>
        </form>
      </Box>
      <Box className='securep__form-first'
      style={{display: active === 1 ? 'block' : 'none'}}>
        <h3>Change Bank/Exchange/Cash Value</h3>
        <form>
          <div>
            <input type='text' placeholder='The amount*' value={changeBecValues.amount} onChange={(e: any) => setChangeBecValues({...changeBecValues, amount: e.target.value})} />
            {accounts && (
              <Select className='profitLog-select securep-select' onChange={(e) => setChangeBecValues({...changeBecValues, account0: e.target.value})} defaultValue={accounts[0].bec.name}>
                {accounts && accounts.map((acc:any) => (
                  <MenuItem value={acc.bec.id}>{acc.bec.name}</MenuItem>
                  ))}
              </Select>
            )}
          </div>
          <textarea className='securep-textarea' placeholder='Message' value={changeBecValues.comments} onChange={(e: any) => setChangeBecValues({...changeBecValues, comments: e.target.value})} />
          <div>
            <input type='text' placeholder='Google 2FA code*' />
            <Button variant='contained' onClick={onBecSubmit}>Change</Button>
          </div>
        </form>
      </Box>
      <Box className='securep__form-first securep__form-second'
      style={{display: active === 2 ? 'block' : 'none'}}>
        <h3>Bank/Exchange/Cash Transfer</h3>
        <form>
          <input type='text' placeholder='The amount*' value={changeBecTransferValues.amount} onChange={(e: any) => setChangeBecTransferValues({...changeBecTransferValues, amount: e.target.value})} />
          <div>
            {accounts && (
              <Select className='profitLog-select securep-select' onChange={(e) => setChangeBecTransferValues({...changeBecTransferValues, account0: e.target.value})} defaultValue={accounts[0].bec.name}>
                {accounts && accounts.map((acc:any) => (
                  <MenuItem value={acc.bec.id}>{acc.bec.name}</MenuItem>
                  ))}
              </Select>
            )}
            <div>
              <div className='securep__form-second-center'>
                <div>
                  <img src={Arrow} alt='first_arrow' />
                  <img src={Arrow} alt='second_arrow' />
                </div>
              </div>
            </div>
            {accounts && (
              <Select className='profitLog-select securep-select' onChange={(e) => setChangeBecTransferValues({...changeBecTransferValues, account1: e.target.value})} defaultValue={accounts[0].bec.name}>
                {accounts && accounts.map((acc:any) => (
                  <MenuItem value={acc.bec.id}>{acc.bec.name}</MenuItem>
                ))}
              </Select>
            )}
          </div>
          <textarea className='securep-textarea' placeholder='Message' value={changeBecTransferValues.comments} onChange={(e: any) => setChangeBecTransferValues({...changeBecTransferValues, comments: e.target.value})}/>
          <div>
            <input type='text' placeholder='Google 2FA code*' />
            <Button variant='contained' onClick={onBecTransferSubmit}>Make a transfer</Button>
          </div>
        </form>
      </Box>
    </Container>
  )
}


const data = [
  {
    id: 0,
    month: 'aug',
    volumeUAH: 123123.32,
    volumeUSDT: 24214.342,
    median: 32,
    bank: 'bank name'
  },
  {
    id: 1,
    month: 'aug',
    volumeUAH: 123123.32,
    volumeUSDT: 24214.342,
    median: 32,
    bank: 'bank name'
  },
  {
    id: 2,
    month: 'aug',
    volumeUAH: 123123.32,
    volumeUSDT: 24214.342,
    median: 32,
    bank: 'bank name'
  }
]