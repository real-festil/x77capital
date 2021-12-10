import {useHttp} from "./useHttp"

export const getStatistics = async () => {
    const response = await useHttp.get(`/structure/statistics/`).catch(error_ => {
        return error_.response?.data
    });
    return response
}