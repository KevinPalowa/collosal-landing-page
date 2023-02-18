import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
type Props = {
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`py-[10px] px-[30px] bg-white/10 rounded-[3px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
