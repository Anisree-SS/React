function Weeks() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      {days.map((day, index) => (
        <div key={index} className="gap">
          {day}
        </div>
      ))}
    </>
  );
}
export default Weeks;