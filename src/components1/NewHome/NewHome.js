import React, {useState, useEffect } from 'react';
import {useParams } from 'react-router';
import Lastdetails from '../Lastdetails/Lastdetails';

const NewHome = () => {


    const { id } = useParams();
   


    const[user1,setuser1]=useState({})
    

    useEffect(()=> {
        
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setuser1(json))

     

    },[])
   


    return (
        <div>
            <h1>New Town....</h1>
        
            <Lastdetails name={user1}  id={user1.id}></Lastdetails>
            
            
        </div>
    );
};

export default NewHome;