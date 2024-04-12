import React from "react";

const TagItem = ({ tagDetails }) => {
  let { title } = tagDetails;
  return <button className="tag-btn">{title}</button>;
};

export default TagItem;
