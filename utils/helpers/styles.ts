import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function linearScaling(x1: number, x2: number, y1: number, y2: number) {
  const m = (x2 - x1) / (y1 - y2);
  const c = -y1 * m + x1;

  return `p-[clamp(${x1}rem, ${c}rem + ${m * 100}vw, ${x2}rem)]`;
}
