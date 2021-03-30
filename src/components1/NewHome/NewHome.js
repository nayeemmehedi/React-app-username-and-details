import React, {useState, useEffect } from 'react';
import {useParams } from 'react-router';
import Lastdetails from '../Lastdetails/Lastdetails';

const NewHome = () => {


    const { idTeam } = useParams();
   


    const[user1,setuser1]=useState([])
    

    useEffect(()=> {
        
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(response => response.json())
        .then(json => setuser1(json.teams))

     

    },[idTeam])
   


    return (
        <div>
        
            {
               
               user1.map(pd=><Lastdetails  name={pd} key={pd.idTeam}></Lastdetails>)


            }
        
          
            
            
        </div>
    );
};

export default NewHome;