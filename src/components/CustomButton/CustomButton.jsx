import React from "react";
import { Button } from "primereact/button";
function CustomButton(props) {
  const { loader, label, onClick, disabled } = props;
  return (
    <>
      <Button
        disabled
        className="w-40 block h-11 border-none bg-buttonGreen rounded-30px text-white text-xs 
        outline-none focus:bg-menuGreen active:bg-menuGreen disabled:bg-militaryGreen"
        onClick={onClick}
        {...props}
      ></Button>
    </>
  );
}

export default CustomButton;
