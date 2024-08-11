import Image from "next/image";
import { Button } from "@base";

export function Header() {
  return (
    <header className="container px-6 scaling-[padding-block,1,2.125,30,90] flex flex-row justify-between items-center gap-1">
      <div className="relative w-16 h-16 flex">
        <Image
          className="object-cover"
          src={"/assets/logo.svg"}
          alt="Logo"
          fill
        />
      </div>

      <Button>Free Consultation</Button>
    </header>
  );
}
