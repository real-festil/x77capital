import {useHttp} from "./useHttp"

export const getBankAcc = async () => {
    const response = await useHttp.get(`/structure/bankacc/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}