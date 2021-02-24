import {createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [user, setUser] = useState([{name: 'Fabi', age: 44, country: 'Arg'}]);

    console.log(user);

    return <GlobalContext.Provider value={{user, setUser}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;