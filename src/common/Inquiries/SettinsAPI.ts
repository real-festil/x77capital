import {useHttp} from "./useHttp"

export interface SettingsModel {
    token: string;
    accountId?: number
}

export const getAccounts = async ({token}: SettingsModel) => {
    const response = await useHttp.get(`/structure/settings/`,
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response

}

export const accountСreation = async ({token}: SettingsModel) => {
    const response = await useHttp.post(`/structure/settings/create`,{},
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}

export const accountEdit = async ({token,accountId }: SettingsModel) => {
    const response = await useHttp.post(`/structure/settings/${accountId}/`,{},
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}
