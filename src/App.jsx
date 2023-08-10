import React from 'react';
import ContextMode, { MyContext } from './context/context';
import Header from './pages/header';
import Main from './pages/main';

const App = () => {
  return ( 
    <ContextMode>
      <MyContext.Consumer>
        {(value)=>{
          return(
            <div>
              <button onClick={value.handleTheme}>
                Theme
                </button>
              <h1>{value.theme ? "theme dark" : "theme light"}</h1>
              <Header/>
              <Main value={value}/>
            </div>
          )
        }}
      </MyContext.Consumer>
    </ContextMode>
   );
}
export default App;