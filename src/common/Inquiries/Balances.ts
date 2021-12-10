import {useHttp} from "./useHttp"

export const getBalances = async () => {
    const response = await useHttp.get(`/structure/balances/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}