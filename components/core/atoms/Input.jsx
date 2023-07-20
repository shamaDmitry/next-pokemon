import React from 'react';

const Input = ({ className, type = "text" }) => {
  return (
    <input
      type={type}
      className={`${className} p-4 border rounded-lg bg-transparent appearance-none`}
    />
  );
}

export default Input;
