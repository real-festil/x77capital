import { 
  Box, 
  Container, 
  Button, 
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import Edit from '../images/edit.png';
import Open from '../images/open.png';
import { useState } from "react";

export default function History() {
  return (
    <>
      <Container className='profitLog'>
        <Box className='profitLog__head'>
          <h2>History</h2> 
          <Box>
            <Button variant='contained' className='history-btn'>Show all</Button>
            <Button variant='contained' className='history-btn'>Hide SP operations</Button> 
          </Box>
        </Box>
        <Box className='history__table'>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='center' className='table__head-item'>Date</TableCell>
                  <TableCell align="center" className='table__head-item'>Operation</TableCell>
                  <TableCell align="center" className='table__head-item'>Comments</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableElement />
                <TableElement />
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <div className='modal' style={{display: 'none'}}>
        <div className="modal__wrap">
          <div className='modal__wrap-close'>&#10005;</div>
          <h3>Do you really want delete this history operation?</h3>
          <div className="modal__wrap-btns">
            <Button variant='contained' className='history-btn'>Cancel</Button>
            <Button variant='contained' className='history-btn'>Yes</Button> 
          </div>
        </div>
      </div>
      <div className='modal' style={{display: 'none'}}>
        <div className="modal__wrap">
          <div className='modal__wrap-close'>&#10005;</div>
          <h3>It looks like you don't make any trades. Do you really want to close this session?</h3>
          <div className="modal__wrap-btns modal__wrap-btns2">
            <Button variant='contained' className='history-btn'>Cancel</Button>
            <Button variant='contained' className='history-btn'>Yes</Button> 
          </div>
        </div>
      </div>
    </>
  )
}

const TableElement = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center">08.07.2021 06:13</TableCell>
        <TableCell align="center">OTC Single</TableCell>
        <TableCell align="center">Аcomments Lorem ipsum dolor s... </TableCell>
        <TableCell align="center">
          <Box className='history__table-options'>
            <p>&#10005;</p>
            <img src={Edit} alt='edit' />
            <img src={Open} alt='open' className={open ? 'icon-open table-open-active' : 'icon-open'}
            onClick={() => setOpen(!open)} />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{display: open ? 'table-row' : 'none'}}>
        <TableCell align="center">
          <h4>Сумма ($)</h4>
          <p>41234</p>
        </TableCell>
        <TableCell align="center">
          <h4>Тип банка</h4>
          <p>Название</p>
        </TableCell>
        <TableCell align="center">
          <h4>Тип биржи</h4>
          <p>Название</p>
        </TableCell>
        <TableCell align="center">
          <h4>Авторизация</h4>
          <p className='table-auth'>успех авторизации</p>
        </TableCell>
      </TableRow>
    </>
  )
}