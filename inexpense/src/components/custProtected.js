import React from 'react'
import {useEffect, useState } from "react";
import {Navigate, resolvePath} from 'react-router-dom'
import axios from 'axios';
axios.defaults.withCredentials = true;
import swal from 'sweetalert';
function Custprotected({children}){
    const [log, setData]= useState(null);
    useEffect(()=>{
      /*  fetch("http://localhost:8000/getCustDet")
        .then((resp)=>resp.json())
        .then((data)=>{
            setData(data.message);
        });*/
        axios.get('http://localhost:8000/user/getCustDet')
            .then(function(response){
                var data = response.data
                setData(data.message);
            })
    }, []);
    if(log==='false')
    {
        console.log("came inside")
        swal({
            text: "Incorrect Credentials!",
            icon: "error",
          });
        return <Navigate to ="/CustLogin" replace />
    }
    else if(log==='nouser')
    {
        console.log("came inside")
        window.alert("No account found with this user name")
        return <Navigate to ="/CustLogin" replace />
    }
    else if (log==='true')
    {
        console.log("came inside")
        return children
    }
}

export default Custprotected
/*
*/