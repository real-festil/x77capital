import { createGlobalState } from 'react-hooks-global-state';

const initialState ={
    login: false,
    token: localStorage.token?.toString()
}

export const { useGlobalState } = createGlobalState(initialState);