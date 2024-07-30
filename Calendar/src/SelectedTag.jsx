function SelectTag(props) {
  const addindex = props.len == 100 ? 1950 : 0;
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <>
      <select onChange={props.Selectfunction} name={props.names}>
        {addindex != 0
          ? Array.from({ length: props.len }).map((_, index) => (
              <option
                value={index + addindex}
                selected={index + addindex == props.years}
              >
                {index + addindex}
              </option>
            ))
          : months.map((mon, index) => (
              <option value={index} selected={index == props.years}>
                {mon}
              </option>
            ))}
      </select>
    </>
  );
}
export default SelectTag;
