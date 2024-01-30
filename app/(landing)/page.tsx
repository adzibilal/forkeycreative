import Image from "next/image";
import Hero from "./_components/Hero";
import CallToAction from "./_components/CallToAction";
import OurClients from "./_components/OurClients";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurClients />
      <CallToAction />
    </div>
  );
}
