import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const styleSample = {
  color:''
}
let msg="";
const time=new Date().getHours();
if(time <12){
   msg="good Mrg";
  styleSample.color="green";
}else if(time<18   ){
  styleSample.color="red";
   msg="good aftnon";
}else{
  styleSample.color="blue";
   msg="good ngt";
}

function App() {
  return (
    <>

      <h1 className='heading' style={styleSample}>{msg} </h1>
    </>
  )
}

export default App
