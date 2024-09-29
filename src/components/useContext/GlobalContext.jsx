import React, { useEffect, useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const [data, setData] = useState(null)

    const clearData = () => {
        setData(null)
    }


    useEffect(()  =>  {
        fetch('https://ranekapi.origamid.dev/json/api/produto/').then( response => response.json()).then(json => setData(json))
    }, [])
   
  return (
    <GlobalContext.Provider value={{ data, clearData}}>
      {children}
    </GlobalContext.Provider>
  );
};