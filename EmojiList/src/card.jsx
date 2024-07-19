import React from "react";
import SpanProp from "./spanProp";
function Card(props){
    return(
            <div className="term">
                <dt>
                    <SpanProp item={props.emoji}/>
                    <SpanProp item={props.name}/>
                </dt>
                <dd>
                    {props.data}                        
                </dd>
            </div>   
    )
}
export default Card;