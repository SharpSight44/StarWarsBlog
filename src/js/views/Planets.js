import React, { useState, useEffect, useContext } from "react";
import "../../styles/cards.css";
import {BiBookmarkHeart} from 'react-icons/bi';
import { getAllPlanets } from "../component/api";
import { FavoritesContext } from "../component/favorites";

export const AllPlanets = ()=>{
    const [apiPlanets, setapiPlanets] = useState([]);
    const [fav, setfav] = useState(false);
    

    useEffect(() => {
        const fn = async () => {
          const apiPlanets = await getAllPlanets();
         return setapiPlanets(apiPlanets); 
        };
        fn();
      }, []);


    //   const favsList = (item)=>{
    //     const newlist = [...favlist + item ];
    
    //     setfavlist(newlist);
    
    //     return console.log(list.map((x,i)=> <li key={i}>{x}</li>));
    // };
    
    
    
    const save = (item) => {
        let current = fav;
        return setfav( current !== false ? false:true), favsList(item);
    
    };

    return(
<>
<div className="cardsMain">
<div className="container">
<div className="row titles"> Planets API</div>
<div className="row holly">
{apiPlanets.map((x,i) => <div key={i} className="col "><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.name}</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a> <BiBookmarkHeart onClick={()=> save(x.name)} className={fav === true ? "saveIcon save" : "saveIcon"}/>
  </div>
</div>
</div> )}



</div>








</div>

</div>






</>




    );

};