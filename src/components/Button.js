import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={
          props.formBtn
            ? {
                backgroundColor: "#92400e",
                color: "#ffffff",
                padding: "12px 0px",
                border: "none",
                margin: "15px 0px 0px",
              }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
        type="button"
      >
        <i>{props.icon}</i>
        {props.title}
      </button>
    </>
  );
};

export default Button;
