import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import "../../styles/cards.css";
import { getShipLocal } from "../component/api";
// 


export const LocalShip = ()=> {
const params = useParams();




 useEffect(() => {
    const fn = async () => {
      const localShip = await getShipLocal();
     return console.log(localShip.gender);
    };
    fn();
  }, []);



  
 

    return(

      <>

      <div>
        <h1> Yolo </h1>
<ul>

<li> HI!!!!!! </li>

</ul>




      </div>
      
      
      
      
      
      </>






    );
};