import {useHttp} from "./useHttp"

export const getSettings = async () => {
    const response = await useHttp.get(`/structure/settings/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}