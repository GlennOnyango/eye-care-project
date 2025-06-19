"use client";
import Checkout from "@/app/components/checkout";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Donations } from "@/lib/types";
import { DollarSign } from "lucide-react";
import { useState } from "react";

export function DialogCloseButton() {
  const [duration, setDuration] = useState<
    "payment" | "setup" | "subscription"
  >("payment");
  const durations: {
    label: string;
    value: "payment" | "setup" | "subscription";
  }[] = [
    { label: "One time", value: "payment" },
    { label: "Recurring", value: "subscription" },
    { label: "Custom", value: "setup" },
  ];
  const [amount, setAmount] = useState(25);
  const amounts = [25, 50, 100, 200];
  const [customAmount, setCustomAmount] = useState(false);

  const [donate, setDonate] = useState<Donations>({
    duration: "payment",
    amount: 25,
    customAmount: false,
    payout: false,
  });

  const handleDonate = () => {
    setDonate({
      duration,
      amount,
      customAmount,
      payout: true, // Assuming payout is not handled here
    });
    // Here you can add logic to handle the donation, like sending it to a server
    console.log("Donation details:", donate);
  };

  return (
    <DialogContent className="sm:max-w-1/2 bg-white overflow-auto">
      {donate.payout ? (
        <div id="checkout" className="overflow-auto">
          <Checkout
            amount={donate.amount}
            duration={donate.duration}
            customAmount={donate.customAmount}
            payout={donate.payout}
          />
        </div>
      ) : (
        <>
          <DialogHeader>
            <DialogTitle className="text-black hidden">
              Make donation
            </DialogTitle>
            <DialogDescription className="text-primary text-center font-semibold text-2xl">
              Make a Donation
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1">
            <div className="col-span-1 flex flex-col gap-2 mb-4 px-2">
              <h4 className="text-lg font-semibold text-primary mb-2">
                Select the donation frequency
              </h4>
              <div className="flex items-center gap-2 mb-2 mt-4">
                {durations.map((durationOption) => (
                  <button
                    key={durationOption.value}
                    onClick={() => setDuration(durationOption.value)}
                    className={`${
                      duration === durationOption.value
                        ? "bg-primary text-white"
                        : "bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    } rounded-none w-full py-2 px-2 text-md font-semibold`}
                  >
                    {durationOption.label}
                  </button>
                ))}
              </div>
              <p className="text-sm font-semibold text-primary text-center mb-4">
                Consider making a recurring amount to maximize your impact!
              </p>

              <h4 className="text-lg font-semibold text-primary mb-2">
                {customAmount
                  ? "Enter the donation Amount"
                  : " Select the donation Amount"}
              </h4>

              {customAmount ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="flex flex-row items-center justify-center gap-2 mt-4 border-2 border-primary rounded-none py-2 px-4 ">
                    <DollarSign size={24} className="text-primary grow-0" />
                    <input
                      type="text"
                      placeholder="Enter custom amount"
                      className="rounded-none grow text-lg text-black outline-none focus:ring-0 focus:border-transparent border-none shadow-none"
                      onChange={(e) => setAmount(Number(e.target.value))}
                      value={amount}
                      min={25}
                    />
                  </div>

                  <p
                    className="text-primary text-lg font-semibold cursor-pointer underline"
                    onClick={() => setCustomAmount(false)}
                  >
                    Select from amount options?
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 mt-4">
                  <div className="flex items-center justify-center gap-2 w-full">
                    {amounts.map((amountOption) => (
                      <button
                        key={amountOption}
                        onClick={() => setAmount(amountOption)}
                        className={`${
                          amount === amountOption
                            ? "bg-primary text-white"
                            : "bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        } rounded-none py-2 px-4 text-lg font-semibold w-full`}
                      >
                        ${amountOption}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <p
                      className=" text-primary text-lg font-semibold cursor-pointer underline"
                      onClick={() => setCustomAmount(true)}
                    >
                      Do you want to enter a custom amount?
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="col-span-1 flex flex-col px-2">
          <h4 className="text-lg font-semibold text-primary mb-2">
            Select a Payment Option
          </h4>
          <div className="flex flex-row items-center justify-center gap-4 mt-4">
            <button className="border border-primary rounded-none px-4 min-h-[5vh] w-full">
              <Image
                src="/images/payment/Paypal.png"
                alt="PayPal"
                width={50}
                height={50}
              />
            </button>
            <button className="border border-primary rounded-none px-4 min-h-[5vh] w-full">
              <Image
                src="/images/payment/gpay.png"
                alt="PayPal"
                width={50}
                height={50}
              />
            </button>

            <button className="border border-primary rounded-none px-4 min-h-[5vh] w-full">
              <Image
                src="/images/payment/stripe.png"
                alt="PayPal"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div> */}
          </div>

          <DialogFooter>
            <div className="flex items-center justify-center w-full">
              <button
                className="bg-primary text-white max-w-fit rounded-none py-2 px-8 text-lg font-semibold"
                onClick={handleDonate}
              >
                Donate Now
              </button>
            </div>
          </DialogFooter>
        </>
      )}
    </DialogContent>
  );
}
