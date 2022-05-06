import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "../../styles/shipsPer.css";
import { getSinglePlanet } from "../component/api";
// 


export const SinglePlanet = ()=> {
const [ship, setship] = useState(null);
const params = useParams();


 useEffect(() => {
    const fn = async () => {
      const localShip = await getSinglePlanet(params.id);
     return setship(localShip);
    };
    fn();  }, []);



  
 

    return(

      <>

     <div> </div>
     <div className="white ">
     <h1> Individual Planet Details</h1>
     <div>
      <h2> Planet Name is....  <b className="highLight"> { ship !== null ? ship.name : " " }</b> </h2><br></br>
      <h3> Climate There is.... <b className="highLight"> { ship !== null ? ship.climate : " " }</b> </h3>
      <br></br>
      <h3> Terrain is.... <b className="highLight"> { ship !== null ? ship.terrain : " " }</b> </h3>
      <br></br>
      <h3> Total Population is.... <b className="highLight"> { ship !== null ? ship.population : " " }</b> </h3>
      </div>
      </div>
      
    
      
      
      
      </>






    );
};