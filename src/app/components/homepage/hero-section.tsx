import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-[60vh] px-32 hero-section ">
      <Image
        src="/images/hero-section/Hero.png"
        alt="Hero Image"
        fill
        className="w-full h-[300px] sm:h-[inherit] object-cover absolute top-0 left-0"
        priority
      />
      <div className="w-full min-h-[inherit] flex flex-col gap-y-12 items-start justify-center py-8 z-10 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-start mb-4">
          Empowering Lives Through Clear <br /> Vision – Eyeglasses & Eye Care
          for Underprivileged Communities
        </h1>

        <button className=" bg-secondary text-black flex flex-row justify-center gap-2 px-6 py-3 min-w-[15vw] rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Learn More
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
}
