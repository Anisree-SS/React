import {useState} from 'react';
function Time(){
    setInterval(updateTime,1000);
    var now=new Date().toLocaleTimeString();
    var [time,setTime]=useState(now)
    function updateTime(){
        setTime(new Date().toLocaleTimeString())
    }
    return(
        <div className="container">
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    )
}
 export default Time;