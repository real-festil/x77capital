import { useHttp } from "./useHttp"

export interface AuthModel  {
    login: string;
    password: string | number;
}

export const authUser = async (values: AuthModel) => {
    try {
        const  response = await useHttp.post(`/structure/auth/token/`, {
            username: values.login,
            password: values.password
        } )
        console.log('response', response);
        if(response.status === 200){
            localStorage.setItem('token', response.data.token.toString())
            return true 
        } else return false
    } catch (error) {
        console.log(error);
        return false
    }
}

export const logout = async (  token: string) => {
    try {
        const  response = await useHttp.get(`/structure/auth/logout/`, {
            headers: {
                'Authorization': `Token ${token}` 
            }
        })
        console.log('response', response);
        
        return true 
    } catch (error) {
        console.log(error);
        return false 
    }
}

export const newUser = async (values: AuthModel) => {
    const response = await useHttp.post('/structure/auth/users/', {
        username: values.login,
        password: values.password
    }).catch( error_ => {return error_.response.data});
    
    return response
}