"use client";

import { loadStripe } from "@stripe/stripe-js";

import { Donations } from "@/lib/types";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./checkoutPage";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripePublishableKey) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}
const stripePromise = loadStripe(stripePublishableKey);

export default function Checkout({ amount }: Donations) {
  return (
    <div id="checkout">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: Math.round(amount * 100), // Convert to cents
          currency: "usd", // Change to your currency
        }}
      >
        <CheckoutPage amount={Math.round(amount * 100)} />
      </Elements>
    </div>
  );
}
