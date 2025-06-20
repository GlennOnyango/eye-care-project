"use client";
import Checkout from "@/app/components/checkout";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Donations } from "@/lib/types";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export function DialogCloseButton() {
  const [amount, setAmount] = useState(25);
  const amounts = [25, 50, 100, 200];
  const [customAmount, setCustomAmount] = useState(false);

  const [donate, setDonate] = useState<Donations>({
    amount: 25,
    customAmount: false,
    payout: false,
  });

  useEffect(() => {
    // Initialize the donation state with default values
    setDonate({
      amount: 25,
      customAmount: false,
      payout: false,
    });
  }, []);

  const handleDonate = () => {
    setDonate({
      amount,
      customAmount,
      payout: true, // Assuming payout is not handled here
    });
    // Here you can add logic to handle the donation, like sending it to a server
    console.log("Donation details:", donate);
  };

  return (
    <DialogContent className="sm:max-w-1/2 max-h-[70vh] bg-white overflow-auto">
      {donate.payout ? (
        <>
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-semibold text-2xl">
              Payout
            </DialogTitle>
          </DialogHeader>

          <div id="checkout">
            <Checkout
              amount={donate.amount}
              customAmount={donate.customAmount}
              payout={donate.payout}
            />
          </div>
        </>
      ) : (
        <>
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-semibold text-2xl">
              Make donation
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1">
            <div className="col-span-1 flex flex-col gap-2 mb-4 px-2">
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
