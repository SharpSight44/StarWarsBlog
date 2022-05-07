import React, { useState, useEffect, useContext } from "react";
import "../../styles/cards.css";
import {BiBookmarkHeart} from 'react-icons/bi';
import { getAllPeople } from "../component/api.js";
import { FavoritesContext } from "../component/favorites";








export const AllCharacters = () => {
const [fav, setfav] = useState(false);
const [list, setlist] = useState([]);
const [apiList, setapiList] = useState([]);
const {favorites} = useContext(FavoritesContext);
const {setfavorites} = useContext(FavoritesContext);




useEffect(() => {
  const fn = async () => {
    const apiPeople = await getAllPeople();
   return setapiList(apiPeople); 
  };
  fn();
}, []);




const favsList = (item)=>{
    const newlist = [...list + item ];

    

    return setlist(newlist), setfavorites(newlist);
};



const save = (item) => {
    let current = fav;
    return setfav( current !== false ? false:true), favsList(item);

};

//  const count = () => {


// };


    return(
        <>

<div className="cardsMain">

<div>
<h1> Welcome to Character Page  </h1>
</div>
<div className="container">




<div className="row titles"> Characters API </div>
<div className="row holly">{apiList.map((x,i) => <div key={i} className="col"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{x.name} </b></h5>
    <p className="card-text">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever...</p>
    <a href={"/characters/" + (i+1)} className="btn btn-success">More Info</a> <BiBookmarkHeart onClick={()=> save(x.name)} className={fav === true ? "saveIcon save" : "saveIcon"}/>
  </div>
</div></div> )}</div>


 
    <div className="row titles"> Characters</div>
<div className="row">
    
<div className="col">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b></b></h5>
    <p className="card-text">BB-8 accompanied Poe Dameron on many missions for the Resistance, helping to keep his X-wing in working order...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>

<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>Rey</b></h5>
    <p className="card-text">Rey grew up a scavenger amid the wreckage of war. Her life changed when she agreed to help a droid on an urgent mission...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>

</div>



</div>

  




</div>
</>
    );

};