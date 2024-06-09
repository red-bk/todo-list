import React from "react";
import { ButtonProps } from "./model/model";

function Button({ type, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="p-1 bg-sky-200 dark:bg-[#615EFC] dark:text-white flex justify-center items-center transition hover:text-white hover:bg-sky-500 hover:scale-125 text-blue-500"
      onClick={onClick}
    >
      {type === "done" ? (
        <span className="font-bold">Completed</span>
      ) : type === "edit" ? (
        <span className="font-bold">edit</span>
      ) : (
        <span className="font-bold">deleted</span>
      )}
    </button>
  );
}

export default Button;
