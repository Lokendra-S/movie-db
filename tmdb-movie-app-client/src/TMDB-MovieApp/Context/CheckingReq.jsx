import React, { useEffect, useState } from 'react';

function CheckReq() {

    const [ msg, setMsg ] = useState("hi")

    useEffect(async()=>{
        await fetch('http://localhost:4000/pop',{
            method : "GET"
        }).then((res) => res.json())
        .then((data)=>{console.log(data);})
        .catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <div>
            HELLO WORLD   
            <h1>{msg}</h1>     
        </div>
    );
}

export default CheckReq;
