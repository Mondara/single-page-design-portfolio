import Image from "next/image";
import { Button } from "@base";

export function Footer() {
  return (
    <footer className="container px-6 scaling-[padding-top,1.25,1.75,30,90] scaling-[padding-bottom,2,4,30,90] flex flex-row justify-between items-center gap-1">
      <div className="relative w-16 h-16 flex">
        <Image
          className="object-cover"
          src={"/assets/logo.svg"}
          alt="Logo"
          fill
        />
      </div>

      <Button>Free Consultation</Button>
    </footer>
  );
}
