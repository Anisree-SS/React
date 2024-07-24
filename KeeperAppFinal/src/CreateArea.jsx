import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [inputData, setInputDate] = useState({
    title: "",
    content: "",
  });
  const [expanded, isExpanded] = useState(false);
  function expand() {
    isExpanded(true);
  }
  function CreateNotes(event) {
    const { name, value } = event.target;
    setInputDate((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }
  function prevent(event) {
    props.noteupdate(inputData);
    setInputDate({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {expanded ? (
          <input
            onChange={CreateNotes}
            name="title"
            placeholder="Title"
            value={inputData.title}
          />
        ) : (
          ""
        )}

        <textarea
          onChange={CreateNotes}
          name="content"
          placeholder="Take a note..."
          rows={expanded?3:1}
          value={inputData.content}
          onClick={expand}
        />
        <Zoom in={expanded}>
          <Fab onClick={prevent}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
