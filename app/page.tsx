import Card_1 from "@/components/Card_1";
import Card_2 from "@/components/Card_2";
import Card_3 from "@/components/Card_3";
import Card_4 from "@/components/Card_4";
import Card_5 from "@/components/Card_5";
import Card_6 from "@/components/Card_6";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero_1";
import Hero_2 from "@/components/Hero_2";
import Hero_3 from "@/components/Hero_3";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="text-text-primary flex flex-col justify-center items-center overflow-y-hidden">
      <div className="flex-col items-center w-full max-w-[2560px] relative">
        <Navbar />
        <Hero />
        <Hero_2 />
        <Hero_3 />
        <div className="grid md:grid-rows-3 md:grid-cols-2 grid-rows-1 grid-cols-1 gap-[10px] md:px-[10px] py-[10px]">
          <Card_1 />
          <Card_2 />
          <Card_3 />
          <Card_4 />
          <Card_5 />
          <Card_6 />
        </div>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
