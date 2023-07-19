import React from "react";
import classNames from "classnames";

type ButtonProps = React.ComponentProps<"button">;
type Props = {
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick: () => void;
} & ButtonProps;

const Button = ({
  children,
  variant = "primary",
  className,
  onClick,
  ...props
}: Props) => {
  const btnClass = classNames(
    "text-white text-sm py-2 px-4 rounded bg-primary",
    className,
    {
      "bg-secondary text-black": variant === "secondary",
    }
  );

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
