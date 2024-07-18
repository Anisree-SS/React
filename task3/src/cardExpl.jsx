import React from "react";
import Images from "./forImg";
import Info from "./info";
function Card(props){  
    return(
        <div className="card">
            <div className="top">  
                <Info
                    info={props.id}
                /> 
                <h1 className="name">
                    {props.name}
                </h1>
                <Images logo={props.logo}/>
            </div> 
            <div className="bottom">
                <Info
                    info={props.email}
                /> 
                <Info
                    info={props.phone}
                /> 
            </div>
        </div>
    )
}

export default Card;