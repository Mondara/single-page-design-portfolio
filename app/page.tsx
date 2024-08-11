import {
  FeatureCards,
  ProfileCard,
  Gallery,
  Header,
  Footer,
  Intro,
} from "@blocks";
import { BannerCard } from "@compontents/blocks/BannerCard/BannerCard";

export default function Home() {
  return (
    <main className="bg-light-cream w-full h-full">
      <Header />

      <Intro />

      <FeatureCards />

      <ProfileCard />

      <Gallery />

      <BannerCard />

      <Footer />
    </main>
  );
}
