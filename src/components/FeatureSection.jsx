import FeatureCard from "./FeatureCard";
import fashion1 from "../assets/explore.jpg";
import fashion2 from "../assets/branded.jpg";
import fashion3 from "../assets/office-totes.png";

function FeatureSection() {
  return (
    <section className="hidden md:flex mx-auto mt-14 flex gap-4 px-10">
      <FeatureCard
        wide
        image={fashion1}
        title="Explore the totebag fashion"
        text="Totes are reliable carriage that adds to the details of your dress fashion with contradicting your fashion sense."
        buttonText="Shop now"
      />
      <FeatureCard
        image={fashion2}
        title="Branded Collections"
        text="Customize your style and brands here on thetotebagshop."
      />
      <FeatureCard
        image={fashion3}
        title="Totes as Office wears."
        text="Totes can be worn to workspaces and to the office likewise."
      />
    </section>
  );
}

export default FeatureSection;