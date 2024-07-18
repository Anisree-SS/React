import React from "react";
import emojipedia from './listOfData'
import Card from "./card";
/* function emojiList(emoj){
    return( 
      <Card
        key={emoj.id}
        emoji={emoj.emoji}
        name={emoj.name}
        data={emoj.meaning}
      />
    )
  } */
function Heading(){
    return(
        /* emojipedia.map(emojiList =>(
            <Card
                key={emojiList.id}
                emoji={emojiList.emoji}
                name={emojiList.name}
                data={emojiList.meaning}
            />
        )) */
        emojipedia.map((emojiList,index) =>(
            <Card
                key={index}
                emoji={emojiList.emoji}
                name={emojiList.name}
                data={emojiList.meaning}
            />
        ))
    )
}
export default Heading;
