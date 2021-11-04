import {useHttp} from "./useHttp"

export interface SettingsModel {
    token: string;

}
export interface AccountEditModel extends SettingsModel{
    accountId: number
}

export interface AccountСreationModel extends SettingsModel{
    user: string
    bec: {
        name: string
        type: string | number
        currency: string
    }
}


export const getAccounts = async ({token}: SettingsModel) => {
    const response = await useHttp.get(`/structure/settings/`,
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response

}

export const getUser = async ({token}: SettingsModel) => {
    const response = await useHttp.get(`/structure/users/`,
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}

export const getBec = async ({token}: SettingsModel) => {
    const response = await useHttp.get(`/structure/bec/`,
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}

export const accountСreation = async ({user, bec, token}: AccountСreationModel) => {
    const response = await useHttp.post(`/structure/settings/create/`,{
        bec: bec,
        user: user
        },
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}

export const accountEdit = async ({token,accountId }: AccountEditModel) => {
    const response = await useHttp.post(`/structure/settings/${accountId}/`,{},
        {headers: {'Authorization': `Token ${token}`}})
        .catch(error_ => {
            return error_.response?.data
        });
    return response
}
