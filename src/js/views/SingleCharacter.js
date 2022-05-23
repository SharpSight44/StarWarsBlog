import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "../../styles/shipsPer.css";
import { getSingleCharacter } from "../component/api";
// 


export const SingleCharacter = ()=> {
const [ship, setship] = useState(null);
const params = useParams();


 useEffect(() => {
    const fn = async () => {
      const localShip = await getSingleCharacter(params.id);
     return setship(localShip);
    };
    fn();  }, []);



  
 

    return(

      <>

     <div> </div>
     <div className="white ">
     <h1> Individual Character View</h1>
     <div>
      <h2> Character  Name is....  <b className="highLight"> { ship !== null ? ship.name : " " }</b> </h2><br></br>
      <h3> Their Eye Color is ....  <b className="highLight">{ ship !== null ? ship.hair : " " }</b> </h3>
      <br></br>
      <h3> Their Gender is .... <b className="highLight"> { ship !== null ? ship.ships : " " }</b> </h3>
      <br></br>
      <h3> Their Skin Color is ....  <b className="highLight">{ ship !== null ? ship.name : " " } </b></h3>
      </div>
      </div>
      
    
      
      
      
      </>






    );
};