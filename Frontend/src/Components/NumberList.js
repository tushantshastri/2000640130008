import React from "react";
import NumberItem from "./NumberItem";

const NumberList = ({ numbers }) => {
  if (!Array.isArray(numbers)) {
    return <div>no numbers to display</div>;
  }

  return (
    <div>
      <h2>Number List</h2>
      {numbers.map((number) => (
        <NumberItem key={number.id} number={number} />
      ))}
    </div>
  );
};

export default NumberList;
