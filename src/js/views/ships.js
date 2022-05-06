import React, { useState, useEffect, useContext } from "react";
import "../../styles/cards.css";
import {BiBookmarkHeart} from 'react-icons/bi';
import { getAllShips } from "../component/api";
import { FavoritesContext } from "../component/favorites";



export const AllShips = ()=>{
    const [apiShips, setapiShips] = useState([]);
    const [fav, setfav] = useState(false);
    const [favlist, setfavlist] = useState([]);
    const {favorites, setfavorites} = useContext(FavoritesContext);

  



    useEffect(() => {
        const fn = async () => {
          const apiShips = await getAllShips();
         return setapiShips(apiShips); 
        };
        fn();
      }, []);


      const favsList = (item)=>{
        const newlist = [...favorites + item ];
    
        setfavorites(newlist);
    
        return console.log(list.map((x,i)=> <li key={i}>{x}</li>));
    };
    
    
    
    const save = (item) => {
        let current = fav;
        return setfav( current !== false ? false:true), favsList(item);
    
    };

    return(
<>
<div className="cardsMain">
<div className="container">
<div className="row titles"> Ships API</div>
<div className="row holly">
{apiShips.map((x,i) => <div key={i} className="col "><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.name}</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href={"/ships/" + i} className="btn btn-success">More Info</a> <BiBookmarkHeart onClick={()=> save(x.name)} className={fav === true ? "saveIcon save" : "saveIcon"}/>
  </div>
</div>
</div> )}



</div>








</div>

</div>






</>




    );

};