import { useState } from "react";
function InputItem(props){
    const [ListItems, setListItem] = useState("");
    function addItem(event) {
        const value = event.target.value;
        setListItem(value);
    }
    return(
        <>
        <div className="form">
          <input
              type="text"
              name="listItem"
              onChange={addItem}
              value={ListItems}
          />
          <button type="Submit" onClick={()=>
                {props.onAddItem(ListItems);
                setListItem('');}
          }>
            <span>Add</span>
          </button>
        </div>
        </>
    )
}

export default InputItem;