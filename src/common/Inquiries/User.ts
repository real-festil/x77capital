import { API_URL } from "../../evn";

export interface AuthModel  {
    login: string;
    password: string | number;
}

export const authUser = async (values: AuthModel, { post, loading }: any) => {
    const feachData = async () => {
        if (loading) return loading 
        try {
            const response = await post('structure/auth/token/', {
                username: values.login,
                password: values.password
            })
            // localStorage.setItem('token', response.id.toString())

            console.log('response', response);
            
            return response 
        } catch (error) {
            console.log(error);
        }
    }
    return feachData()
}

export const newUser = (values: AuthModel, {post, loading }: any) => {
    const feachData = async () => {
        if (loading) return loading 
        try {
            const response = await post('structure/auth/users/', {
                headers:["Access-Control-Allow-Origin"],
                username: values.login,
                password: values.password
            })
            console.log('response', response);
            
            return response 
        } catch (error) {
            console.log(error);
        }
    }
    return feachData()
}