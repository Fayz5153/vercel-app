import React from 'react';
import ContextMode, { MyContext } from './context/context';
import HomePage from './pages/HomePage';
import Category from './pages/Category';
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import Search from './pages/Search';

const App = () => {
  let navigate = useNavigate()
  return ( 
    <ContextMode>
      <MyContext.Consumer>
        {(value)=>{
          return(
            <div>
              <div className='navbar'>
                <Link to={"/"}>Home</Link>
                <Link to={"/category/book"}>Book</Link>
                <Link to={"/category/tv"}>Tv</Link>
                
                <div className="search">
                  <input type="search" placeholder='Qidiruv...' onChange={(e)=> value.setWord(e.target.value)}/>
                  <button onClick={()=> navigate("/search")}>Search</button>
                </div>
              </div>
              <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='category/:name' element={<Category/>}/>
                <Route path='search' element={<Search/>}/>
              </Routes>
              
            </div>
          )
        }}
      </MyContext.Consumer>
    </ContextMode>
   );
}
export default App;