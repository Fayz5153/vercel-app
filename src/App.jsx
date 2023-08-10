import React from 'react';
import ContextMode, { MyContext } from './context/context';
import Header from './pages/header';
import Main from './pages/main';
import {Routes, Route, Link} from "react-router-dom"

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
              <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/category/book"}>Book</Link>
                <Link to={"/category/tv"}>Tv</Link>
              </div>
              <Routes>
                <Route index element={<Header/>}/>
                <Route path='category/:name' element={<Main value={value}/>}/>
              </Routes>
              
            </div>
          )
        }}
      </MyContext.Consumer>
    </ContextMode>
   );
}
export default App;