import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white transition duration-200 hover:scale-105 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
