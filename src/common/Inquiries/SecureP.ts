import {useHttp} from "./useHttp"

export const postAdmin = async (type: string, amount: number, account0: number, comments?: string, account1?: number) => {
    const response = await useHttp.post(`/structure/adminact/create/`, {
      type,
      amount: amount * 100,
      comments,
      account0,
      account1
    }).catch(error_ => {
        return error_.response?.data
    });
    return response
}