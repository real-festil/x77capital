import Search from 'react-select';
import {Box, Container, MenuItem, TextField, Typography} from "@material-ui/core";
import {Button} from '@material-ui/core';
import {accountDelete, accountСreation, getAccounts, getBec, getUser} from "../common/Inquiries/SettinsAPI";
import {useGlobalState} from "../globalState";
import React, {useEffect, useState} from "react";
import {Field, FieldProps, Form, Formik, FormikValues} from "formik";
import FormSelectBase from "../core/atoms/FormSelectBase";
import {FormatOptionLabelContext, FormatOptionLabelMeta} from "react-select/dist/declarations/src/Select";

interface DProps {
    id: number;
    bec: {
        id: string | number
        name: string
    }
    user: {
        id: string | number
        user_name: string
    }
}

export default function Settings() {
    const [token, setToken] = useGlobalState("token");
    const [data, setData] = useState<DProps[]>([])
    const [optionsName, setOptionsName] = React.useState({arr: [{label: '', value: ''}], active: ''});
    const [optionsExchange, setOptionsExchange] = React.useState({
        arr: [{label: '', value: ''}],
        active: ''
    });

    const accounts = async () => {
        const response = await getAccounts({token});

        if (response?.errors) {
            console.log('errors', response.errors)
        } else {
            setData(response?.data)
        }
    };

    const createAccount = async () => {
        const response = await accountСreation({
            user: optionsName.arr.find((x: any) => optionsName.active === x.label)!.value!,
            bec:{
                bec_id: optionsExchange.arr.find((x: any) => optionsExchange.active === x.label)!.value,
                name: optionsExchange.active,
                type: 1,
                currency: 'UAN'
            } ,
            token
        });

        if (response?.errors) {
            console.log('errors', response.errors)
        } else {
            console.log('response', response?.data)
            // setData(response?.data)
            accounts();
        }
    };

    const getAccountName = async () => {
        const response = await getUser({token});

        if (response?.errors) {
            console.log('errors', response.errors)
        } else {
            console.log('getAccountName', response?.data)
            let arrName: any = []
            response?.data.map(((item: any, index: any) => arrName.push({label: item.user_name, value: index})))
            setOptionsName({...optionsName, arr: arrName})
        }
    };
    const getExchange = async () => {
        const response = await getBec({token});

        if (response?.errors) {
            console.log('errors', response.errors)
        } else {
            console.log('getExchange', response?.data)
            let arrName: any = []
            response?.data.map(((item: any, index: any) => arrName.push({label: item.name, value: item.id})))
            setOptionsExchange({...optionsExchange, arr: arrName})
        }
    };

    const handleChange = (value: FormatOptionLabelContext, country: any) => {
        setOptionsExchange({...optionsExchange, active: country.props.children})
    };

    const onSubmit = () => {
        createAccount()
        console.log('optionsName', optionsName)
        console.log('optionsExchange', optionsExchange)
    };

    const onDelete = async (id: number) => {
      const res = await accountDelete(id, token);
      accounts();
    }


    useEffect(() => {
        getAccountName()
        accounts()
        getExchange()
    }, [])

    useEffect(() => {
        if (!optionsExchange.active) {
            setOptionsExchange({...optionsExchange, active: optionsExchange.arr[0]?.label})
        }
    }, [optionsExchange.arr])

    console.log(optionsExchange);
    console.log('optionsName', optionsName)

    return (
        <Container className='profitLog'>
            <Box className='profitLog__head'>
                <h2>Settings</h2>
            </Box>

            <Formik
                initialValues={{userName: '', Exchange: ''}}
                onSubmit={onSubmit}
            >
                {(props: FormikValues) => (
                    <Form className="form-pages">
                        <Box className='settings__wrap-select'>

                            <Field name="name">
                                {({field, form: {touched, errors}}: FieldProps) => (
                                    <Search options={optionsName.arr} className='settings__wrap-search'
                                            placeholder='Name of the user'
                                            onChange={(e: any) => setOptionsName({...optionsName, active: e.label})}/>
                                )}
                            </Field>
                            <Field name="exchange">
                                {({field, form: {touched, errors}}: FieldProps) => (
                                    <FormSelectBase
                                        heightLabel={false}
                                        menuItem={optionsExchange.arr}
                                        handleChange={handleChange}
                                    />
                                )}
                            </Field>

                            <Button type='submit' variant='contained'>Add</Button>
                        </Box>

                    </Form>)}
                {/*<MaterailSearch className='settings__select'*/}
                {/*                defaultValue={1}*/}
                {/*                onChange={(e: any) =>  console.log('e.target.value', e)}>*/}

                {/*    {optionsExchange.arr.map((element: any) =>*/}
                {/*        <MenuItem value={element.value}>*/}
                {/*            {element.label}</MenuItem>*/}
                {/*    )}*/}
                {/*</MaterailSearch>*/}
            </Formik>
            <Box className='settings__table'>
                <Box className='settings__table-header'>
                    <p>Banks</p>
                    <p>Exchanges</p>
                </Box>
                {data?.length ?
                    <Box flexDirection={'column'} className='settings__table-wrap'>
                        {data.map((items, index) =>
                            <div key={index}>
                                <Box className='settings__table-wrap-item'>
                                    <Box className='settings__table-item'>
                                        <p>{items.bec?.name}</p>
                                        <Button variant="text" onClick={() => onDelete(items.id)}>Delete</Button>
                                    </Box>
                                </Box>
                                <Box className='settings__table-wrap-item'>
                                    <Box className='settings__table-item'>
                                        <p>{items.user?.user_name}</p>
                                        <Button variant="text" onClick={() => onDelete(items.id)}>Delete</Button>
                                    </Box>
                                </Box>
                            </div>)}

                    </Box>
                    : <Typography>not found</Typography>}
            </Box>
        </Container>
    )
}
