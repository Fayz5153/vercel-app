import React, { createContext, useEffect, useState } from 'react';

export const MyContext = createContext()
const ContextMode = (props) => {

    const [search, setSearch] = useState(true)
    const [word, setWord] = useState("")
    // console.log(word)
    function HandleSearch() {
        if (word !== "") {
            setSearch(false)
        }else{
            setSearch(true)
        }
    }
    useEffect(()=>{
        HandleSearch()
    },[word])
    
    return ( 
        <MyContext.Provider 
            value={{
                word:word,
                search:search,
                setWord:setWord
            }}
        >
            {props.children}
        </MyContext.Provider>
     );
}

export default ContextMode;
