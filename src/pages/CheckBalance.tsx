import { Box, Button, Container } from "@material-ui/core";

export default function CheckBalance() {
  return (
    <Container className='profitLog checkBalance'>
      <Box className='profitLog__head'>
        <h2>Check all the balances</h2>
        <span className='checkBalance__close'>&#10005;</span>
      </Box>
      <Box className='checkBalance__wrap'>
        <Box className='checkBalance__wrap-inner'>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <p key={item}>Bank-{item}: 2567 UAH</p>
              )
            })
          }
        </Box>
        <Box className='checkBalance__wrap-inner'>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <p key={item}>Bank-{item}: 2567 UAH</p>
              )
            })
          }
        </Box>
        <Box className='checkBalance__wrap-inner'>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <p key={item}>Bank-{item}: 2567 UAH</p>
              )
            })
          }
        </Box>
      </Box>
      <Box className='checkBalance__btns'>
        <Button variant='contained'>Cancel</Button>
        <Button variant='contained'>Close trading session</Button>
      </Box>
    </Container>
  )
}