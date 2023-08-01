import React from "react";
import { InputText } from "primereact/inputtext";
import Label from "../Label/Label";
function Input(props) {
  const { label, placeholder, name, value } = props;
 
  return (
    <div className="w-full">
      <Label label={label} className="ml-4 mb-2.5" />
      <InputText
        placeholder={placeholder}
        name={name}
        value={value}
        className="w-10/12 h-10 border border-militaryGreen rounded-20px px-4 text-base text-black 
        outline-none hover:border-focusGreen hover:shadow-input 
        focus:border-focusGreen focus:border-1.5px"
        {...props}
      />
    </div>
  );
}

export default Input;
