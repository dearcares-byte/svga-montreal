import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import MembershipPreview from "@/components/sections/MembershipPreview";
import Resources from "@/components/sections/Resources";
import News from "@/components/sections/News";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About preview />
      <Events limit={3} />
      <MembershipPreview />
      <Resources limit={3} />
      <News preview />
      <CTABanner
        label="Contact"
        title="Have Questions? We'd Love to Hear From You."
        description="Reach out to our team for information about events, membership, or how to get involved in the community."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
