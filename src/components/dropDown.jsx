import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({ onChange, value, item1, item2 }) {
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Cup</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={onChange}
          fullWidth
          label="Tea">
          <MenuItem value={item1 || ''}>{item1}</MenuItem>
          <MenuItem value={item2 || ''}>{item2}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
