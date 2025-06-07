import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function MessageSent() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-mono flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Message Sent!</h1>

        <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
          Thank you for reaching out. I've received your message and will get back to you as soon as possible.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <Link href="/#contact" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-mono text-sm sm:text-base py-2">
              Send Another Message
            </Button>
          </Link>

          <Link href="/" className="block">
            <Button
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 font-mono text-sm sm:text-base py-2"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>

      <p className="text-gray-400 mt-6 sm:mt-8 text-xs sm:text-sm px-4 text-center">
        © 2024 Sande Effendi. Built with Next.js and Tailwind CSS.
      </p>
    </div>
  )
}
