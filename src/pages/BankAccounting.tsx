import { Box, Container, MenuItem, Select } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getBankAcc } from "../common/Inquiries/BankAccounting";

export default function ProfitLog() {
  const [bankAccData, setBankAccData] = useState(null as any);

  useEffect(() => {
    handleProfit();
  }, [])

  const handleProfit = async () => {
    const res = await getBankAcc();
    console.log('data', res.data)
    setBankAccData(res.data);
  }

  console.log(`bankAccData`, bankAccData)

  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>Bank Accounting</h2>
        <Box>
          <Select className='profitLog-select' defaultValue='September'>
            <MenuItem value='September'>September</MenuItem>
            <MenuItem value='October'>October</MenuItem>
          </Select>
          <Select className='profitLog-select' defaultValue='2021'>
            <MenuItem value='2021'>2021</MenuItem>
            <MenuItem value='2022'>2022</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box className='profitLog__table bankAccounting__table'>
        {bankAccData && (
        <table>
          <thead>
            <tr>
              <th>Total</th>
              {bankAccData.total.length > 0 && Object.values(bankAccData.total[0]).filter(item => typeof(item) === 'number').map((item: any) => <th>{item}</th>)}
            </tr>
            <tr>
              <th>Date/Banks</th>
              {bankAccData.accounts.map((item: any) => <th>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {
              bankAccData.transactions.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    {Object.values(item).filter(item => typeof(item) === 'number').map((item: any) => <td>{item}</td>)}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        )}
      </Box>
      <Box className='bankAccounting__dots'>
        {
          [0, 1, 2].map(item => {
            return (
              <div key={item} />
            )
          })
        }
      </Box>
    </Container>
  )
}