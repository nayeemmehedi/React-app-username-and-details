import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const UserDetails = (props) => {

    const {strAlternate,idTeam,strTeamBadge} =props.name
     
    let history = useHistory();

    function handleClick(idTeam) {
        history.push(`/product/${idTeam}`);
      }
    

   

   const stylecolor={

       border:"1px solid black",
       marginBottom:'20px',
       margin:'25px',
       width:'350px',
       backgroundColor:'white',
       borderRadius:'23px 10px 3px',

   }

    return (
        <div style={stylecolor}>
           

           <h1> 
               
               <Link to={"/product/" +idTeam}>{strAlternate} </Link>
                 
                
                </h1>
            
            <img style={{height:'270px',width:'270px'}} src={strTeamBadge} alt=""/>
            
            

            <button type="button" class="btn btn-secondary" onClick={()=>handleClick(idTeam)}>
      Explore+
    </button>
            
        </div>
    );
};

export default UserDetails;











// https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133619

// team uniq key give and show details {idTeam} r