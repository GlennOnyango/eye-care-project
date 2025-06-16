"use client";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DollarSign } from "lucide-react";
import { useState } from "react";

export function DialogCloseButton() {
  const [duration, setDuration] = useState("one-time");
  const durations = [
    { label: "One time", value: "one-time" },
    { label: "Monthly", value: "monthly" },
    { label: "Quarterly", value: "quarterly" },
    { label: "Yearly", value: "yearly" },
  ];
  const [amount, setAmount] = useState(25);
  const amounts = [25, 50, 100, 200];
  const [customAmount, setCustomAmount] = useState(false);
  return (
    <DialogContent className="sm:max-w-1/2 bg-white">
      <DialogHeader>
        <DialogTitle className="text-black hidden">Make donation</DialogTitle>
        <DialogDescription className="text-primary text-center font-semibold text-2xl">
          Consider making a recurring amount to maximize your impact!
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center gap-2">
        {durations.map((durationOption) => (
          <button
            key={durationOption.value}
            onClick={() => setDuration(durationOption.value)}
            className={`${
              duration === durationOption.value
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
            } rounded-none w-full py-2 px-8 text-lg font-semibold`}
          >
            {durationOption.label}
          </button>
        ))}
      </div>

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
            className="text-primary text-sm cursor-pointer"
            onClick={() => setCustomAmount(false)}
          >
            Select from amount options?
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <div className="flex items-center justify-center gap-2">
            {amounts.map((amountOption) => (
              <button
                key={amountOption}
                onClick={() => setAmount(amountOption)}
                className={`${
                  amount === amountOption
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                } rounded-none py-2 px-8 text-lg font-semibold`}
              >
                ${amountOption}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-white text-primary rounded-none py-2 px-8 text-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300 border border-primary"
              onClick={() => setCustomAmount(true)}
            >
              I want to donate a custom amount
            </button>
          </div>
        </div>
      )}
      <DialogFooter>
        <div className="flex items-center justify-center w-full">
          <button className="bg-primary text-white max-w-fit rounded-none py-2 px-8 text-lg font-semibold">
            Donate Now
          </button>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
