"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "sent">("idle");

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/playanext_logo.png"
              alt="PlayaNext Logo"
              width={220}
              height={48}
              className="h-10 w-auto sm:h-12 object-contain"
              sizes="(max-width: 640px) 140px, 220px"
              priority
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#platforms"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Platforms
            </a>
            <a
              href="#approach"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Approach
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>
            <a
              href="https://playayield.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
              Visit PlayaYield
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#platforms"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">
                Platforms
              </a>
              <a
                href="#approach"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">
                Approach
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white transition-colors text-sm font-medium py-2">
                Contact
              </a>
              <a
                href="https://playayield.com"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-5 py-3 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
                Visit PlayaYield
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs sm:text-sm font-medium">
                  Global distribution + monetization
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Distribution. Monetization.{" "}
                <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Scale.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
                We help software and Chrome Extension developers acquire users
                and increase revenues globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all text-sm sm:text-base text-center">
                  Partner With Us
                </a>
                <a
                  href="#platforms"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all border border-slate-700 text-sm sm:text-base inline-block text-center">
                  Explore Platforms
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                    Global
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    Distribution reach
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                    Performance
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    Aligned incentives
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                    Compliant
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    Built for sustainability
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                    Scalable
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">
                    Multi-platform growth
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="text-sm text-emerald-300 font-semibold">
                      Built for long-term publisher partnerships
                    </div>
                    <div className="text-lg sm:text-xl text-white font-bold mt-1">
                      What we provide
                    </div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500/20 to-cyan-500/20 border border-slate-800 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="space-y-3 text-sm sm:text-base text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>In-product revenue integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Installation-based monetization opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Performance-driven user acquisition</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Global distribution partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>Transparent reporting and aligned incentives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm sm:text-base text-white font-semibold">
                  Performance-driven
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  We grow when our developer partners grow.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm sm:text-base text-white font-semibold">
                  Compliant by design
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  Built with platform policies and long-term sustainability.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm sm:text-base text-white font-semibold">
                  Global reach
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  North America, EMEA, APAC, and Latin America.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Our Platforms
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Distribution and monetization infrastructure designed for
              long-term developer growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all group">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M6 10h12M6 14h9M6 18h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Software Distribution & Monetization
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">
                PlayaNext enables desktop software publishers to scale user
                acquisition and generate incremental revenue through offers of
                complementary software products.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>In-product revenue integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Global distribution partnerships</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Installation-based monetization</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Aligned incentives</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Performance-driven user acquisition</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Transparent reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all group">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L6 21h12l-3.75-4M3 13h18M5 3h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between gap-4 mb-2 sm:mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Chrome Extension Monetization
                </h3>
                <a
                  href="https://playayield.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-cyan-300 hover:text-white transition-colors font-medium">
                  Visit PlayaYield.com →
                </a>
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">
                For Chrome Extension developers, PlayaNext offers a dedicated
                monetization platform for integrating ads into your extension:
                PlayaYield. Built for Manifest V3 environments with a compliant,
                high-performance advertising architecture.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Chrome policy–compliant architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>No extra permissions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Lightweight and secure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Simple and quick to implement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Brand and performance demand</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Transparent revenue share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Our Approach
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Performance-Driven
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Our incentives are aligned with our partners. We grow when our
                developers grow.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Compliant by Design
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Integrations are built with platform policies and long-term
                sustainability in mind.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Global Reach
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                We operate across North America, EMEA, APAC, and Latin America.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                Scalable Growth
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Distribution expertise, demand relationships, and technical
                integration capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                About PlayaNext
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
                PlayaNext is a global software distribution and monetization
                platform serving desktop application publishers and browser
                extension developers.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                We partner with developers to build scalable user acquisition
                channels and unlock recurring revenue opportunities across
                global markets. Our approach is performance-driven,
                compliance-focused, and built for long-term growth.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
                <p>
                  The company combines experience across digital platforms,
                  global partnerships, and performance-based monetization models
                  to deliver sustainable outcomes for developers.
                </p>
                <p>
                  PlayaNext operates across North America, EMEA, APAC, and Latin
                  America, supporting partners seeking to expand internationally
                  while maintaining platform integrity and user experience
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Meet our Founder
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-cyan-500/20 blur-3xl" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-slate-800">
                    <Image
                      src="/Ian_image.jpg"
                      alt="Ian Weingarten"
                      fill
                      sizes="(max-width: 640px) 192px, 240px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                Ian Weingarten
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
                PlayaNext was founded by Ian Weingarten, former SVP, Corporate
                Development & Partnerships at Yahoo and CEO of System1.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                Prior to Yahoo, Ian built his career in finance and private
                equity at Goldman Sachs, Apollo Management, and The Gores Group.
                He graduated summa cum laude from The Wharton School at the
                University of Pennsylvania as a Joseph Wharton Scholar and
                Benjamin Franklin Scholar.
              </p>
              <a
                href="https://www.linkedin.com/in/ianweingarten"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium">
                View on LinkedIn
                <span className="text-slate-500">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-cyan-500/5 blur-3xl" />
            <div className="relative">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Reach out
                </h2>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
                  If you’re interested in working with us, send a note below and
                  we’ll follow up.
                </p>
              </div>

              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name");
                  const company = formData.get("company");
                  const message = formData.get("message");

                  const subject = `Contact from ${name}${company ? ` (${company})` : ""}`;
                  const body = `${message}\n\n---\nName: ${name}\nCompany: ${company || "N/A"}`;

                  window.location.href = `mailto:contact@playanext.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  setContactStatus("sent");
                }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Company (optional)
                    </label>
                    <input
                      name="company"
                      className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="Tell us about your product and what you're looking to achieve..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all text-sm sm:text-base cursor-pointer">
                    Open Email Client
                  </button>

                  <a
                    href="https://www.linkedin.com/in/ianweingarten"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-300 hover:text-white transition-colors font-medium">
                    Founder LinkedIn
                  </a>
                </div>

                {contactStatus === "sent" && (
                  <div className="text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 mt-2">
                    Email client opened. If nothing happened, you can email us
                    directly at{" "}
                    <a
                      href="mailto:contact@playanext.com"
                      className="underline hover:text-emerald-200">
                      contact@playanext.com
                    </a>
                    .
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/playanext_icon.png"
                  alt="PlayaNext Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold text-white">PlayaNext</span>
              </div>
              <p className="text-slate-400 text-sm">
                Global distribution and monetization for software and extension
                developers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="#platforms"
                    className="hover:text-white transition-colors">
                    Software Distribution
                  </a>
                </li>
                <li>
                  <a
                    href="https://playayield.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors">
                    PlayaYield
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#approach"
                    className="hover:text-white transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {year} PlayaNext LLC. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ianweingarten"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23.5H.5V8.5zM8.5 8.5H12.3V10.6H12.35C12.88 9.6 14.18 8.5 16.11 8.5 20.12 8.5 20.86 11.14 20.86 14.57V23.5H16.86V15.67C16.86 13.79 16.82 11.37 14.25 11.37 11.64 11.37 11.25 13.39 11.25 15.54V23.5H7.25V8.5H8.5z" />
                </svg>
              </a>
              <a
                href="https://playayield.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="PlayaYield">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2l9 4.5v11L12 22 3 17.5v-11L12 2zm0 2.2L5 7v9.6l7 3.5 7-3.5V7l-7-2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
