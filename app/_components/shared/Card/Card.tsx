import { cn } from "@helpers/styles";
import { Icons, FeatureCardImageTypes } from "../Icons";

interface Props {
  image: FeatureCardImageTypes;
  title: string;
  className?: string;
}

export function Card({ image, title, className }: Props) {
  return (
    <div
      className={cn(
        "w-full h-full p-6 rounded-lg flex flex-col items-end justify-between",
        className
      )}
    >
      <div className="flex ">
        <Icons icon={image} />
      </div>

      <h2 className="heading-xsm-text text-white self-start">{title}</h2>
    </div>
  );
}
