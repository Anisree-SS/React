import { useState } from "react";

function App() {
  const [ListItem, setListItem] = useState("");
  const [AddListItem, setAddListItem] = useState([]);
  function addItem(event) {
    const value = event.target.value;
    setListItem(value);
  }
  function UpdateList() {
    setAddListItem((prevItems)=>[...prevItems,ListItem]);
    setListItem('');
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            type="text"
            name="listItem"
            onChange={addItem}
            value={ListItem}
          />
          <button type="Submit" onClick={UpdateList}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {AddListItem.map((items) => <li>{items}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
