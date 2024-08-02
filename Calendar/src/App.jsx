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
    return () => {
      today;
    };
  }, [today]);

  function monthSelect(event) {
    const { name, value } = event.target;
    setNewDate((prevDate) => ({ ...prevDate, [name]: value }));
    setToday(
      new Date(
        newDate.selectyr,
        newDate.selectMonth,
        newDate.selectedDate
      )
    );
  }

  function setNewDates(day) {
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
  function updatePrevMonth(values) {
    const updates = values ? subMonths(today, 1) : addMonths(today, 1);
    setNewDates(updates);
  }

  function selectDate(event) {
    monthSelect(event);
  }

  return (
    <>
      <div className="grid-container">
        <div
          onClick={() => {
            updatePrevMonth(true);
          }}
          className="buttonStyle"
        >
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
        <div
          onClick={() => {
            updatePrevMonth(false);
          }}
          className="buttonStyle"
        >
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
