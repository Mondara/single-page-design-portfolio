import { Button } from "@base";

export function BannerCard() {
  return (
    <div
      className="w-full px-4 
		scaling-[padding-bottom,1.25,1.75,30,90]
		scaling-[padding-top,2.75,3.125,90,30]"
    >
      <article
        className="container rounded-[10px] bg-black text-light-cream flex flex-row gap-6 justify-between md:flex-col md:text-center md:items-center
		scaling-[padding-block,3.0625,5,30,90]
		scaling-[padding-inline,1.5,4.0625,30,90]"
      >
        <div className="flex flex-col gap-6 max-w-[540px]">
          <h2 className="heading-md-text">Book a call with me</h2>
          <p className="body-text">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>

        <Button variant="secondary" className="max-w-[240]">
          Free Consultation
        </Button>
      </article>
    </div>
  );
}
