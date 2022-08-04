import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth(props) {
  const [cup, setCup] = React.useState("");

  const handleChange = (event) => {
    setCup(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Cup</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={cup}
          onChange={handleChange}
          fullWidth
          label="Tea">
          <MenuItem value={10}>{props.item1}</MenuItem>
          <MenuItem value={21}>{props.item2}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
