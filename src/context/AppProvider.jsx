/* eslint-disable react/prop-types */
import { useState } from 'react';
import {AppContext} from './AppContext';



export function AppProvider( {children} ) {

 // GLOBAL COUNTER //
 const [count, setCount] = useState(0)



  return (
    <AppContext.Provider value={{count,setCount}}>
        {children}
    </AppContext.Provider>
  )
}
