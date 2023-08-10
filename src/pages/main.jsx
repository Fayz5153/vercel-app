import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { WaveLoading } from 'react-loadingg';

const Main = () => {
    let params = useParams().name
    // console.log(params)
    let BASE_URL = "https://64d47322b592423e46942188.mockapi.io"
    const [data, setData]= useState([])
    const [load, setLoad]= useState(false)

    useEffect(()=>{
        setLoad(true)
        axios.get(BASE_URL+"/"+params).then((res)=>{
            // console.log(res)
            setData(res.data)
            if (res.status === 200) {
                setTimeout(() => {
                    setLoad(false)
                }, 1500);
            }
        })
    },[params])
    return ( 
        <React.Fragment>
            {load === true ? <div className='load'><WaveLoading/></div> : ""}
            <div className='grid'>
                {data.map((item)=>{
                    return(
                        <div className='card'>
                            <img src={item.img} alt="" width={"90%"}/>
                            <h2>{item.title}</h2>
                            <h3>{item.price}</h3>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Main;