"use client";

import { useId } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { cn } from "@helpers/styles";

import { Button } from "@base";
import { Icons } from "@shared";

import "swiper/css";
import "swiper/css/navigation";

export function Gallery() {
  const id = useId();
  return (
    <div className="container px-4 flex flex-col scaling-[gap,2,3.5,30,90] scaling-[padding-block,2.75,3.125,90,30]">
      <h1 className="heading-sm-text text-black">My Work</h1>

      <div className="w-full">
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={{
            nextEl: `#swiper-next-${id.replace(/:/g, "\\:")}`,
            prevEl: `#swiper-prev-${id.replace(/:/g, "\\:")}`,
          }}
        >
          {[1, 2, 3, 4, 5].map((slideNo, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                "!w-[540px] !h-[360px] sm:!w-[270px] sm:!h-[180px] rounded-[10px] overflow-hidden"
              )}
            >
              <div className="flex relative w-full h-full">
                <Image
                  className="object-cover"
                  src={`/assets/image-slide-${slideNo}.jpg`}
                  fill
                  alt="Designs"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-row justify-center gap-4 rounded-full w-full">
        <Button id={`swiper-prev-${id}`} className="aspect-square">
          <Icons icon="arrow-left" />
        </Button>

        <Button id={`swiper-next-${id}`} className="aspect-square">
          <Icons icon="arrow-right" />
        </Button>
      </div>
    </div>
  );
}
