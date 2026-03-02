import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | PlayaNext",
  description: "PlayaNext Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Terms of Use
          </h1>
          <div className="text-sm text-slate-400 mb-8">
            Last Updated: March 1, 2023
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed"></div>
        </div>
      </div>
    </div>
  );
}
