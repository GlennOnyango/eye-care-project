"use client";

import Image from "next/image";

const OurChallenge = () => {
  return (
    <section className="relative pb-32 ">
      <h2 className="text-3xl font-semibold text-orange-600 mb-16 pl-16">
        Our Challenge
      </h2>

      <div className="w-[30%] py-6 flex flex-col items-end relative">
        <div className="absolute top-0 left-0 w-[50%] h-[70%] bg-[#143A2233]  z-10 opacity-50"></div>
        <div className="w-[90%] sm:h-[80%] z-20">
          <Image
            src="/images/challenge/challenge1.jpg"
            alt="Our Challenge"
            className="w-full sm:h-[80%] "
            width={600}
            height={400}
            priority
          />

          <h5 className="text-2xl font-semibold text-orange-600 mt-8">
            Lack ofAwareness
          </h5>
          <p className="text-gray-700 mt-4">
            There is limited understanding of eye health and the importance of
            regular screenings, leading to preventable vision impairments.
          </p>
        </div>
      </div>

      <ChallengeComponent
        title={"Limited Access to Eye Care Services"}
        description={
          "Many people in rural Nyanza lack access to optical clinics, requiring long and costly travel to receive treatment."
        }
        imageSrc={"/images/challenge/challenge2.jpg"}
        imgclasses="w-[40%]"
        classes="absolute top-0 left-[60%] sm:left-[28%] z-30 w-[70%]"
      />
      <ChallengeComponent
        title={"Financial Barriers"}
        description={
          "The cost of eyeglasses and checkups is beyond the reach of many, particularly those in poverty."
        }
        imageSrc={"/images/challenge/challenge3.jpg"}
        imgclasses="w-[60%]"
        classes="absolute top-[320] left-[60%] sm:left-[35%] z-40 w-[60%] h-[40vh]"
      />
    </section>
  );
};

const ChallengeComponent = ({
  title,
  description,
  imageSrc,
  imgclasses,
  classes,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imgclasses: string;
  classes: string;
}) => {
  return (
    <div className={`h-[40vh] flex flex-row gap-2 ${classes}`}>
      <Image
        src={imageSrc}
        alt="Our Challenge"
        className={`${imgclasses} sm:h-[100%]`}
        width={600}
        height={400}
        priority
      />

      <div>
        <h5 className="text-2xl font-semibold text-orange-600 mt-8">{title}</h5>
        <p className="text-gray-700 mt-4 max-w-[60%]">{description}</p>
      </div>
    </div>
  );
};

export default OurChallenge;
