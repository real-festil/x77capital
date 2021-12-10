import { Box, Container } from "@material-ui/core";
import { Key, useEffect, useState } from "react";
import { getStatistics } from "../common/Inquiries/Statistics";

export default function ProfitLog() {
  const [data, setData] = useState(null as any);

  useEffect(() => {
    handleData();
  }, [])

  const handleData = async () => {
    const res = await getStatistics();
    console.log('data', res.data)
    setData(res.data);
  }

  console.log(`data`, data)
  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>Statistics</h2>
      </Box>
      <Box className='profitLog__table'>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Volume UAH</th>
              <th>Volume USDT</th>
              <th>Median %</th>
              <th>HF Bank</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {
                data.map(((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.uah || '-'}</td>
                      <td>{item.usdt || '-'}</td>
                      <td>{item.median || '-'}</td>
                      <td>{item.bank || '-'}</td>
                    </tr>
                  )
                }))
              }
            </tbody>
          )}
        </table>
      </Box>
    </Container>
  )
}