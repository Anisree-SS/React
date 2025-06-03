import { useState } from "react";
function Days(props) {
  const [isColor, setBgColor] = useState({ backgroundColor: "", keys: "" });
  function setstyles(event) {
    const names = event.target.id;
    setBgColor({
      backgroundColor: "aliceblue",
      keys: names,
    });
  }
  const isDay = props.dayLen > 10 ? true : false;
  return (
    <>
      {Array.from({ length: props.dayLen }).map((_, index) => (
        <div style={{}} id={index} onMouseEnter={setstyles}>
          {isDay ? (
            <input
              type="button"
              className="buttonStyle"
              onClick={props.selectedDate}
              value={index + 1}
              name="selectedDate"
              style={{
                backgroundColor:
                  isDay && isColor.keys == index ? isColor.backgroundColor : "",
                color: (index + 1 == props.date) ? "red" : "black" ,
              }}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}

export default Days;
