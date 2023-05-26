import Image from "next/image";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Logos from "@/components/logos";
import About from "@/components/about";
import Communications from "@/components/communications";

export default function Page() {
  return (
    <>
      <Header />
      <Pricing />
      <Logos />
      <Communications />
      <FAQ />
      <About />

      <br />
      <br />
      <br />
    </>
  );
}
