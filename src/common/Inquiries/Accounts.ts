import {useHttp} from "./useHttp"

export const getAccounts = async () => {
    const response = await useHttp.get(`/structure/accounts/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}