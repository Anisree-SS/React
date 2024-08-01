import { startOfMonth, getDaysInMonth, subMonths, addMonths } from "date-fns";
import { useState, useEffect } from "react";
import SelectTag from "./SelectedTag";
import Weeks from "./weeks";
import Days from "./Days";

function App() {
  const [today, setToday] = useState(new Date());
 
  const [newDate, setNewDate] = useState({
    selectMonth: today.getMonth(),
    selectyr: today.getFullYear(),
    selectedDate: today.getDate(),
  });

  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const daysinMon = getDaysInMonth(today);

  useEffect(() => {
    setToday(
      new Date(
        newDate.selectyr,
        newDate.selectMonth,
        newDate.selectMonth == 1 && newDate.selectedDate > 29
          ? 28
          : newDate.selectedDate
      )
    );
    return()=>{today};
  }, [today]);
 
 
  function monthSelect(event) {
    const { name, value } = event.target;
    console.log(newDate);
    setNewDate((prevDate) => ({ ...prevDate, [name]: value }));
    setToday(
      new Date(
        newDate.selectyr,
        newDate.selectMonth,
        newDate.selectMonth == 1 && newDate.selectedDate > 29
          ? 28
          : newDate.selectedDate
      )
    );
  }

  function setNewDates(day) {
    console.log(day);
    setNewDate({
      selectMonth: day.getMonth(),
      selectyr: day.getFullYear(),
      selectedDate: day.getDate(),
    });
    setToday(
      new Date(newDate.selectyr, newDate.selectMonth, newDate.selectedDate)
    );
  }

  const prevDay = startOfMonth(today).getDay();
  const [updateMonth, setupdateMonth] = useState(today);

  function updatePrevMonth(ss) {
    console.log(ss);
    setupdateMonth(subMonths(today, 1));
    setNewDates(updateMonth);
  }

  function updatePostMonth() {
    setupdateMonth(addMonths(today, 1));
    setNewDates(updateMonth);
  }

  function selectDate(event) {
    monthSelect(event);
  }

  return (
    <>
      <div className="grid-container">
        <div onClick={()=>{updatePrevMonth(11)} } className="buttonStyle">
         <p> &lt;</p>
        </div>
        <div className="item1">
          <SelectTag
            Selectfunction={monthSelect}
            names="selectMonth"
            years={month}
            len="0"
          />
        </div>
        <div className="item2">
          <SelectTag
            Selectfunction={monthSelect}
            names="selectyr"
            years={year}
            len="100"
          />
        </div>
        <div onClick={updatePostMonth} className="buttonStyle">
          <p>&gt;</p>
        </div>
        <Weeks />
        <Days dayLen={prevDay} />
        <Days dayLen={daysinMon} selectedDate={selectDate} date={date} />
      </div>
    </>
  );
}

export default App;
