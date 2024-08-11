import cn from "clsx";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: ["500", "700"],
  style: ["normal"],
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin"],
  variable: "--font-base",
});

export const fonts = cn(jakarta.variable);
