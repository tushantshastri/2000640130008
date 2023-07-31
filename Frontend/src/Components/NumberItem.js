// NumberItem.js
import React from "react";

const NumberItem = ({ number }) => {
  return (
    <div>
      <p>{number.value}</p>
    </div>
  );
};

export default NumberItem;
