import React from "react";
import TextField from "@mui/material/TextField";

function SearchBox({ onSeach }) {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    onSeach(value);
  };

  return (
    <TextField
      id="filled-search"
      label="Search"
      type="search"
      variant="filled"
      onChange={handleSearchChange}
    />
  );
}

export default SearchBox;
