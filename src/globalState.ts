import { createGlobalState } from 'react-hooks-global-state';

const initialState ={
    login: false
}

export const { useGlobalState } = createGlobalState(initialState);