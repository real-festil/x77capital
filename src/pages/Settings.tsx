import Search from 'react-select';
import {Box, Container, MenuItem} from "@material-ui/core";
import {Select as MaterailSearch, Button} from '@material-ui/core';
import {getAccounts} from "../common/Inquiries/SettinsAPI";
import {useGlobalState} from "../globalState";
import {useEffect, useState} from "react";

interface DProps {
    bec: {
        name: string
    }
    user: {
        user_name: string
    }
}

export default function Settings() {
    const [token, setToken] = useGlobalState("token");
    const [data, setData] = useState<DProps[]>([])

    const options = [
        {value: 'user_1', label: 'User_1'},
        {value: 'user_2', label: 'User_2'},
        {value: 'user_3', label: 'User_3'}
    ];

    const accounts = async () => {
        const response = await getAccounts({token});

        if (response?.errors) {
            console.log('errors', response.errors)
        } else {
            console.log('response', response)
            setData(response?.data)
        }
    };

    useEffect(() => {
        accounts()
    }, [])
    return (
        <Container className='profitLog'>
            <Box className='profitLog__head'>
                <h2>Settings</h2>
            </Box>
            <Box className='settings__wrap-select'>
                <Search options={options} className='settings__wrap-search' placeholder='Name of the user'/>
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

                <Box flexDirection={'column'} className='settings__table-wrap'>
                    {data.map((items) =>
                        <div>
                            <Box className='settings__table-wrap-item'>
                                <Box className='settings__table-item'>
                                    <p>{items?.bec.name}</p>
                                    <Button variant="text">Delete</Button>
                                </Box>
                            </Box>
                            <Box className='settings__table-wrap-item'>
                                <Box className='settings__table-item'>
                                    <p>{items.user.user_name}</p>
                                    <Button variant="text">Delete</Button>
                                </Box>
                            </Box>
                        </div>
                    )}
                </Box>
            </Box>
        </Container>
    )
}