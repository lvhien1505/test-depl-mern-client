import React,{useEffect,useState} from 'react';
import axios from 'axios'

const Test = () => {
    const [name,setName]=useState("");
    const [age,setAge]=useState(0)
    useEffect(async ()=>{
        const res=await axios.get("http://localhost:5000/test");
        setName(res.data.name);
        setAge(res.data.age)
    },[])
    return (
        <div>
            Name: {name}
            Age:  {age}
        </div>
    )
}

export default Test
