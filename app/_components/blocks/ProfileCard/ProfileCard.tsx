import Image from "next/image";
import { Button } from "@base";

export function ProfileCard() {
  return (
    <div className="container px-4 scaling-[padding-top,5.25,5.5,30,90] scaling-[padding-bottom,2.75,3.125,90,30] flex flex-row justify-between scaling-[gap,2.5,7.8,30,90] md:flex-col">
      <div className="relative flex w-full shrink-[1] max-w-[445px] aspect-square rounded-full overflow-hidden">
        <Image
          src="/assets/image-amy.webp"
          alt="Amy Photo"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col shrink-[4] scaling-[gap,1.5,2.125,30,90] md:text-center md:items-center">
        <h2 className="heading-lg-text text-black">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="body-text text-medium-brown">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>

        <Button variant="secondary" className="max-w-[240px]">
          Feed Consultation
        </Button>
      </div>
    </div>
  );
}
