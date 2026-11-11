"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", preferredTime: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF4EC] text-[#2B2522]">

      {/* ================= HEADER & NAVIGATION ================= */}
      <header className="sticky top-0 z-50 bg-[#FDF4EC]/95 backdrop-blur-md border-b border-[#EADFD5] px-4 sm:px-6 py-3 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <Image 
              src="/assets/wdl_logo.png" 
              alt="World Divine Light" 
              width={110} 
              height={40} 
              className="h-9 sm:h-10 w-auto object-contain shrink-0" 
              priority
            />
            <div className="border-l border-[#EADFD5] pl-3 flex flex-col justify-center">
              <span className="block font-serif font-bold text-sm sm:text-base text-[#810D41] group-hover:text-[#640932] leading-tight whitespace-nowrap transition-colors">
                Vancouver Spiritual Center
              </span>
              <span className="block text-[11px] text-[#524B47] font-medium tracking-wide whitespace-nowrap">
                World Divine Light (Canada)
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#524B47] whitespace-nowrap">
            <a href="#promises" className="hover:text-[#810D41] transition-colors">Promises</a>
            <a href="#heart" className="hover:text-[#810D41] transition-colors">Our Heart</a>
            <a href="#space" className="hover:text-[#810D41] transition-colors">Our Space</a>
            <a href="#expect" className="hover:text-[#810D41] transition-colors">What to Expect</a>
            <a href="#visit" className="hover:text-[#810D41] transition-colors">Before You Visit</a>
            <a href="#hosts" className="hover:text-[#810D41] transition-colors">Your Hosts</a>
            <a href="#faq" className="hover:text-[#810D41] transition-colors">FAQ</a>
          </nav>

          {/* Top CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="#booking" 
              className="btn-primary-pill inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white text-xs md:text-sm font-semibold whitespace-nowrap transition-all shadow-sm"
            >
              Reserve a Session
            </a>
          </div>

        </div>
      </header>

      {/* ================= 1. HERO (SOFT PEACH CREAM + ORGANIC MINT ACCENTS + LUMINOUS PHOTO) ================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FDF4EC]">
        
        {/* Subtle organic pastel mint shapes matching Mi&u atmosphere */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#67C3BA]/15 blur-2xl"></div>
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 w-[28rem] h-[28rem] rounded-full bg-[#67C3BA]/12 blur-2xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Editorial Copy & Plum Pill CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-block border border-[#810D41]/25 text-[#810D41] rounded-full px-4 py-1 text-xs uppercase tracking-wider font-semibold mb-6 bg-white/80">
              Federal Non-Profit Corporation in Canada
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1614] leading-[1.12] mb-6 relative">
              Experience the Power of{" "}
              <span className="relative inline-block">
                Spiritual Harmony.
                {/* Subtle hand-drawn radiance accent */}
                <svg aria-hidden="true" className="hidden sm:inline-block absolute -top-5 -right-7 w-7 h-7 text-[#67C3BA]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M10 14L6 6M16 11V3M22 14L27 7" />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#4A433E] leading-relaxed mb-8">
              From physical fatigue and daily stress to friction with loved ones, this gentle energy practice helps you unwind, reset, and reconnect with yourself.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center lg:justify-start justify-center gap-3.5 mb-5">
              <a 
                href="#booking" 
                className="btn-primary-pill w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-sm whitespace-nowrap transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Experience the Power of Divine Light
              </a>
              <a 
                href="tel:+16045682867" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#1A1614]/25 text-[#1A1614] hover:bg-[#1A1614]/5 font-semibold text-sm whitespace-nowrap transition-all bg-white/70"
              >
                Call +1 (604) 568-2867
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#524B47] italic">
              First visit is completely free. No obligation, no pressure.
            </p>
          </div>

          {/* Right: Crisp Framed Sanctuary Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <Image 
                src="/assets/hero.jpg" 
                alt="Warm sunlight shining through forest trees representing Spiritual Harmony" 
                fill 
                className="object-cover object-center" 
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= DARK SANCTUARY TRUST STRIP ================= */}
      <div className="bg-[#0A0A0A] text-[#F7F1EB] py-5 px-4 sm:px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-xs sm:text-sm font-medium tracking-wide">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            Burnaby · Vancouver, BC
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            100% Free to Attend
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            Open to All Faiths
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            Prior Reservation Required
          </span>
        </div>
      </div>

      {/* ================= 2. THREE PROMISES + QUOTE CALLOUT (CRISP WHITE CANVAS) ================= */}
      <section id="promises" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#1A1614] mb-14">
            Three promises
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
            
            {/* Promise 1 */}
            <div className="px-2">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-[#FDF4EC] border border-[#EADFD5]">
                <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.35-9.5-8.5C.5 9.1 2.4 5 6.2 5c2.1 0 3.9 1.1 5.8 3.2C13.9 6.1 15.7 5 17.8 5 21.6 5 23.5 9.1 21.5 12.5 19 16.65 12 21 12 21z" fill="#67C3BA" fillOpacity="0.35" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">Free to join</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                There is no required fee. As a non-profit organization, love donations are purely optional and welcome.
              </p>
            </div>

            {/* Promise 2 */}
            <div className="px-2">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-[#FDF4EC] border border-[#EADFD5]">
                <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-9" />
                  <path d="M12 13c-4 0-7-3-7-7 4 0 7 3 7 7z" fill="#67C3BA" fillOpacity="0.4" />
                  <path d="M12 10c4 0 7-3 7-7-4 0-7 3-7 7z" fill="#67C3BA" fillOpacity="0.25" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">No pressure</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                No sales pitch, and no pressure to change your beliefs. Open to everyone — no prior background or spiritual experience needed.
              </p>
            </div>

            {/* Promise 3 */}
            <div className="px-2">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-[#FDF4EC] border border-[#EADFD5]">
                <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" fill="#67C3BA" fillOpacity="0.35" />
                  <path d="M9.5 12l2 2 3.5-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">Trusted &amp; safe</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                A Federal Non-Profit Corporation in Canada run by caring volunteers dedicated to the peace and well-being of the community.
              </p>
            </div>

          </div>

          {/* Signature Mi&u Peach-Cream Editorial Callout */}
          <div className="max-w-3xl mx-auto bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-8 sm:p-10 text-center">
            <svg aria-hidden="true" className="w-8 h-8 mx-auto mb-4 text-[#810D41]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 14h4v6H8v-6c0-4 2-7 5-8M21 14h4v6h-6v-6c0-4 2-7 5-8" />
            </svg>
            <p className="font-serif text-lg sm:text-2xl text-[#1A1614] leading-snug">
              A peaceful, multicultural spiritual family helping visitors improve life through Divine Light and universal principles.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR HEART (MINT TEAL FEATURE SECTION) ================= */}
      {/* Preserves verbatim copy inside Mi&u's mint teal + white card + dark ink layout */}
      <section id="heart" className="relative overflow-hidden py-20 bg-[#67C3BA] text-[#0E1D1C]">
        
        {/* Subtle decorative curve accent */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-28 -right-28 w-[34rem] h-[34rem] rounded-full bg-[#57B3AA]/55"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0D1E1D] inline-flex items-center gap-2 mb-3">
              Our heart
              <svg aria-hidden="true" className="w-7 h-7 text-white shrink-0" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 12L4 7M13 8V3M19 11L23 7" />
              </svg>
            </h2>
            <p className="font-serif text-lg sm:text-2xl text-[#0D1E1D]/90 italic">
              Our Mission: Bringing Light and Harmony to Everyday Life
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Crisp White Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-10 shadow-lg border border-black/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF4EC] text-[#810D41] text-xs font-semibold uppercase tracking-wider mb-5">
                Our Purpose
              </div>
              <p className="text-base sm:text-lg text-[#2B2522] leading-relaxed">
                World Divine Light was established to help people regain their innermost heart of unconditional love, sincerity, and peace. We believe that the soul, mind, and body are deeply interconnected. When we purify and care for the spiritual source first, positive energy naturally flows down to revitalize our mind, body, and daily lives. Our purpose is to share this universal practice so that everyone can become &ldquo;people of light&rdquo;&mdash;bringing warmth, harmony, and well-being to their homes, workplaces, and communities.
              </p>
            </div>

            {/* Right: What You'll Experience stacked points in high-contrast ink */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1E1D]">
                What You&rsquo;ll Experience
              </h3>

              <div className="space-y-5">
                {/* Item 1 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#0D1E1D]/10">
                  <h4 className="font-serif text-lg font-bold text-[#0D1E1D] mb-1.5 flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#810D41] text-white text-xs font-sans flex items-center justify-center shrink-0">1</span>
                    Purifying Soul, Mind, and Body
                  </h4>
                  <p className="text-sm sm:text-base text-[#0E1D1C]/90 leading-relaxed pl-8">
                    Based on the principle that spirit, mind, and body are connected, the Art of Divine Light purifies the spiritual aspect at its source, helping relieve fatigue and restore natural balance.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#0D1E1D]/10">
                  <h4 className="font-serif text-lg font-bold text-[#0D1E1D] mb-1.5 flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#810D41] text-white text-xs font-sans flex items-center justify-center shrink-0">2</span>
                    Learning Universal Laws with an Open Mind
                  </h4>
                  <p className="text-sm sm:text-base text-[#0E1D1C]/90 leading-relaxed pl-8">
                    Discover universal principles that complement your existing values. People of all backgrounds and faiths are welcome with no need to convert.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#0D1E1D]/10">
                  <h4 className="font-serif text-lg font-bold text-[#0D1E1D] mb-1.5 flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#810D41] text-white text-xs font-sans flex items-center justify-center shrink-0">3</span>
                    Becoming &ldquo;People of Light&rdquo;
                  </h4>
                  <p className="text-sm sm:text-base text-[#0E1D1C]/90 leading-relaxed pl-8">
                    Through purification and universal principles, cultivate inner positivity and bring warmth, clarity, and harmony into your home, work, and community.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. OUR SPACE — REAL DOJO & COMMUNITY PHOTOS (PEACH CREAM) ================= */}
      {/* Balanced 2-column masonry respecting exact native ratios (3:4 + 4:3 on left = 4:3 + 3:4 on right) */}
      <section id="space" className="py-20 bg-[#FDF4EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            {/* Three diamond stars accent matching Mi&u "Recent work" */}
            <svg aria-hidden="true" className="w-10 h-10 mx-auto mb-3 text-[#1A1614]" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 4l2.5 5.5L28 12l-5.5 2.5L20 20l-2.5-5.5L12 12l5.5-2.5L20 4zM9 22l1.8 3.5L14.5 27l-3.7 1.5L9 32l-1.8-3.5L3.5 27l3.7-1.5L9 22zM30 22l1.8 3.5L35.5 27l-3.7 1.5L30 32l-1.8-3.5L24.5 27l3.7-1.5L30 22z" />
            </svg>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1614] mb-3">
              Our space
            </h2>
            <p className="text-sm sm:text-base text-[#524B47] max-w-xl mx-auto">
              A warm, welcoming sanctuary in Burnaby designed for peaceful Divine Light sessions and friendly fellowship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: 3:4 Portrait Session + 4:3 Landscape Room */}
            <div className="space-y-6">
              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/dojo_session.jpg" 
                    alt="Practitioners gently offering Divine Light in our Burnaby sanctuary" 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    Divine Light Sanctuary
                  </span>
                  <span className="text-xs text-[#810D41] font-medium">
                    Seated &amp; Reclined Care
                  </span>
                </figcaption>
              </figure>

              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/gallery_3.jpg" 
                    alt="Quiet session chairs and peaceful table space" 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    Restful Session Area
                  </span>
                  <span className="text-xs text-[#524B47]">
                    Clean &amp; Calm Setting
                  </span>
                </figcaption>
              </figure>
            </div>

            {/* Right Column: 4:3 Landscape Community + 3:4 Portrait Entrance Door */}
            <div className="space-y-6">
              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/dojo_community.jpg" 
                    alt="Visitors and center members chatting warmly around the table" 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    Warm Fellowship &amp; After-Talk
                  </span>
                  <span className="text-xs text-[#810D41] font-medium">
                    Community Table
                  </span>
                </figcaption>
              </figure>

              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/gallery_2.jpg" 
                    alt="Unit E doorway sign reading Divine Light SMBK-Canada" 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    Unit E Entrance Door
                  </span>
                  <span className="text-xs text-[#524B47]">
                    2800 Douglas Rd, Burnaby
                  </span>
                </figcaption>
              </figure>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. WHAT TO EXPECT (CRISP WHITE) ================= */}
      <section id="expect" className="py-20 bg-white border-t border-[#EADFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1614] mb-3">
              What to expect
            </h2>
            <p className="text-sm sm:text-base text-[#524B47]">
              Your first visit is relaxed, unhurried, and lasts under an hour.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-6 sm:p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#810D41] text-white font-serif font-bold text-lg flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-1.5 flex flex-wrap items-center gap-2.5">
                  Warm welcome
                  <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-[#67C3BA]/30 text-[#0E1D1C]">
                    about 10 min
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-[#524B47] leading-relaxed">
                  Our staff greet you with a smile and a short introduction in a quiet room.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-6 sm:p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#810D41] text-white font-serif font-bold text-lg flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-1.5 flex flex-wrap items-center gap-2.5">
                  The Divine Light session
                  <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-[#67C3BA]/30 text-[#0E1D1C]">
                    30 min
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-[#524B47] leading-relaxed">
                  Sit comfortably, close your eyes and relax while the gentle Divine Light is transmitted.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-6 sm:p-7 flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#810D41] text-white font-serif font-bold text-lg flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-1.5 flex flex-wrap items-center gap-2.5">
                  After talk
                  <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-[#67C3BA]/30 text-[#0E1D1C]">
                    about 10 min
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-[#524B47] leading-relaxed">
                  After the session, we talk calmly about what you felt and any questions over a warm cup of tea.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. BEFORE YOU VISIT (CLEAN BORDERED GRID) ================= */}
      <section id="visit" className="py-20 bg-white border-t border-[#EADFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#1A1614] mb-12">
            Before you visit
          </h2>

          <div className="grid md:grid-cols-3 rounded-3xl border border-[#EADFD5] bg-[#FDF4EC]/40 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#EADFD5]">
            
            {/* Attire */}
            <div className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border border-[#EADFD5] flex items-center justify-center text-2xl">
                👕
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-3">Attire</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                Casual is fine. Jeans and everyday clothes are completely OK. Clean socks are requested indoors.
              </p>
            </div>

            {/* What to bring */}
            <div className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border border-[#EADFD5] flex items-center justify-center text-2xl">
                🎒
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-3">What to bring</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                Nothing at all. Just come as you are.
              </p>
            </div>

            {/* Parking */}
            <div className="p-8 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border border-[#EADFD5] flex items-center justify-center text-2xl">
                🚗
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-3">Parking</h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                Convenient on-site parking is available directly outside Unit E at 2800 Douglas Road in Burnaby.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. YOUR HOSTS (PEACH CREAM + NEW YUI TAKEDA PORTRAIT) ================= */}
      <section id="hosts" className="py-20 bg-[#FDF4EC] border-t border-[#EADFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1614] mb-3">
              Your hosts
            </h2>
            <div className="w-16 h-0.5 bg-[#810D41] mx-auto"></div>
          </div>

          <div className="bg-white border border-[#EADFD5] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
            
            {/* Host Portrait */}
            <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#67C3BA]/45 bg-[#F5F2EE]">
              <Image 
                src="/assets/staff_yui_takeda.jpg" 
                alt="Yui Takeda, Minister at Vancouver Spiritual Center" 
                fill 
                className="object-cover object-top" 
              />
            </div>

            {/* Introduction */}
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#67C3BA]/25 text-[#0E1D1C] text-[11px] font-semibold uppercase tracking-wider mb-3">
                Meet Your Minister
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1614] mb-1">
                Yui Takeda
              </h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#810D41] mb-5">
                Minister
              </p>

              <div className="text-sm sm:text-base text-[#2B2522] leading-relaxed space-y-2.5">
                <p>Welcome! My name is Yui Takeda.</p>
                <p>
                  Having served as a minister for over a decade, I am dedicated to sharing our teachings, offering Divine Light, and supporting everyone in our community.
                </p>
                <p>I truly look forward to meeting you at our centre!</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. FAQ (HIGH-CONTRAST JET BLACK SECTION) ================= */}
      <section id="faq" aria-labelledby="faq-heading" className="faq-accordion py-20 bg-[#0A0A0A] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
              Frequently asked questions
            </h2>
            <div className="w-16 h-0.5 bg-[#67C3BA] mx-auto"></div>
          </div>

          <div className="border-t border-white/15">
            
            {/* Q1 */}
            <details className="py-5" open>
              <summary className="font-medium text-sm sm:text-base text-white">
                <span>Q: Is this event really free?</span>
              </summary>
              <div className="mt-3 pl-6 text-sm text-[#D6D0CA] leading-relaxed">
                A: There is no required fee. As a non-profit organization, love donations are purely optional and welcome.
              </div>
            </details>

            {/* Q2 */}
            <details className="py-5" open>
              <summary className="font-medium text-sm sm:text-base text-white">
                <span>Q: Do I need to belong to a specific religion or faith?</span>
              </summary>
              <div className="mt-3 pl-6 text-sm text-[#D6D0CA] leading-relaxed">
                A: Open to everyone — no prior background or spiritual experience needed.
              </div>
            </details>

            {/* Q3 */}
            <details className="py-5" open>
              <summary className="font-medium text-sm sm:text-base text-white">
                <span>Q: Is reservation required?</span>
              </summary>
              <div className="mt-3 pl-6 text-sm text-[#D6D0CA] leading-relaxed">
                A: Yes, space is limited, so prior reservation is required.
              </div>
            </details>

          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-sm text-[#C7C2BC]">
              Please call or email us and we will be glad to help.
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 hover:border-[#67C3BA] text-white text-sm font-medium transition-colors"
            >
              Have more questions?
            </a>
          </div>

        </div>
      </section>

      {/* ================= 9. CTA BANNER, RESERVATION FORM & CONSOLIDATED DOJO INFO ================= */}
      <section id="booking" className="py-20 bg-[#0A0A0A] text-[#F7F1EB] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Experience the Power of Divine Light
            </h2>
            <p className="text-sm sm:text-base text-[#67C3BA] font-medium">
              Hours: Tue - Fri 12:00 PM – 7:00 PM / Sat - Sun 10:00 AM – 4:00 PM (Mon Closed)
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Reservation Form */}
            <div className="lg:col-span-7 bg-[#FDF4EC] text-[#1A1614] rounded-3xl p-6 sm:p-9 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#1A1614] mb-2">
                Reserve Your Spot
              </h3>
              <p className="text-xs sm:text-sm text-[#524B47] mb-6">
                Please fill out this form to request a one-on-one session. There is no mandatory fee.
              </p>

              {submitStatus === "success" ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <h4 className="font-serif font-bold text-emerald-800 text-lg mb-1">
                    Reservation Request Sent!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. We will contact you via email or phone shortly to confirm your session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold text-[#1A1614] mb-1">
                      Full Name *
                    </label>
                    <input 
                      id="full-name"
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email-addr" className="block text-xs font-semibold text-[#1A1614] mb-1">
                        Email Address *
                      </label>
                      <input 
                        id="email-addr"
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone-num" className="block text-xs font-semibold text-[#1A1614] mb-1">
                        Phone (Call/SMS)
                      </label>
                      <input 
                        id="phone-num"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (604) 000-0000" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pref-time" className="block text-xs font-semibold text-[#1A1614] mb-1">
                      Preferred Date &amp; Time
                    </label>
                    <input 
                      id="pref-time"
                      type="datetime-local" 
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#524B47] focus:outline-none focus:border-[#810D41]"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-[#1A1614] mb-1">
                      Questions or Notes
                    </label>
                    <textarea 
                      id="notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know if you have any questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary-pill w-full py-3.5 px-6 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-sm transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Request..." : "Confirm Reservation Request"}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-xs text-rose-600 text-center">
                      Failed to send request. Please try calling or texting us directly.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Direct Contact & Map */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Quick Contact Card */}
              <div className="bg-white/[0.04] border border-white/15 rounded-3xl p-6 text-sm">
                <h4 className="font-serif font-bold text-white text-lg mb-3">
                  Vancouver Spiritual Center (Burnaby)
                </h4>
                <div className="space-y-2.5 text-[#E5DED7] text-xs sm:text-sm">
                  <p>📍 <strong>Address:</strong> 2800 Douglas Road, Unit E, Burnaby, B.C. V5C 5B7</p>
                  <p>🕒 <strong>Hours:</strong> Tue–Fri 12:00 PM – 7:00 PM / Sat–Sun 10:00 AM – 4:00 PM (Mon Closed)</p>
                  <p>
                    📞 <strong>Phone:</strong>{" "}
                    <a href="tel:+16045682867" className="text-[#67C3BA] hover:underline font-medium">
                      +1 (604) 568-2867
                    </a>
                  </p>
                  <p>
                    ✉️ <strong>Email:</strong>{" "}
                    <a href="mailto:info-can@worlddivinelight.org" className="text-[#67C3BA] hover:underline font-medium">
                      info-can@worlddivinelight.org
                    </a>
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/15 flex gap-2.5">
                  <a 
                    href="tel:+16045682867" 
                    className="btn-primary-pill flex-1 py-2.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-xs text-center transition-all shadow-sm"
                  >
                    Call Directly
                  </a>
                  <a 
                    href="sms:+16045682867&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20Divine%20Light%20session." 
                    className="flex-1 py-2.5 rounded-full border border-[#67C3BA] text-[#67C3BA] hover:bg-[#67C3BA]/10 font-semibold text-xs text-center transition-all"
                  >
                    Text (SMS)
                  </a>
                </div>

                <p className="text-[11px] text-white/55 mt-4 pt-3 border-t border-white/10 text-center">
                  Federal Non-Profit Corporation in Canada
                </p>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-white/15 h-56 relative">
                <iframe 
                  title="Vancouver Spiritual Center Location"
                  src="https://www.google.com/maps?q=2800%20Douglas%20Road%2C%20Unit%20E%2C%20Burnaby%2C%20B.C.%20V5C%205B7&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a 
                  href="https://maps.google.com/?q=2800+Douglas+Road+Unit+E+Burnaby+BC+V5C+5B7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-3 left-3 bg-white/95 hover:bg-white text-[#1A1614] px-3 py-1.5 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm transition-all flex items-center gap-1"
                >
                  Open in Maps ↗
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 10. MINIMAL FOOTER (NO DUPLICATE INFO) ================= */}
      <footer className="bg-[#050505] text-[#F7F1EB]/70 py-10 px-4 text-center text-xs border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-serif text-base sm:text-lg text-white font-bold tracking-wide">
            World Divine Light Organization
          </p>
          <p className="text-[11px] text-white/45">
            © 2026 Vancouver Spiritual Center · World Divine Light Organization. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ================= MOBILE STICKY BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDF4EC]/95 backdrop-blur-md border-t border-[#EADFD5] px-4 py-2.5 flex items-center gap-2.5">
        <a 
          href="sms:+16045682867&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20Divine%20Light%20session%20at%20the%20Vancouver%20Center." 
          className="flex-1 py-2.5 rounded-full border border-[#810D41]/35 text-[#810D41] text-center text-xs font-semibold bg-white/80"
        >
          💬 SMS Us
        </a>
        <a 
          href="#booking" 
          className="btn-primary-pill flex-[2] py-2.5 rounded-full bg-[#810D41] text-white text-center text-xs font-semibold shadow-sm"
        >
          Reserve a Session
        </a>
      </div>

    </div>
  );
}
