import Image from "next/image";
import Hero from "./_components/Hero";
import CallToAction from "./_components/CallToAction";
import OurClients from "./_components/OurClients";
import KeyValue from "./_components/KeyValue";
import OurProduct from "./_components/OurProduct";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <KeyValue />
      <OurProduct />
      <OurClients />
      <CallToAction />
    </div>
  );
}
