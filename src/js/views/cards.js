import React, { useState, useEffect, useContext } from "react";
import "../../styles/cards.css";


export const Cards = () => {

    return(
        <>

<div className="cardsMain">

<div>
<h1> Welcome to Cards Page </h1>
</div>
<div className="container">
    <div className="row titles"> Characters</div>
<div className="row">
    <div className="col-3 "><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>
<div className="col-3">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>BB8</b></h5>
    <p className="card-text">BB-8 accompanied Poe Dameron on many missions for the Resistance, helping to keep his X-wing in working order...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>Luke Skywalker </b></h5>
    <p className="card-text">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536&width=768" className="card-img-top bb8" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>Rey</b></h5>
    <p className="card-text">Rey grew up a scavenger amid the wreckage of war. Her life changed when she agreed to help a droid on an urgent mission...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>

</div>
<div className="row titles"> Planets</div>
<div className="row">
<div className="col-3">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>
<div className="col-3">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>

</div>
<div className="row titles"> Ships</div>
<div className="row">
<div className="col-3">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>
<div className="col-3"><div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div></div>
<div className="col-3">
<div className="card" style={{width: "18rem"}}>
  <img src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=429%2C0%2C538%2C536&width=320" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>R2D2</b></h5>
    <p className="card-text">A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker...</p>
    <a href="#" className="btn btn-success">More Info</a>
  </div>
</div>
</div>

</div>

</div>

  




</div>
</>
    );

};