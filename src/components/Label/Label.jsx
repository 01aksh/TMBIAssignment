import React from "react";

function Label(props) {
  const { label, className } = props;
  return (
    <label className={`text-xs font-normal text-inputLabel ${className} `}>
      {label}
    </label>
  );
}

export default Label;
