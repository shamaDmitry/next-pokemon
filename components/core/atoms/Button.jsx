"use client"

import classNames from "classnames";

const Button = ({ icon, onClick }) => {
  return (
    <button
      className={classNames(`p-3 rounded-lg bg-gray-700 text-white hover:bg-gray-900`)}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default Button;
