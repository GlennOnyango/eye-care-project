import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <CheckCircle className="w-24 h-24 text-primary mb-6" />
      <h1 className="text-3xl font-bold text-primary mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Thank you for your generous donation. Your support helps us continue our mission to improve eye care and change lives. A confirmation email has been sent to you.
      </p>
      <Link href="/" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-primary/90 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
