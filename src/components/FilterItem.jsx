import React from "react";

const FilterItem = ({ filterDetails }) => {
  let { title } = filterDetails;
  return (
    <div className="select-tag tags">
      <span>{title}</span>
      <img src="./img/check-2.png" />
    </div>
  );
};

export default FilterItem;
