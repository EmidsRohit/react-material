import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import "./InputText.css";

const renderIcon = icon =>
  icon ? (
    <InputAdornment className="input-icon" position="end">
      <IconButton edge="end">{icon}</IconButton>
    </InputAdornment>
  ) : (
    ""
  );

export default function InputText(props) {
  const [inputValue, setInputValue] = useState("");
  const { label, multiinput, icon, type, autoFocus, autoComplete } = props;
  const handleInputChange = evt => {
    setInputValue(evt.target.value);
  };
  return (
    <FormControl variant="outlined">
      <FormHelperText>{label}</FormHelperText>
      <OutlinedInput
        type={type}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={multiinput ? "multi-input" : ""}
        id={label}
        endAdornment={renderIcon(icon)}
        value={inputValue}
        onChange={handleInputChange}
      />
    </FormControl>
  );
}
InputText.defaultProps = {
  label: "Input Value",
  multiline: false,
  type: "text",
  autoComplete: "off"
};
