import { Box, Container } from "@material-ui/core";

export default function ProfitLog() {
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
          <tbody>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
                return (
                  <tr key={item}>
                    <td>AUG</td>
                    <td>2231364.93</td>
                    <td>2312364.93</td>
                    <td>34.93</td>
                    <td>Имя банка (345)</td>
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