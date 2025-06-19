"use server";

// import { headers } from "next/headers";

import { stripe } from "../../lib/stripe";

export async function fetchClientSecret(
  amount: number,
  mode: "payment" | "setup" | "subscription" = "payment"
): Promise<string> {
  // const origin = (await headers()).get("origin");

  // Use Payment Intents API for custom amounts
  if (mode === "payment") {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: "usd", // Change to your currency
      // Optionally, add metadata or description
      metadata: { purpose: "Donation" },
    });
    return paymentIntent.client_secret || "";
  }

  // For subscriptions or setup, you still need a price ID
  // You can map fixed amounts to price IDs as shown previously
  // Example:
  // const PRICE_IDS: Record<number, string> = { 25: "price_abc123", ... };
  // const priceId = PRICE_IDS[amount];
  // ...

  // Fallback: throw error for unsupported custom amount with subscription
  throw new Error("Custom amounts are only supported for one-time payments.");
}
