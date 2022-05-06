import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "../../styles/shipsPer.css";
import { getShipLocal } from "../component/api";
// 


export const LocalShip = ()=> {
const [ship, setship] = useState(null);
const params = useParams();


 useEffect(() => {
    const fn = async () => {
      const localShip = await getShipLocal(params.id);
     return setship(localShip);
    };
    fn();  }, []);



  
 

    return(

      <>

     <div> </div>
     <div className="white ">
     <h1> Individual Ship View</h1>
      <h2> Hello There  { ship !== null ? ship.name : " " } </h2>
      <h3> Total Crew { ship !== null ? ship.crew : " " } </h3>
      </div>
      
    
      
      
      
      </>






    );
};