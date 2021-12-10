import {useHttp} from "./useHttp"

export const getProfit = async () => {
    const response = await useHttp.get(`/structure/profit/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}