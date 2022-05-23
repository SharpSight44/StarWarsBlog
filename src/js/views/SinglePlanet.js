import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "../../styles/shipsPer.css";
import { getSinglePlanet } from "../component/api";
// 


export const SinglePlanet = ()=> {
const [planet, setplanet] = useState(null);
const params = useParams();


 useEffect(() => {
    const fn = async () => {
      const localPlanet = await getSinglePlanet(params.id);
     return setplanet(localPlanet);
    };
    fn();  }, []);



  
 

    return(

      <>

     <div> </div>
     <div className="white ">
     <h1> Individual Planet Details</h1>
     <div>
      <h2> Planet Name is....  <b className="highLight"> { planet !== null ? planet.name : " " }</b> </h2><br></br>
      <h3> Climate There is.... <b className="highLight"> { planet !== null ? planet.climate : " " }</b> </h3>
      <br></br>
      <h3> Terrain is.... <b className="highLight"> { planet !== null ? planet.name : " " }</b> </h3>
      <br></br>
      <h3> Total Population is.... <b className="highLight"> { planet !== null ? planet.population : " " }</b> </h3>
      </div>
      </div>
      
    
      
      
      
      </>






    );
};