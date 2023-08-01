import React from "react";

function CardCustom(props) {
  return (
    <div className="w-full bg-white flex flex-col rounded-3xl sm:rounded-4xl lg:rounded-20px shadow-card justify-center items-center px-8 py-8 sm:px-15 sm:py-15 lg:px-28 lg:py-10 ">
      {props.children}
    </div>
  );
}

export default CardCustom;
