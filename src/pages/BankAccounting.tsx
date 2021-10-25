import { Box, Container, MenuItem, Select } from "@material-ui/core";

export default function ProfitLog() {
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
        <table>
          <thead>
            <tr>
              <th>Total</th>
              <th>113298.56</th>
              <th>113298.56</th>
              <th>113298.56</th>
              <th>113298.56</th>
              <th>113298.56</th>
              <th>113298.56</th>
            </tr>
            <tr>
              <th>Date/Banks</th>
              <th>Mono</th>
              <th>Pumb</th>
              <th>Raiffeisen</th>
              <th>Todo</th>
              <th>aBank</th>
              <th>Privat</th>
            </tr>
          </thead>
          <tbody>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
                return (
                  <tr key={item}>
                    <td>01-09</td>
                    <td>113298.56</td>
                    <td>113298.56</td>
                    <td>113298.56</td>
                    <td>113298.56</td>
                    <td>113298.56</td>
                    <td>113298.56</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
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