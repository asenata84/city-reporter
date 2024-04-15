import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";

function SearchBox({ onSeach, onGo, onCreateNew }) {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    onSeach(value);
  };

  return (
    <div id="searchbox-with-buttons">
      <TextField
        id="filled-search"
        label="Search"
        type="search"
        variant="filled"
        fullWidth
        onChange={handleSearchChange}
      />
      <Button id="go-button" variant="contained" onClick={onGo}>
        GO
      </Button>
      <Button id="create-new-button" variant="contained" onClick={onCreateNew}>
        CREATE NEW
      </Button>
    </div>
  );
}

export default SearchBox;
