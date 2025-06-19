export type Donations = {
  duration: "payment" | "setup" | "subscription";
  amount: number;
  customAmount: boolean;
  payout: boolean;
};
