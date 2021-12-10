import {useHttp} from "./useHttp"

export const postSingle = async (type: string, amount0: number, account0: number, amount1: number, account1: number, fee: number, uah_rate: number, comments?: string, amount2?: number, account2?: number, amount3?: number, account3?: number) => {
    const response = await useHttp.post(`/structure/single/create/`, {
      type,
      amount0,
      account0,
      amount1,
      account1,
      amount2,
      account2,
      amount3,
      account3,
      fee,
      uah_rate,
      comments,
    }).catch(error_ => {
        return error_.response?.data
    });
    return response
}

export const postLinking = async (amount0: number, account0: number, amount1: number, account1: number, profit0?: number, comments?: string) => {
  const response = await useHttp.post(`/structure/linking/create/`, {
    account0,
    amount0,
    account1,
    amount1,
    profit0,
    comments,
  }).catch(error_ => {
      return error_.response?.data
  });
  return response
}

export const postPrivate = async (amount0: number, account0: number, amount1: number, account1: number, amount2: number, account2: number, profit0?: number, profit1?: number, comments?: string) => {
  const response = await useHttp.post(`/structure/private/create/`, {
    account0,
    amount0,
    account1,
    amount1,
    account2,
    amount2,
    profit0,
    profit1,
    comments,
  }).catch(error_ => {
      return error_.response?.data
  });
  return response
}

export const postArbitrage = async (amount0: number, account0: number, amount1: number, account1: number, profit0: number, payout: number, commission: number, comments?: string) => {
  const response = await useHttp.post(`/structure/arbitrage/create/`, {
    account0,
    amount0,
    account1,
    amount1,
    profit0,
    payout,
    commission,
    comments,
  }).catch(error_ => {
      return error_.response?.data
  });
  return response
}