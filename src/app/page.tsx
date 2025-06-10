import Image from "next/image";
import GetToKnowUsSection from "./components/homepage/get-to-know-us";
import HeroSection from "./components/homepage/hero-section";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col w-full min-h-screen bg-white">
        <GetToKnowUsSection />

        <section className="relative flex w-full my-16 sm:py-32">
          <div className="w-[80%] border-2 border-r-orange ml-16 py-16 px-8 min-h-[90vh]">
            <h2 className="text-3xl font-bold mb-6 text-r-orange">
              Featured Research
            </h2>
            <div className="flex flex-row">
              <div className="min-w-[40%] flex flex-col">
                <h3 className="text-2xl text-black font-semibold mb-4">
                  Health is Life
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold border border-[#143A22] border-b-4 border-b-r-orange text-center py-4"
                >
                  Learn more about our research
                </a>
              </div>

              <div className="hidden sm:block min-w-[70%] h-[300px] ml-8">
                <Image
                  src="/images/featured-research/research.jpg"
                  alt="Research Image"
                  width={800}
                  height={300}
                  className="w-full h-full object-cover shadow-lg"
                  style={{ width: "100%", height: "100%" }}
                  priority
                />
              </div>
            </div>
          </div>

            <div className="hidden sm:block sm:absolute bg-primary right-0 bottom-0 w-[50%] p-8">
            <h6 className="text-white text-xl">Article</h6>
            <h4 className="text-white text-2xl font-semibold mt-8">
              Improving Health for Siaya Residents, One Day at a Time
            </h4>
            <p className="text-white mb-12 mt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <Link
              href="#"
              className="text-primary bg-secondary text-center py-4 px-6 min-w-[500px] font-semibold"
            >
              Read article here
            </Link>
            </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full py-16">
          <h4 className="text-3xl font-semibold text-orange-600 mb-8">
            <span className="text-black">Why</span> Project I
          </h4>
          <div className="flex flex-row overflow-x-auto max-w-full pl-16 py-4 scrollbar scrollbar-thin scrollbar-thumb-amber-600">
            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />

            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />

            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />

            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />

            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />

            <ProjectCard
              imageSrc="/images/why-project/reduced.jpg"
              alt="Why Project Image 2"
              title="Increased Awareness"
              desc="The project raises awareness about the importance of eye health and the need for regular screenings, leading to better community health outcomes."
            />
          </div>
        </section>

        <section className="flex flex-col sm:relative sm:pb-[400px]">
          <div className=" bg-primary w-full h-[300px] hidden  sm:flex flex-row items-center justify-between rounded-bl-[12rem] rounded-br-[12rem] px-16">
            <h2 className="text-3xl font-semibold text-white">
              GIVE TODAY AND HELP SOMEONE SEE CLEARLY
            </h2>
            <button className="bg-secondary text-primary rounded-lg min-w-[200px] py-4 px-8 text-lg font-semibold hover:bg-r-orange hover:text-white transition-colors duration-300">
              Donate
            </button>
          </div>

          <div className="flex flex-col items-center justify-center w-full sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0">
            <div className="grid grid-cols-2 bg-layout p-8 rounded-lg shadow-lg">
              <div className="col-span-2 flex flex-row items-center gap-4">
                <h3 className="text-primary">Contact Us</h3>
                <Image
                  src="/images/contact-us/contact-us.png"
                  alt="Contact Us"
                  width={50}
                  height={50}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
              <div className="col-span-2 mt-4 mb-8">
                <p className="text-gray-700">
                  Lorem ipsum dolor amet is a dummy text generated
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 col-span-2 sm:col-span-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-primary rounded-full py-4 px-3 mb-4 text-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-primary rounded-full py-4 px-3 mb-4 text-black"
                />
                <textarea
                  placeholder="Message"
                  className="border border-primary rounded-full pt-4 px-3 col-span-2 text-black"
                />
              </div>
              <div className="flex flex-col justify-start items-center col-span-2 sm:col-span-1 py-4 sm:py-0">
                <button className="bg-primary text-white rounded-full min-w-[200px] py-4 px-8 text-lg font-semibold ">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

const ProjectCard = ({
  imageSrc,
  alt,
  title,
  desc,
}: {
  imageSrc: string;
  alt: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col items-start mr-8 min-w-[400px] max-w-[400px] bg-secondary p-4 rounded-2xl">
      <Image
        src={imageSrc}
        alt={alt}
        width={400}
        height={300}
        className="w-[100px] h-[100px] object-cover rounded-full shadow-lg mb-4"
        priority
      />

      <h5 className="text-md font-semibold text-primary mt-4">{title}</h5>

      <p className="text-gray-700 mt-2">{desc}</p>
    </div>
  );
};
