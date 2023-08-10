import React, { createContext, useState } from 'react';

export const MyContext = createContext()
const ContextMode = (props) => {
    const [theme, setTheme] = useState(false)
    const handleTheme = () => {
        setTheme(!theme)
    }
    return ( 
        <MyContext.Provider 
            value={{
                theme:theme,
                handleTheme:handleTheme
            }}
        >
            {props.children}
        </MyContext.Provider>
     );
}

export default ContextMode;
