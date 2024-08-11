import { cn } from "@/utils/helpers";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={cn(
        "btn-text text-light-cream rounded-full scaling-[padding-block,0.5,0.875,30,90] scaling-[padding-inline,1.6875,2.8125,30,90]",
        { "bg-black hover:bg-galactic-blue": variant === "primary" },
        { "bg-light-red hover:bg-yellow": variant === "secondary" },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
