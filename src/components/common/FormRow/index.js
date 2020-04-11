import React from "react";

function renderSingleRow(child, totalWidth) {
  if (!totalWidth || totalWidth === 1) {
    return <div className={`w-full`}>{child}</div>;
  } else {
    return (
      <div
        className={`w-full md:w-${
          child.props.width ? child.props.width : 1
        }/${totalWidth}`}
      >
        {child}
      </div>
    );
  }
}
function renderRows(children, numberOfItems) {
  return children.map((child) => {
    return (
      <div
        className={`w-full md:w-${
          child.props.width ? child.props.width : 1
        }/${numberOfItems}`}
      >
        {child}
      </div>
    );
  });
}

function FormRow({ children, bordered, totalWidth }) {
  let numberOfItems = 1;
  if (Array.isArray(children)) {
    numberOfItems = 0;
    children.forEach((child) => {
      numberOfItems =
        numberOfItems + (child.props.width ? child.props.width : 1);
    });
  }
  return (
    <div
      className={`flex flex-col md:flex-row ${
        bordered && "border-solid border"
      } mb-4`}
      style={bordered && { borderColor: "#edf2f7" }}
    >
      {numberOfItems === 1
        ? renderSingleRow(children, totalWidth)
        : renderRows(children, totalWidth ? totalWidth : numberOfItems)}
    </div>
  );
}

export default FormRow;
