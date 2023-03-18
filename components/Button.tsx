import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classnames from "classnames";
type Props = {
  size?: "sm" | "normal";
  radius?: "rounded" | "pill";
  color?: "primary" | "white";
  style?: "solid" | "light" | "outline";
} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "style"
>;
function Button({
  children,
  className,
  size = "normal",
  radius = "rounded",
  color = "primary",
  style = "solid",
  ...props
}: Props) {
  const baseStyle = "focus:outline-none focus:ring whitespace-nowrap";
  const variantClassName =
    radius === "rounded" ? "rounded-[3px]" : "rounded-full";

  const sizeClassname =
    size === "sm"
      ? "py-[10px] px-[30px] text-sm font-medium"
      : "py-[15px] px-[55px] text-base font-semibold";

  const styleClassname =
    style === "outline"
      ? `bg-transparent border-[1px] ${
          color === "primary"
            ? "border-primary text-primary hover:bg-primary"
            : "border-white text-white hover:bg-white hover:text-black"
        }`
      : style === "light"
      ? `${
          color === "white"
            ? "bg-white/10 hover:bg-white/20 active:bg-white/30 focus:ring-white/30 focus:bg-white/20"
            : "bg-primary/10 hover:bg-primary/20 active:bg-primary/30 focus:ring-primary/30 focus:bg-primary/20"
        }  text-white  `
      : `${
          color === "primary"
            ? "bg-primary text-white hover:bg-primary/60 active:bg-primary/50 focus:ring-primary/50 focus:bg-primary/60"
            : "bg-white text-black text-black hover:bg-white/90 active:bg-white/80 focus:ring-white/80 focus:bg-white/90"
        } `;

  const buttonClassname = classnames(
    baseStyle,
    /* colorClassname, */
    sizeClassname,
    variantClassName,
    styleClassname,
    className
  );
  return (
    <button className={buttonClassname} {...props}>
      {children}
    </button>
  );
}

export default Button;
