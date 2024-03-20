/* eslint-disable react/prop-types */
import { useState } from 'react';
import {AppContext} from './AppContext';



export function AppProvider( {children} ) {

 // GLOBAL CONTEXT //
 const [count, setCount] = useState(0)
 const [filterText, setFilterText] = useState('');

 

  return (
    <AppContext.Provider value={{count,setCount,filterText,setFilterText}}>
        {children}
    </AppContext.Provider>
  )
}
