import React, { useState } from 'react';
import HappyDetails from '../happyDetails/HappyDetails';

const Happy = () => {
       const [happy,sethappy] = useState(false)

    return (
        <div>
            <h1>Is familier: {happy.toString()}</h1>
            <button onClick={()=>sethappy(!happy)}>Toggle</button>
            
            <HappyDetails happy={happy}></HappyDetails>
            
        </div>
    );
};

export default Happy;