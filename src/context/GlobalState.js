import React, {useState, createContext} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
export const GlobalContext = createContext();

export const GlobalStateProvider = (props) => {
    const [api, setApi] = useState('https://api.dictionaryapi.dev/api/v2/entries/es/')
    const [favoriteList, setFavoriteList] = useLocalStorage('favoriteList', [])
    
    return(
        <GlobalContext.Provider value = {{ api: [api, setApi], favorite: [favoriteList, setFavoriteList] }}>
            {props.children}
        </GlobalContext.Provider>
    )   
}
