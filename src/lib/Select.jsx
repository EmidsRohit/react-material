import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import "./Select.css";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const renderIcon = icon =>
  icon ? (
    <InputAdornment className="input-icon" position="end">
      <IconButton edge="end">{icon}</IconButton>
    </InputAdornment>
  ) : (
    ""
  );

const renderValue = value => (value ? value : "Select");

export default function InputText(props) {
  const { label, icon, value } = props;
  const [selectedValue, setValue] = useState(value);
  const onSelectChange = evt => {
    setValue(evt.target.value);
  };
  return (
    <FormControl variant="outlined">
      <FormHelperText>{label}</FormHelperText>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={renderValue(selectedValue)}
        onChange={onSelectChange}
        endAdornment={renderIcon(icon)}
        className={icon ? "withIcon" : ""}
      >
        <MenuItem value="Select" disabled>
          <em>Select</em>
        </MenuItem>
        <MenuItem value={10}>Option 1</MenuItem>
        <MenuItem value={20}>Option 2</MenuItem>
        <MenuItem value={30}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}
InputText.defaultProps = {
  label: "Input Value",
  multiline: false,
  value: "Select"
};
