import { Card } from "@compontents/shared/Card";

export function FeatureCards() {
  return (
    <div className="container px-4 scaling-[padding-block,1,3,30,90] grid grid-cols-6 grid-rows-2 gap-6 md:grid-cols-4 sm:grid-cols-2 ">
      <Card
        className="col-span-2 row-span-2 h-[364px] bg-galactic-blue"
        title="Graphic Design"
        image="pattern-graphic-design"
      />
      <Card className="bg-yellow" title="UI/UX" image="pattern-ui-ux" />
      <Card className="bg-light-pink" title="Apps" image="pattern-apps" />
      <Card
        className="col-span-2 bg-light-red"
        title="Illustrations"
        image="pattern-illustration"
      />
      <Card
        className="col-span-2 row-span-1 md:row-start-3 sm:row-start-[unset] bg-cyan"
        title="Photography"
        image="pattern-photography"
      />
      <Card
        className="col-span-2 md:row-start-3 sm:row-start-[unset] bg-dark-purple"
        title="Motion Graphics"
        image="pattern-motion-graphics"
      />
    </div>
  );
}
