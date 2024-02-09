import React from "react";

const Filters = ({ filterData, setTag }) => {
  function changeTag(title) {
    setTag(title);
  }
  return (
    <div>
      {filterData.map((tag) => (
        <button key={tag.id} onClick={() => changeTag(tag.title)}>
          {tag.title}
        </button>
      ))}
    </div>
  );
};

export default Filters;
