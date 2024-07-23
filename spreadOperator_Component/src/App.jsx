import { useState } from "react";
import ListItem from "./listLI";
import InputItem from "./inputitems";
function App() {
  const [AddListItem, setAddListItem] = useState([]);
  function UpdateList(ListItems) {
    setAddListItem((prevItems)=>[...prevItems,ListItems]);
  }
  function deleteItems(id){
    setAddListItem((prevItems)=>
      prevItems.filter((item,index)=> 
        index!==id))
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputItem onAddItem={UpdateList}/>
        <div>
          <ul>
            {AddListItem.map((items,index) => 
            <ListItem
              id={index}
              item={items} 
              onChecked={deleteItems}
            />)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
