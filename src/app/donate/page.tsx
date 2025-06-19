import Image from "next/image";
import { DialogCloseButton } from "./components/cash-donations";
import { Dialog } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

export default function Donate() {
  return (
    <Dialog>
      <div className="w-full p-6 flex flex-col items-start relative bg-white">
        <div className="absolute top-0 left-0 w-[10%] h-[70%] bg-primary  z-10 opacity-100"></div>
        <div className="w-[98%] sm:h-[80%] z-20 grid grid-cols-3 bg-[#F5F5F5] rounded-md shadow-lg">
          <div className="flex flex-col justify-center items-start gap-4 col-span-3 sm:col-span-1 p-8">
            <h5 className="text-2xl font-bold text-r-orange mb-16">
              October is wild sight day
            </h5>

            <h1 className="text-4xl font-semibold text-black mb-16">
              Donate and help hundreds see
            </h1>
            <p className="text-gray-700 mb-8">
              At Project I, we are committed to enhancing access to quality eye
              care for underprivileged individuals in rural Nyanza. Many
              residents in Siaya County face financial and logistical barriers
              to accessing eye checkups and obtaining eyeglasses. We aim to
              bridge this gap by distributing donated eyewear, promoting
              awareness about visual health, and conducting free eye screenings.
            </p>

            <h5 className="text-2xl font-semibold text-black mb-4">
              Donating options
            </h5>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white rounded-lg min-w-[200px] py-4 px-8 text-lg font-semibold">
                Frame
              </button>
              <DialogTrigger asChild>
                <button className="bg-white text-primary border border-primary hover:border-r-orange rounded-lg min-w-[200px] py-4 px-8 text-lg font-semibold">
                  Cash
                </button>
              </DialogTrigger>
            </div>
          </div>
          <div className="hidden sm:block col-span-1 sm:col-span-2 bg-primary">
            <Image
              src="/images/challenge/challenge1.jpg"
              alt="Our Challenge"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>

      <DialogCloseButton />
    </Dialog>
  );
}
