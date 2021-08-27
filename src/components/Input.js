import React from "react";

export const Input = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.labelTitle}</label>
      <input type={props.type} placeholder={props.title} name={props.name} />
    </>
  );
};

export const Checkbox = (props) => {
  return (
    <div className="flex wrapper">
      <div className="flex">
        <input type={props.type} name={props.name} id="" />
        <label htmlFor={props.name}>
          {props.labelTitle}
        </label>
      </div>
      <p>
        <a href="#">Forgot your password?</a>
      </p>
    </div>
  );
};
