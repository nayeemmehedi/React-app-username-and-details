import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {

    const {id,name,username} =props.name

   const stylecolor={

       border:"1px solid red",
       marginLeft:"35px",
       marginBottom:'20px',
       width:' 60%',
       borderRadius:'3px 3px 3px',

   }

    return (
        <div style={stylecolor}>
           

           <h1> 
               
               <Link to={"/product/" +id}>{name} </Link>
                 
                
                
                </h1>
            
            <h3>UserName : {username}</h3>
            <p>id : {id}</p>
        </div>
    );
};

export default UserDetails;