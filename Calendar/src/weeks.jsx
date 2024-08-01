function Weeks() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      {days.map((day, index) => (
        <div key={index} className="gap">
          <p>{day}</p>
        </div>
      ))}
    </>
  );
}
export default Weeks;
