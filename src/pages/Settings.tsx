import Search from 'react-select';
import {Box, Container, MenuItem} from "@material-ui/core";
import {Select as MaterailSearch, Button} from '@material-ui/core';

export default function Settings() {
  const options = [
    {value: 'user_1', label: 'User_1'},
    {value: 'user_2', label: 'User_2'},
    {value: 'user_3', label: 'User_3'}
  ];

  return (
    <Container className='profitLog'>
      <Box className='profitLog__head'>
        <h2>Settings</h2>
      </Box>
      <Box className='settings__wrap-select'>
        <Search options={options} className='settings__wrap-search' placeholder='Name of the user' />
        <MaterailSearch className='settings__select' defaultValue='Exchange 1'>
          <MenuItem value='Exchange 1'>Exchange 1</MenuItem>
          <MenuItem value='Exchange 2'>Exchange 2</MenuItem>
        </MaterailSearch>
        <Button variant='contained'>Add</Button>
      </Box>
      <Box className='settings__table'>
        <Box className='settings__table-header'>
          <p>Banks</p>
          <p>Exchanges</p>
        </Box>
        <Box className='settings__table-wrap'>
          <Box className='settings__table-wrap-item'>
            <Box className='settings__table-item'>
              <p>MonoVadim</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>MonoVadim</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>MonoVadim</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>MonoVadim</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>MonoVadim</p>
              <Button variant="text">Delete</Button>
            </Box>
          </Box>
          <Box className='settings__table-wrap-item'>
            <Box className='settings__table-item'>
              <p>Huobi2</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>Huobi2</p>
              <Button variant="text">Delete</Button>
            </Box>
            <Box className='settings__table-item'>
              <p>Huobi2</p>
              <Button variant="text">Delete</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}