import React from "react";
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const ButtonContainer = () => {
  return (
    <div className="button__container">
      <p>Sign in with</p>
      <div className="buttons__box">
        <Button title="Google" icon={<FcGoogle />} />
        <Button title="GitHub" icon={<FaGithub />} />
      </div>
    </div>
  );
};

export default ButtonContainer;
