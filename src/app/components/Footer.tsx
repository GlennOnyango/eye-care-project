import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center relative min-h-[50vh]">
      <Image
        src="/images/footer/footer.jpg"
        alt="Hero Image"
        fill
        className="w-full h-[inherit] object-cover absolute top-0 left-0 z-10"
        priority
      />
      <div className="w-full min-h-[inherit] px-16 grid grid-cols-3 gap-8 items-center footer justify-between p-8 z-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-start mb-4 col-span-3 sm:col-span-1 ">
          We are a non profit organization dedicated to improving eye care
          access in rural Nyanza, Kenya
        </h1>

        <div className="flex flex-col gap-y-4 flex-grow-1 bg-primary rounded-2xl p-8 col-span-3 sm:col-span-1">
          <h5 className="text-md font-semibold text-secondary mt-4">
            Subscribe to our Newsletter
          </h5>

          <p className=" mt-2 text-secondary">
            Lorem ipsum dolor amet, this is french, lorem ipsum dolor amet,
            lorem ipsum dolor amet lorem ipsum dolor amet
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="bg-white rounded-full py-4 px-3 mb-4 text-black"
          />

          <button className=" bg-secondary text-black flex flex-row justify-center gap-2 px-6 py-3 min-w-[15vw] rounded-full shadow-lg ">
            Submit
          </button>
        </div>

        <div className="grid grid-cols-4 col-span-3 sm:col-span-1">
          <p className="text-white col-span-4 mb-4">
            Follow us on social media
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary flex justify-center items-center w-[50px] h-[50px]"
          >
            F
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary flex justify-center items-center w-[50px] h-[50px]"
          >
            F
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary flex justify-center items-center w-[50px] h-[50px]"
          >
            F
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-primary flex justify-center items-center w-[50px] h-[50px]"
          >
            F
          </a>

          <a href="#" className="col-span-4 mt-12">
            Privacy Policy
          </a>
          <a href="#" className="col-span-4 my-4">
            Terms of Use
          </a>
          <a href="#" className="col-span-4 mb-12">
            Non profit certification
          </a>

          <p className="col-span-4">Copyright 2025 Project I</p>
          <p className="col-span-4 mt-4">All rights reserved</p>
        </div>

        <h2 className="col-span-3 text-white ">Project I</h2>
        <hr className="col-span-3 w-full border-gray-300 " />
      </div>
    </div>
  );
}
