"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TRANSLATIONS, type Lang } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Sync language with URL query parameter (?lang=ja) or localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang") as Lang | null;
      if (urlLang === "ja" || urlLang === "en") {
        setLang(urlLang);
        return;
      }
      const saved = localStorage.getItem("wdl_canada_lang") as Lang | null;
      if (saved === "ja" || saved === "en") {
        setLang(saved);
      }
    }
  }, []);

  const switchLanguage = (newLang: Lang) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("wdl_canada_lang", newLang);
      const url = new URL(window.location.href);
      if (newLang === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", newLang);
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const t = TRANSLATIONS[lang];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language: lang }),
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
      <header className="sticky top-0 z-50 bg-[#FDF4EC]/95 backdrop-blur-md border-b border-[#EADFD5] px-3 sm:px-6 py-2.5 sm:py-3 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <Image 
              src="/assets/wdl_logo.png" 
              alt="World Divine Light" 
              width={110} 
              height={40} 
              className="h-8 sm:h-10 w-auto object-contain shrink-0" 
              priority
            />
            <div className="border-l border-[#EADFD5] pl-2.5 sm:pl-3 flex flex-col justify-center">
              <span className="block font-serif font-bold text-xs sm:text-base text-[#810D41] group-hover:text-[#640932] leading-tight whitespace-nowrap transition-colors">
                {t.header.title}
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#524B47] font-medium tracking-wide whitespace-nowrap">
                {t.header.org}
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#524B47] whitespace-nowrap">
            <a href="#promises" className="hover:text-[#810D41] transition-colors">{t.header.nav.promises}</a>
            <a href="#heart" className="hover:text-[#810D41] transition-colors">{t.header.nav.heart}</a>
            <a href="#space" className="hover:text-[#810D41] transition-colors">{t.header.nav.space}</a>
            <a href="#expect" className="hover:text-[#810D41] transition-colors">{t.header.nav.expect}</a>
            <a href="#visit" className="hover:text-[#810D41] transition-colors">{t.header.nav.visit}</a>
            <a href="#hosts" className="hover:text-[#810D41] transition-colors">{t.header.nav.hosts}</a>
            <a href="#faq" className="hover:text-[#810D41] transition-colors">{t.header.nav.faq}</a>
          </nav>

          {/* Top Actions: Language Switcher + Reservation CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Toggle Pill */}
            <div className="inline-flex items-center p-0.5 rounded-full border border-[#810D41]/30 bg-white/90 text-xs font-semibold shadow-2xs">
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  lang === "en"
                    ? "bg-[#810D41] text-white shadow-xs"
                    : "text-[#524B47] hover:text-[#1A1614]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("ja")}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  lang === "ja"
                    ? "bg-[#810D41] text-white shadow-xs"
                    : "text-[#524B47] hover:text-[#1A1614]"
                }`}
                aria-label="日本語で表示"
              >
                日本語
              </button>
            </div>

            {/* Top CTA Button */}
            <a 
              href="#booking" 
              className="btn-primary-pill inline-flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-sm"
            >
              {t.header.cta}
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
              {t.hero.badge}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1614] leading-[1.15] sm:leading-[1.12] mb-6 relative">
              {t.hero.titleMain}
              <span className="relative inline-block">
                {t.hero.titleHighlight}
                {/* Subtle hand-drawn radiance accent */}
                <svg aria-hidden="true" className="hidden sm:inline-block absolute -top-5 -right-7 w-7 h-7 text-[#67C3BA]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M10 14L6 6M16 11V3M22 14L27 7" />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#4A433E] leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center lg:justify-start justify-center gap-3.5 mb-5">
              <a 
                href="#booking" 
                className="btn-primary-pill w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-sm whitespace-nowrap transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.primaryCta}
              </a>
              <a 
                href="tel:+16045682867" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#1A1614]/25 text-[#1A1614] hover:bg-[#1A1614]/5 font-semibold text-sm whitespace-nowrap transition-all bg-white/70"
              >
                {t.hero.phoneCta}
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#524B47] italic">
              {t.hero.microcopy}
            </p>
          </div>

          {/* Right: Crisp Framed Sanctuary Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <Image 
                src="/assets/hero.jpg" 
                alt={t.hero.imageAlt} 
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
            {t.trustStrip.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            {t.trustStrip.free}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            {t.trustStrip.allFaiths}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67C3BA]"></span>
            {t.trustStrip.reservation}
          </span>
        </div>
      </div>

      {/* ================= 2. THREE PROMISES + QUOTE CALLOUT (CRISP WHITE CANVAS) ================= */}
      <section id="promises" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#1A1614] mb-14">
            {t.promises.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
            
            {/* Promise 1 */}
            <div className="px-2">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-[#FDF4EC] border border-[#EADFD5]">
                <svg aria-hidden="true" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#1A1614" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.35-9.5-8.5C.5 9.1 2.4 5 6.2 5c2.1 0 3.9 1.1 5.8 3.2C13.9 6.1 15.7 5 17.8 5 21.6 5 23.5 9.1 21.5 12.5 19 16.65 12 21 12 21z" fill="#67C3BA" fillOpacity="0.35" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">
                {t.promises.items[0].title}
              </h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                {t.promises.items[0].desc}
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
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">
                {t.promises.items[1].title}
              </h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                {t.promises.items[1].desc}
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
              <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-2.5">
                {t.promises.items[2].title}
              </h3>
              <p className="text-sm text-[#524B47] leading-relaxed">
                {t.promises.items[2].desc}
              </p>
            </div>

          </div>

          {/* Signature Mi&u Peach-Cream Editorial Callout */}
          <div className="max-w-3xl mx-auto bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-8 sm:p-10 text-center">
            <svg aria-hidden="true" className="w-8 h-8 mx-auto mb-4 text-[#810D41]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 14h4v6H8v-6c0-4 2-7 5-8M21 14h4v6h-6v-6c0-4 2-7 5-8" />
            </svg>
            <p className="font-serif text-lg sm:text-2xl text-[#1A1614] leading-snug">
              {t.promises.callout}
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
              {t.heart.title}
              <svg aria-hidden="true" className="w-7 h-7 text-white shrink-0" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 12L4 7M13 8V3M19 11L23 7" />
              </svg>
            </h2>
            <p className="font-serif text-lg sm:text-2xl text-[#0D1E1D]/90 italic">
              {t.heart.mission}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Crisp White Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-10 shadow-lg border border-black/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF4EC] text-[#810D41] text-xs font-semibold uppercase tracking-wider mb-5">
                {t.heart.purposeBadge}
              </div>
              <p className="text-base sm:text-lg text-[#2B2522] leading-relaxed">
                {t.heart.purposeText}
              </p>
            </div>

            {/* Right: What You'll Experience stacked points in high-contrast ink */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1E1D]">
                {t.heart.experienceTitle}
              </h3>

              <div className="space-y-5">
                {t.heart.experiencePoints.map((item) => (
                  <div key={item.num} className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#0D1E1D]/10">
                    <h4 className="font-serif text-lg font-bold text-[#0D1E1D] mb-1.5 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#810D41] text-white text-xs font-sans flex items-center justify-center shrink-0">
                        {item.num}
                      </span>
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#0E1D1C]/90 leading-relaxed pl-8">
                      {item.desc}
                    </p>
                  </div>
                ))}
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
              {t.space.title}
            </h2>
            <p className="text-sm sm:text-base text-[#524B47] max-w-xl mx-auto">
              {t.space.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: 3:4 Portrait Session + 4:3 Landscape Room */}
            <div className="space-y-6">
              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/dojo_session.jpg" 
                    alt={t.space.photos[0].alt} 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    {t.space.photos[0].title}
                  </span>
                  <span className="text-xs text-[#810D41] font-medium">
                    {t.space.photos[0].sub}
                  </span>
                </figcaption>
              </figure>

              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/gallery_3.jpg" 
                    alt={t.space.photos[1].alt} 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    {t.space.photos[1].title}
                  </span>
                  <span className="text-xs text-[#524B47]">
                    {t.space.photos[1].sub}
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
                    alt={t.space.photos[2].alt} 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    {t.space.photos[2].title}
                  </span>
                  <span className="text-xs text-[#810D41] font-medium">
                    {t.space.photos[2].sub}
                  </span>
                </figcaption>
              </figure>

              <figure className="lp-card group bg-white rounded-3xl p-3 border border-[#EADFD5] shadow-sm">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F5ECE2]">
                  <Image 
                    src="/assets/gallery_2.jpg" 
                    alt={t.space.photos[3].alt} 
                    fill 
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-2 flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm sm:text-base text-[#1A1614]">
                    {t.space.photos[3].title}
                  </span>
                  <span className="text-xs text-[#524B47]">
                    {t.space.photos[3].sub}
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
              {t.expect.title}
            </h2>
            <p className="text-sm sm:text-base text-[#524B47]">
              {t.expect.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {t.expect.steps.map((st) => (
              <div key={st.step} className="bg-[#FDF4EC] border border-[#EADFD5] rounded-2xl p-6 sm:p-7 flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#810D41] text-white font-serif font-bold text-lg flex items-center justify-center shrink-0">
                  {st.step}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-1.5 flex flex-wrap items-center gap-2.5">
                    {st.title}
                    <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-[#67C3BA]/30 text-[#0E1D1C]">
                      {st.time}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-[#524B47] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. BEFORE YOU VISIT (CLEAN BORDERED GRID) ================= */}
      <section id="visit" className="py-20 bg-white border-t border-[#EADFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center text-[#1A1614] mb-12">
            {t.visit.title}
          </h2>

          <div className="grid md:grid-cols-3 rounded-3xl border border-[#EADFD5] bg-[#FDF4EC]/40 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#EADFD5]">
            {t.visit.items.map((it) => (
              <div key={it.title} className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white border border-[#EADFD5] flex items-center justify-center text-2xl">
                  {it.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1614] mb-3">
                  {it.title}
                </h3>
                <p className="text-sm text-[#524B47] leading-relaxed">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 7. YOUR HOSTS (PEACH CREAM + NEW YUI TAKEDA PORTRAIT) ================= */}
      <section id="hosts" className="py-20 bg-[#FDF4EC] border-t border-[#EADFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1614] mb-3">
              {t.hosts.title}
            </h2>
            <div className="w-16 h-0.5 bg-[#810D41] mx-auto"></div>
          </div>

          <div className="bg-white border border-[#EADFD5] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
            
            {/* Host Portrait */}
            <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-[#67C3BA]/45 bg-[#F5F2EE]">
              <Image 
                src="/assets/staff_yui_takeda.jpg" 
                alt={`${t.hosts.name}, ${t.hosts.role}`} 
                fill 
                className="object-cover object-top" 
              />
            </div>

            {/* Introduction */}
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#67C3BA]/25 text-[#0E1D1C] text-[11px] font-semibold uppercase tracking-wider mb-3">
                {t.hosts.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1614] mb-1">
                {t.hosts.name}
              </h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#810D41] mb-5">
                {t.hosts.role}
              </p>

              <div className="text-sm sm:text-base text-[#2B2522] leading-relaxed space-y-2.5">
                <p>{t.hosts.intro1}</p>
                <p>{t.hosts.intro2}</p>
                <p>{t.hosts.intro3}</p>
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
              {t.faq.title}
            </h2>
            <div className="w-16 h-0.5 bg-[#67C3BA] mx-auto"></div>
          </div>

          <div className="border-t border-white/15">
            {t.faq.items.map((item, idx) => (
              <details key={idx} className="py-5" open>
                <summary className="font-medium text-sm sm:text-base text-white">
                  <span>{item.q}</span>
                </summary>
                <div className="mt-3 pl-6 text-sm text-[#D6D0CA] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-sm text-[#C7C2BC]">
              {t.faq.prompt}
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 hover:border-[#67C3BA] text-white text-sm font-medium transition-colors"
            >
              {t.faq.cta}
            </a>
          </div>

        </div>
      </section>

      {/* ================= 9. CTA BANNER, RESERVATION FORM & CONSOLIDATED DOJO INFO ================= */}
      <section id="booking" className="py-20 bg-[#0A0A0A] text-[#F7F1EB] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {t.booking.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#67C3BA] font-medium">
              {t.booking.hours}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Reservation Form */}
            <div className="lg:col-span-7 bg-[#FDF4EC] text-[#1A1614] rounded-3xl p-6 sm:p-9 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#1A1614] mb-2">
                {t.booking.form.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#524B47] mb-6">
                {t.booking.form.subtitle}
              </p>

              {submitStatus === "success" ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <h4 className="font-serif font-bold text-emerald-800 text-lg mb-1">
                    {t.booking.form.successTitle}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {t.booking.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold text-[#1A1614] mb-1">
                      {t.booking.form.fullNameLabel}
                    </label>
                    <input 
                      id="full-name"
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.booking.form.fullNamePlaceholder} 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email-addr" className="block text-xs font-semibold text-[#1A1614] mb-1">
                        {t.booking.form.emailLabel}
                      </label>
                      <input 
                        id="email-addr"
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.booking.form.emailPlaceholder} 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                      />
                    </div>
                    <div>
                      {/* Notice: Changed from "Phone (Call/SMS)" to "Phone Number" per landline restriction */}
                      <label htmlFor="phone-num" className="block text-xs font-semibold text-[#1A1614] mb-1">
                        {t.booking.form.phoneLabel}
                      </label>
                      <input 
                        id="phone-num"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.booking.form.phonePlaceholder} 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pref-time" className="block text-xs font-semibold text-[#1A1614] mb-1">
                      {t.booking.form.timeLabel}
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
                      {t.booking.form.notesLabel}
                    </label>
                    <textarea 
                      id="notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.booking.form.notesPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADFD5] bg-white text-sm text-[#1A1614] focus:outline-none focus:border-[#810D41]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary-pill w-full py-3.5 px-6 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-sm transition-all shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? t.booking.form.submittingBtn : t.booking.form.submitBtn}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-xs text-rose-600 text-center">
                      {t.booking.form.errorMsg}
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
                  {t.booking.contactCard.title}
                </h4>
                <div className="space-y-2.5 text-[#E5DED7] text-xs sm:text-sm">
                  <p>📍 <strong>{t.booking.contactCard.addressLabel}</strong> {t.booking.contactCard.addressVal}</p>
                  <p>🕒 <strong>{t.booking.contactCard.hoursLabel}</strong> {t.booking.contactCard.hoursVal}</p>
                  <p>
                    📞 <strong>{t.booking.contactCard.phoneLabel}</strong>{" "}
                    <a href="tel:+16045682867" className="text-[#67C3BA] hover:underline font-medium">
                      +1 (604) 568-2867
                    </a>
                  </p>
                  <p>
                    ✉️ <strong>{t.booking.contactCard.emailLabel}</strong>{" "}
                    <a href="mailto:info-can@worlddivinelight.org" className="text-[#67C3BA] hover:underline font-medium">
                      info-can@worlddivinelight.org
                    </a>
                  </p>
                </div>

                {/* Direct Action Buttons: Voice Call & Email (SMS removed due to landline restriction) */}
                <div className="mt-5 pt-4 border-t border-white/15 flex gap-2.5">
                  <a 
                    href="tel:+16045682867" 
                    className="btn-primary-pill flex-1 py-2.5 rounded-full bg-[#810D41] hover:bg-[#640932] text-white font-semibold text-xs text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    {t.booking.contactCard.callBtn}
                  </a>
                  <a 
                    href="mailto:info-can@worlddivinelight.org" 
                    className="flex-1 py-2.5 rounded-full border border-[#67C3BA] text-[#67C3BA] hover:bg-[#67C3BA]/10 font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    {t.booking.contactCard.emailBtn}
                  </a>
                </div>

                <p className="text-[11px] text-white/55 mt-4 pt-3 border-t border-white/10 text-center">
                  {t.booking.contactCard.badge}
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
                  {t.booking.contactCard.mapBtn}
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
            {t.footer.org}
          </p>
          <p className="text-[11px] text-white/45">
            {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* ================= MOBILE STICKY BOTTOM BAR ================= */}
      {/* Notice: Changed from SMS Us to Call Us per landline restriction */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDF4EC]/95 backdrop-blur-md border-t border-[#EADFD5] px-4 py-2.5 flex items-center gap-2.5">
        <a 
          href="tel:+16045682867" 
          className="flex-1 py-2.5 rounded-full border border-[#810D41]/35 text-[#810D41] text-center text-xs font-semibold bg-white/80 flex items-center justify-center gap-1"
        >
          {t.mobileBar.callBtn}
        </a>
        <a 
          href="#booking" 
          className="btn-primary-pill flex-[2] py-2.5 rounded-full bg-[#810D41] text-white text-center text-xs font-semibold shadow-sm"
        >
          {t.mobileBar.reserveBtn}
        </a>
      </div>

    </div>
  );
}
