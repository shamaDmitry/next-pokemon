"use client"

const Input = ({ className, type = "text", value, onChange }) => {
  return (
    <input
      type={type}
      min={type === "number" ? 1 : null}
      value={value}
      onChange={onChange}
      className={`${className} py-2 px-4 bg-white border rounded-lg bg-transparent appearance-none`}
    />
  );
}

export default Input;
