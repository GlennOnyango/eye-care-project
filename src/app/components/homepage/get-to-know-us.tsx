import OurChallenge from "./challenge";

export default function GetToKnowUsSection() {
  return (
    <>
      <div className="flex flex-col items-center pt-4 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-start mb-4 text-r-orange">
          Get to Know Us
        </h1>

        <p className="text-center text-black max-w-3xl px-4 sm:mb-8">
          At Project I, we are committed to enhancing access to quality eye care
          for underprivileged individuals in rural Nyanza. Many residents in
          Siaya County face financial and logistical barriers to accessing eye
          checkups and obtaining eyeglasses. We aim to bridge this gap by
          distributing donated eyewear, promoting awareness about visual health,
          and conducting free eye screenings.
        </p>
      </div>

      <OurChallenge />
    </>
  );
}
