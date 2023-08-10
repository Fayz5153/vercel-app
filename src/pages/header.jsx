import React from 'react';
import { MyContext } from '../context/context';

const Header = () => {
    return ( 
        <MyContext.Consumer>
            {(value)=>{
                return(
                    <h1 className={value.theme ? "dark" : "light"}>
                        Header
                    </h1>
                )
            }}
        </MyContext.Consumer>
     );
}
 
export default Header;