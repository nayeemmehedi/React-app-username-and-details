import React, { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import UserDetails from '../UserDetails/UserDetails';

const Header = () => {


     const[user,setuser]=useState([])

    useEffect(()=> {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setuser(json))






    },[])

    return (
        <div>
           <br/> <br/>

            {user.map(name =>  <UserDetails name={name} id={name.id}></UserDetails> )}

           
            
        </div>
    );
};

export default Header;