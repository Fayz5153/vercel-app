import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { MyContext } from '../context/context';
import { BASE_URL } from '../contains';

const Search = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(BASE_URL+"/book").then((res)=>{
            // console.log(res)
            setData(res.data)
        })
    },[])
    return ( 
        <MyContext.Consumer>
            {(value)=>{
                return(
                    <div className="home">
                        <div className="grid">
                            {
                                value.word === "" 
                                ?   <h1>Input Bo'sh</h1>
                                :   data.map((item)=>{
                                        if (value.search === true) {
                                            return(
                                                null
                                            )
                                        } else if(
                                                item.title.toLowerCase().includes(value.word.toLowerCase())
                                            ){
                                            return(
                                                <div className='card' key={item.id}>
                                                    <img src={item.img} alt="" width={"90%"}/>
                                                    <h2>{item.title}</h2>
                                                    <h3>{item.price}</h3>
                                                </div>
                                            )
                                        }
                                    })
                                
                            }
                        </div>
                    </div>
                )
            }}
        </MyContext.Consumer>
     );
}
 
export default Search;