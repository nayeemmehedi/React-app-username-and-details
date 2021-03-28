import React, { useState } from 'react';

const HappyDetails = (props) => {
    let happy=props.happy
    let greetings
    if(happy){
        greetings=<p>welcome friend</p>
    }
    else{
       greetings=<p>who are u</p>
    }



    let newvalue = happy? <p>Welcome my friend </p>:<p>kida tui</p>












    return (
        <div>
            <h1>{greetings}</h1>
            <h1>FOOD</h1>
            <h3>{newvalue}</h3>

            {happy && <p>Amr mobile ne bondhu</p>}
            
        </div>
    );
};

export default HappyDetails;