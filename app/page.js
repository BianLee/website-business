import Image from "next/image";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Logos from "@/components/logos";
import Footer from "@/components/footer";
import Banners from "@/components/banners";

import Samples from "@/components/samples";
import Communications from "@/components/communications";

export default function Page() {
  return (
    <>
      <Header />
      <Pricing />

      <Samples />
      <Logos />
      <Banners />
      <Communications />
      <FAQ />

      <Footer />

      <br />
      <br />
      <br />
    </>
  );
}
