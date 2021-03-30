import React, { useEffect, useState } from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import UserDetails from '../UserDetails/UserDetails';

const Header = () => {
    
    const newStyle ={

        color:'white',
        fontSize:'55px',
        paddingTop:'65px',
        textAlign:'center',
        



    }

     const[user,setuser]=useState([])

    useEffect(()=> {

        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(json => setuser(json.teams))






    },[])

    return (
        <div>


             
         <div>

           <div style={{backgroundColor:'rgba(90, 47, 46, 0.5)',height:'250px',}}>
            
               <h1 style={newStyle}>FOOTBALL <span style={{color:'red'}}>LEAGUE</span> </h1> 
            
            </div>



         </div>







           <div style={{backgroundColor:'black'}}>


          
           <div class="container">
            <div class="row row-cols-3">

             {user.map(name =>  <UserDetails name={name} ></UserDetails> )}
               
            </div>
            </div>
                        

           

            </div>

            
        </div>
    );
};

export default Header;