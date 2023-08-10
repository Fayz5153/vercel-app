import React from 'react';

const Main = (props) => {
    console.log(props)
    return ( 
        <React.Fragment>
            <h1 className={props.value.theme ? "dark" : "light"}>Main</h1>
        </React.Fragment>
     );
}
 
export default Main;