import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import male from '../image/male.png'
import female from '../image/female.png'


const Lastdetails = (props) => {

    const [gender,setgender] =useState(false)
    let Gender 
    let image_new

    if (gender){
        Gender='male'
        image_new=  <img style={{ height: '210px', width: '280px', borderRadius: '10px 10px 10px' }} src={male} alt="wait please" /> 

    }
    else{
        Gender='female'
        image_new=  <img style={{ height: '210px', width: '280px', borderRadius: '10px 10px 10px' }} src={female} alt="wait please" /> 

    }

    const value_change=()=>{
        setgender(true)
    }
    const value_change_again=()=>{
        setgender(false)
    }



    const youtube = <FontAwesomeIcon style={{ height: '150px', width: "200px", color: 'red' }} icon={faYoutube} />
    const twitter = <FontAwesomeIcon style={{ height: '150px', width: "200px", color: '#00acee' }} icon={faTwitter} />
    const facebook = <FontAwesomeIcon style={{height: '150px', width: "200px", color: '#3b5998' }} icon={faFacebook} />


    let newStyle = { border: '2px solid red', borderRadius: "30px 10px 30px", paddingTop: '10px', color: 'white', backgroundColor: 'red' }



    const { strTeam, intFormedYear, strLeague, strStadiumDescription, strCountry, strGender, strTeamFanart2, strTeamFanart3, strTeamBadge } = props.name

    //   const product = props.product
    return (
        <div>

            <div style={{

                backgroundImage: `url(${strTeamFanart3})`,

                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',




            }} >


                <img class="rounded mx-auto d-block" style={{ height: "250px", width: '250px', }} src={strTeamBadge} alt="no dont work" />



            </div>;


            <div className='container' style={newStyle}>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h1>{strTeam}</h1>
                            <h2>Founded {intFormedYear}</h2>
                            <h2>{strLeague}</h2>

                            <h4>Country {strCountry}</h4>
                            <h4>Gender {Gender}</h4>
                            <button  onClick={value_change}>male</button>
                            <button  onClick={value_change_again}>female</button>
                            


                        </div>


                        <div className="col-12 col-sm-6 ">
                            <div className='d-flex flex-row-reverse'>
                                  

                                {/* image bosbe */}
                                {image_new}


                                </div>
                               
                        </div>
                    </div>

                </div>




            </div>
            <div className='container' ><br />
                <h2>Description:</h2>  <p> {strStadiumDescription}</p> <br />


            </div>

           


            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4"><a href="https://www.twitter.com/">{twitter} Twitter</a></div>
                    <div className="col-12 col-sm-4"> <a href="https://www.youtube.com/">{youtube}Youtube</a>
</div>
                    <div className="col-12 col-sm-3"><a href="https://www.facebook.com/">{facebook}Facebook</a></div>
                </div>
            </div>
            <p style={{textAlign:"right"}}>&copy; 2021 NayeemMehedi</p>
        </div>
    );
};

export default Lastdetails;