
"use client"

const Button = ({ onClick, label, bgColor, textColor }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-${bgColor} text-${textColor} p-5 rounded-md`}
    >
      {label}
    </button>
  );
};

export default Button;
