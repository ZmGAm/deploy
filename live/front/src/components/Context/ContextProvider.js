import React,{useState} from 'react'

import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';
import { LoginContext } from './LoginContext';
import { PoolContext } from './PoolContext';
import { SearchContext } from './SearchContext';
const ContextProvider= ({children})=> {
  const initializsource=()=>{
      
    const value =localStorage.getItem('source');
    return value?JSON.parse(value):null;

};
const initializsdestination=()=>{
      
  const value =localStorage.getItem('destination');
  return value?value:null;

};

const initializslogin=()=>{
   const user=localStorage.getItem('login');
  return user?JSON.parse(user):{};
  

};
const initializspool=()=>{
  const value=localStorage.getItem('pool');
 return value?JSON.parse(value):{};
 

};

    const [source, setSource]=useState(initializsource);
    const [destination, setDestination]=useState(initializsdestination);
    const [search, setSearch]=useState({destination:{},source:{}});
    
    const [login, setLogin]=useState(initializslogin);
    const [pool, setPool]=useState(initializspool);
    const updateLogin = (newValue) => {
      setLogin(newValue);
    };
    // const updatesearch = (newValue) => {
    //   setSearch(newValue);
    // };
    const updatePool = (newValue, type) => {
      setPool(prevPool => {
        if (type === "Pdestination") {
          return {
            ...prevPool,
            destination: newValue
          };
        } else if (type === "Psource") {
          return {
            ...prevPool,
            source: newValue
          };
        }
        return prevPool;
      });
    };
    const updatesearch = (newValue, type) => {
      setSearch(prevPool => {
        if (type === "Pdestination") {
          return {
            ...prevPool,
            destination: newValue
          };
        } else if (type === "Psource") {
          return {
            ...prevPool,
            source: newValue
          };
        }
        return prevPool;
      });
    };
   
  
  return (
    <PoolContext.Provider value={{pool,updatePool}}>
      <SearchContext.Provider value={{search,updatesearch}}>
        <LoginContext.Provider value={{login,updateLogin}}>
                            <DestinationContext.Provider value={{destination, setDestination}}>
                                    <SourceContext.Provider value={{source, setSource}}>
                                          {children}       
                                    </SourceContext.Provider >
                            </DestinationContext.Provider > 
          </LoginContext.Provider>
        </SearchContext.Provider>
      </PoolContext.Provider>
  )
}

export default ContextProvider