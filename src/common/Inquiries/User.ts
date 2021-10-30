import {useHttp} from "./useHttp"

export interface AuthModel {
    login: string;
    password: string | number;
}

export const authUser = async (values: AuthModel) => {
    const response = await useHttp.post(`/structure/auth/token/`, {
        username: values.login,
        password: values.password
    }).catch(error_ => {
        return error_.response?.data
    });
    return response
}

export const logout = async (token: string) => {
    const response = await useHttp.post(`/structure/auth/logout/`, {},
        {headers: {'Authorization': `Token ${token}`}}

    ).catch(error_ => {
        return error_.response?.data
    });

    return response
}

export const newUser = async (values: AuthModel) => {
    const response = await useHttp.post('/structure/auth/users/', {
        username: values.login,
        password: values.password
    }).catch(error_ => {
        return error_.response.data
    });

    return response
}