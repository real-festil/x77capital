import { Box, Container, MenuItem, Select } from "@material-ui/core";

export default function ProfitLog() {
  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>Profit log</h2> 
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
      <Box className='profitLog__table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>OTC Single</th>
              <th>OTC Linking</th>
              <th>Private</th>
              <th>Arbitrage</th>
            </tr>
          </thead>
          <tbody>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
              return (
                <tr key={item}>
                  <td>01 Sep</td>
                  <td>232364.93</td>
                  <td>22323693</td>
                  <td>5123.23 UAH, 123 USDT</td>
                  <td>52364.93</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Box>
    </Container>
  )
}