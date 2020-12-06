import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Status = () => {
    const [status,setStatus]=useState(false)
    useEffect(async ()=>{
        const res=await axios.post("http://localhost:5000/oke");
        setStatus(res.data.status)
    },[])
    return (
        <div>
           Status:{status ? "Oke" : "No oke"}
        </div>
    )
}

export default Status
