import { useState } from "react";
function App() {
  const [values,setValues]=useState("hello");
  const [isMouseOver,setMouseOver]=useState(false);
  
  function eventFunction(){
    setValues("submitted");
  }
  function colorFunction(){
    setMouseOver(true);
  }
  function colorFunctionSecond(){
    setMouseOver(false);
  }
  return (
    <>
      <div className="container">
        <h1>{values}</h1>
        <input type="text" placeholder="What's your name?" />
        <button onClick={eventFunction} onMouseOver={colorFunction} onMouseOut={colorFunctionSecond} style={{backgroundColor: isMouseOver ? "black":'white'}}>Submit</button>
      </div>
    </>
  )
}

export default App
