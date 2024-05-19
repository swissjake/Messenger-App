"use client";
import React, { FC } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({
  type,
  children,
  fullWidth,
  secondary,
  danger,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        "flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ",
        rest.disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          " bg-red-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !danger &&
          !secondary &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
