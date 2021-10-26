import { Box, Container, MenuItem, Select, Button, } from "@material-ui/core";
import { useState } from "react";
import Arrow from '../images/arrow.svg';

export default function SecureP() {
  const [active, setActive] = useState<number>(0);

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
            <input type='text' placeholder='Value of volume*' />
            <Select className='profitLog-select securep-select' defaultValue='Bank 1'>
              <MenuItem value='Bank 1'>Bank 1</MenuItem>
              <MenuItem value='Bank 2'>Bank 2</MenuItem>
            </Select>
          </div>
          <textarea className='securep-textarea' placeholder='Message' />
          <div>
            <input type='text' placeholder='Value of volume*' />
            <Button variant='contained'>Change</Button>
          </div>
        </form>
      </Box>
      <Box className='securep__form-first'
      style={{display: active === 1 ? 'block' : 'none'}}>
        <h3>Change Bank/Exchange/Cash Value</h3>
        <form>
          <div>
            <input type='text' placeholder='The amount*' />
            <Select className='profitLog-select securep-select' defaultValue='Bank/Cash/Exchange'>
              <MenuItem value='Bank/Cash/Exchange'>Bank/Cash/Exchange</MenuItem>
              <MenuItem value='Bank/Cash/Exchange'>Bank/Cash/Exchange</MenuItem>
            </Select>
          </div>
          <textarea className='securep-textarea' placeholder='Message' />
          <div>
            <input type='text' placeholder='Google 2FA code*' />
            <Button variant='contained'>Change</Button>
          </div>
        </form>
      </Box>
      <Box className='securep__form-first securep__form-second'
      style={{display: active === 2 ? 'block' : 'none'}}>
        <h3>Bank/Exchange/Cash Transfer</h3>
        <form>
          <input type='text' placeholder='The amount*' />
          <div>
            <Select className='profitLog-select securep-select' defaultValue='Bank/Cash/Exchange'>
              <MenuItem value='Bank/Cash/Exchange'>Option 1</MenuItem>
              <MenuItem value='Option 2'>Option 2</MenuItem>
            </Select>
            <div>
              <div className='securep__form-second-center'>
                <div>
                  <img src={Arrow} alt='first_arrow' />
                  <img src={Arrow} alt='second_arrow' />
                </div>
              </div>
            </div>
            <Select className='profitLog-select securep-select' defaultValue='Bank/Cash/Exchange'>
              <MenuItem value='Bank/Cash/Exchange'>Option 1</MenuItem>
              <MenuItem value='Option 2'>Option 2</MenuItem>
            </Select>
          </div>
          <textarea className='securep-textarea' placeholder='Message' />
          <div>
            <input type='text' placeholder='Google 2FA code*' />
            <Button variant='contained'>Make a transfer</Button>
          </div>
        </form>
      </Box>
    </Container>
  )
}