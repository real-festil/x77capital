import {useHttp} from "./useHttp"

export const getHistory = async () => {
    const response = await useHttp.get(`/structure/history/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}