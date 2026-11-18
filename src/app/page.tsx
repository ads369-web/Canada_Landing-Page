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

  // Sync document title with active language
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title =
        lang === "ja"
          ? "心と体の調和を取り戻す、お浄めの体験 | バンクーバー道場（バーナビー）"
          : "Experience the Power of Spiritual Harmony | Vancouver Spiritual Center";
    }
  }, [lang]);

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

  // Scroll reveal IntersectionObserver (Inspired by yama-niwa & Sanga)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const items = document.querySelectorAll(".reveal-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [lang]);

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
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] selection:bg-[#7A1A3A] selection:text-white overflow-x-hidden">

      {/* ================= HEADER & NAVIGATION (QUIET SANCTUARY BAR) ================= */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#1C1917]/10 px-4 sm:px-6 2xl:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <Image 
              src="/assets/wdl_logo.png" 
              alt="World Divine Light" 
              width={110} 
              height={40} 
              className="h-7 sm:h-9 w-auto object-contain shrink-0 opacity-90 group-hover:opacity-100 transition-opacity" 
              priority
            />
            <div className="border-l border-[#1C1917]/15 pl-2.5 sm:pl-3 flex flex-col justify-center">
              <span className="block font-serif font-bold text-xs sm:text-sm tracking-wide text-[#7A1A3A] leading-tight whitespace-nowrap">
                {t.header.title}
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#6B645C] font-sans font-medium tracking-wider uppercase whitespace-nowrap">
                {t.header.org}
              </span>
            </div>
          </a>

          {/* Editorial Nav Links */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-3.5 2xl:gap-6 text-[11px] 2xl:text-xs tracking-wider uppercase font-sans font-medium text-[#6B645C] whitespace-nowrap">
            <a href="#promises" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.promises}</a>
            <a href="#heart" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.heart}</a>
            <a href="#space" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.space}</a>
            <a href="#expect" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.expect}</a>
            <a href="#visit" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.visit}</a>
            <a href="#hosts" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.hosts}</a>
            <a href="#faq" className="hover:text-[#7A1A3A] transition-colors">{t.header.nav.faq}</a>
          </nav>

          {/* Right Actions: Segmented Language Switcher + Reservation CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Language Switcher Pill */}
            <div className="inline-flex items-center p-0.5 rounded-full border border-[#1C1917]/15 bg-white/80 text-[11px] font-medium shadow-2xs">
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "en"
                    ? "bg-[#7A1A3A] text-white shadow-2xs font-semibold"
                    : "text-[#6B645C] hover:text-[#1C1917]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => switchLanguage("ja")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  lang === "ja"
                    ? "bg-[#7A1A3A] text-white shadow-2xs font-semibold"
                    : "text-[#6B645C] hover:text-[#1C1917]"
                }`}
                aria-label="日本語で表示"
              >
                日本語
              </button>
            </div>

            {/* Top Ghost/Pill CTA */}
            <a 
              href="#booking" 
              className="hidden sm:inline-flex items-center justify-center px-4 2xl:px-5 py-2 rounded-full bg-[#7A1A3A] hover:bg-[#5E122B] text-white text-[11px] 2xl:text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all shadow-sm hover:shadow"
            >
              {t.header.cta}
            </a>
          </div>

        </div>
      </header>

      {/* ================= 1. CINEMATIC SANCTUARY HERO (SANGA & YAMA-NIWA STYLE) ================= */}
      {/* Released from the "AI card" box: Expansive, atmospheric, majestic morning light */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Eyebrow & Lead Header */}
          <div className="text-center max-w-4xl mx-auto reveal-item">
            <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold mb-5 font-sans">
              {t.hero.badge}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.14] mb-6">
              {t.hero.titleMain}
              <span className="italic font-normal block sm:inline text-[#7A1A3A]">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6B645C] leading-relaxed mb-8 font-serif">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4">
              <a 
                href="#booking" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#7A1A3A] hover:bg-[#5E122B] text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.primaryCta}
              </a>
              <a 
                href="tel:+16045682867" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#1C1917]/20 hover:border-[#7A1A3A] text-[#1C1917] hover:bg-[#7A1A3A]/5 font-medium text-xs sm:text-sm tracking-wide whitespace-nowrap transition-all bg-white/60"
              >
                {t.hero.phoneCta}
              </a>
            </div>

            <p className="text-xs text-[#8C827A] italic font-serif">
              {t.hero.microcopy}
            </p>
          </div>

          {/* Expansive Panoramic Visual — NOT inside an AI card */}
          <div className="mt-12 sm:mt-16 reveal-item delay-200">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#E8E2D8]">
              <Image 
                src="/assets/hero.jpg" 
                alt={t.hero.imageAlt} 
                fill 
                className="object-cover object-center scale-[1.01]" 
                priority
              />
              {/* Soft atmospheric gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Subtle caption overlaid on the morning landscape */}
              <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8 text-white/90 text-xs sm:text-sm font-serif italic tracking-wide">
                {t.hero.caption}
              </div>
            </div>
          </div>

          {/* Sanga & yama-niwa Scroll Indicator */}
          <div className="mt-12 flex flex-col items-center justify-center gap-2 reveal-item delay-300">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C827A] font-medium font-sans">
              SCROLL
            </span>
            <div className="w-[1px] h-10 bg-[#1C1917]/15 overflow-hidden">
              <div className="w-full h-full bg-[#7A1A3A] animate-scroll-line"></div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= DARK SANCTUARY TRUST STRIP ================= */}
      <div className="bg-[#141312] text-[#FAF7F2] py-4 sm:py-5 px-4 sm:px-8 border-y border-white/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-2.5 text-xs tracking-wider uppercase font-sans font-medium text-white/75">
          <span className="flex items-center gap-2">
            <span className="text-[#4A6B5D]">◇</span>
            {t.trustStrip.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#4A6B5D]">◇</span>
            {t.trustStrip.free}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#4A6B5D]">◇</span>
            {t.trustStrip.allFaiths}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#4A6B5D]">◇</span>
            {t.trustStrip.reservation}
          </span>
        </div>
      </div>

      {/* ================= 2. THREE PROMISES (EDITORIAL MINIMALIST LAYOUT) ================= */}
      {/* Replaced generic AI cards & mint fills with bespoke fine-line emblems & architectural dividers */}
      <section id="promises" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
              {t.promises.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              {t.promises.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#7A1A3A] mx-auto mt-5"></div>
          </div>

          {/* 3 Editorial Columns with Hairline Dividers */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1917]/10 mb-20">
            
            {/* Promise 1 — Open hand cradling light */}
            <div className="py-8 md:py-4 px-6 md:px-8 reveal-item delay-100">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-2xl text-[#7A1A3A]/40 font-bold">I</span>
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                    <path d="M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" opacity="0.6" />
                  </svg>
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-3">
                {t.promises.items[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans">
                {t.promises.items[0].desc}
              </p>
            </div>

            {/* Promise 2 — Lotus / Ripple of peace & no pressure */}
            <div className="py-8 md:py-4 px-6 md:px-8 reveal-item delay-200">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-2xl text-[#7A1A3A]/40 font-bold">II</span>
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4c-2.5 4-3.5 8-3.5 13 2-1 4.5-1 7 0 0-5-1-9-3.5-13z" />
                    <path d="M8.5 17c-3-1.5-5.5-4.5-6.5-8.5 3 0 6 2 7.5 5.5" opacity="0.7" />
                    <path d="M15.5 17c3-1.5 5.5-4.5 6.5-8.5-3 0-6 2-7.5 5.5" opacity="0.7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-3">
                {t.promises.items[1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans">
                {t.promises.items[1].desc}
              </p>
            </div>

            {/* Promise 3 — Sanctuary arch / trust emblem */}
            <div className="py-8 md:py-4 px-6 md:px-8 reveal-item delay-300">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-2xl text-[#7A1A3A]/40 font-bold">III</span>
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18M5 6v14M19 6v14" />
                    <path d="M2 3.5c6-.8 14-.8 20 0" />
                    <path d="M9 10h6" />
                    <circle cx="12" cy="15" r="1.5" />
                  </svg>
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-3">
                {t.promises.items[2].title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans">
                {t.promises.items[2].desc}
              </p>
            </div>

          </div>

          {/* Editorial Pullquote (Spacious & Refined) */}
          <div className="max-w-3xl mx-auto border-t border-[#1C1917]/10 pt-12 text-center reveal-item delay-400">
            <span className="text-3xl text-[#7A1A3A]/30 font-serif block mb-2">“</span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1C1917] leading-snug font-normal italic">
              {t.promises.callout}
            </p>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR HEART (WARM LINEN & ASYMMETRIC STORYTELLING) ================= */}
      {/* Replaced harsh mint green background with tranquil, natural linen tone */}
      <section id="heart" className="py-24 sm:py-32 bg-[#F2ECE4] text-[#1C1917]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Purpose Statement */}
            <div className="lg:col-span-5 reveal-item">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
                {t.heart.purposeBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4">
                {t.heart.title}
              </h2>
              <p className="font-serif text-lg sm:text-xl text-[#7A1A3A] italic mb-6">
                {t.heart.mission}
              </p>
              <div className="w-12 h-[1px] bg-[#7A1A3A]/40 mb-6"></div>
              <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans">
                {t.heart.purposeText}
              </p>
            </div>

            {/* Right: What You'll Experience (Subtle & Elegant) */}
            <div className="lg:col-span-7 space-y-8 reveal-item delay-200">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] border-b border-[#1C1917]/10 pb-4">
                {t.heart.experienceTitle}
              </h3>

              <div className="space-y-8">
                {t.heart.experiencePoints.map((item, idx) => (
                  <div key={item.num} className="flex gap-5 sm:gap-6 items-start">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#7A1A3A]/40 leading-none shrink-0 pt-1">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. OUR SPACE — REAL SANCTUARY GALLERY (GALLERY EXHIBITION LAYOUT) ================= */}
      {/* Real photos of Vancouver Center presented like an architectural editorial */}
      <section id="space" className="py-24 sm:py-32 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
              {t.space.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              {t.space.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#7A1A3A] mx-auto mt-5 mb-4"></div>
            <p className="text-sm sm:text-base text-[#6B645C] font-serif">
              {t.space.subtitle}
            </p>
          </div>

          {/* Exhibition Grid */}
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Photo 1: Seated & Reclined Care Session */}
            <div className="group reveal-item delay-100">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E8E2D8] shadow-sm">
                <Image 
                  src="/assets/dojo_session.jpg" 
                  alt={t.space.photos[0].alt} 
                  fill 
                  className="object-cover object-center img-editorial" 
                />
              </div>
              <div className="pt-4 flex items-baseline justify-between gap-4">
                <span className="font-serif text-base font-semibold text-[#1C1917]">
                  {t.space.photos[0].title}
                </span>
                <span className="text-xs text-[#7A1A3A] font-sans font-medium">
                  {t.space.photos[0].sub}
                </span>
              </div>
            </div>

            {/* Photo 2: Community Fellowship Table */}
            <div className="group reveal-item delay-200">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E8E2D8] shadow-sm">
                <Image 
                  src="/assets/dojo_community.jpg" 
                  alt={t.space.photos[2].alt} 
                  fill 
                  className="object-cover object-center img-editorial" 
                />
              </div>
              <div className="pt-4 flex items-baseline justify-between gap-4">
                <span className="font-serif text-base font-semibold text-[#1C1917]">
                  {t.space.photos[2].title}
                </span>
                <span className="text-xs text-[#7A1A3A] font-sans font-medium">
                  {t.space.photos[2].sub}
                </span>
              </div>
            </div>

            {/* Photo 3: Calm Session Room */}
            <div className="group reveal-item delay-300">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#E8E2D8] shadow-sm">
                <Image 
                  src="/assets/gallery_3.jpg" 
                  alt={t.space.photos[1].alt} 
                  fill 
                  className="object-cover object-center img-editorial" 
                />
              </div>
              <div className="pt-4 flex items-baseline justify-between gap-4">
                <span className="font-serif text-base font-semibold text-[#1C1917]">
                  {t.space.photos[1].title}
                </span>
                <span className="text-xs text-[#6B645C] font-sans">
                  {t.space.photos[1].sub}
                </span>
              </div>
            </div>

            {/* Photo 4: Unit E Entrance */}
            <div className="group reveal-item delay-400">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#E8E2D8] shadow-sm">
                <Image 
                  src="/assets/gallery_2.jpg" 
                  alt={t.space.photos[3].alt} 
                  fill 
                  className="object-cover object-center img-editorial" 
                />
              </div>
              <div className="pt-4 flex items-baseline justify-between gap-4">
                <span className="font-serif text-base font-semibold text-[#1C1917]">
                  {t.space.photos[3].title}
                </span>
                <span className="text-xs text-[#6B645C] font-sans">
                  {t.space.photos[3].sub}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 5. WHAT TO EXPECT (SERENE VERTICAL JOURNEY) ================= */}
      <section id="expect" className="py-24 sm:py-32 bg-white border-t border-[#1C1917]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
              {t.expect.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              {t.expect.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#7A1A3A] mx-auto mt-5 mb-4"></div>
            <p className="text-sm sm:text-base text-[#6B645C] font-serif">
              {t.expect.subtitle}
            </p>
          </div>

          {/* Minimalist Step Progression */}
          <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[1px] before:bg-[#1C1917]/15">
            {t.expect.steps.map((st, i) => (
              <div key={st.step} className="relative reveal-item" style={{ animationDelay: `${i * 150}ms` }}>
                {/* Connecting Node */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#7A1A3A]"></div>
                
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-serif font-bold text-[#7A1A3A] tracking-wider">
                    STEP {st.step}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full border border-[#1C1917]/15 text-[#6B645C] font-sans">
                    {st.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] mb-2">
                  {st.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B645C] leading-relaxed font-sans max-w-2xl">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. BEFORE YOU VISIT (BESPOKE VECTOR LINE ART, ZERO EMOJIS) ================= */}
      {/* Replaced AI emojis with clean artisanal architectural line drawings */}
      <section id="visit" className="py-24 sm:py-32 bg-[#FAF7F2] border-t border-[#1C1917]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
              {t.visit.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              {t.visit.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#7A1A3A] mx-auto mt-5"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Attire Card */}
            <div className="bg-white border border-[#1C1917]/10 rounded-2xl p-8 text-center reveal-item delay-100 hover:border-[#7A1A3A]/40 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                {/* Minimalist linen shirt line icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4l6 3 6-3 3 5-3 2v9H6v-9L3 9l3-5z" />
                  <path d="M9.5 5.75A3.5 3.5 0 0 0 14.5 5.75" />
                </svg>
              </div>
              <span className="text-[11px] font-serif font-bold tracking-widest text-[#7A1A3A]/60 block mb-1">
                01
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                {t.visit.items[0].title}
              </h3>
              <p className="text-sm text-[#6B645C] leading-relaxed font-sans">
                {t.visit.items[0].desc}
              </p>
            </div>

            {/* Belongings Card */}
            <div className="bg-white border border-[#1C1917]/10 rounded-2xl p-8 text-center reveal-item delay-200 hover:border-[#7A1A3A]/40 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                {/* Minimalist open hands icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V7a5 5 0 0 0-5-5z" opacity="0.3" />
                  <path d="M4 14l5-2 4 4 7-7" />
                  <path d="M18 9V5h-4" />
                </svg>
              </div>
              <span className="text-[11px] font-serif font-bold tracking-widest text-[#7A1A3A]/60 block mb-1">
                02
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                {t.visit.items[1].title}
              </h3>
              <p className="text-sm text-[#6B645C] leading-relaxed font-sans">
                {t.visit.items[1].desc}
              </p>
            </div>

            {/* Parking Card */}
            <div className="bg-white border border-[#1C1917]/10 rounded-2xl p-8 text-center reveal-item delay-300 hover:border-[#7A1A3A]/40 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#FAF7F2] border border-[#1C1917]/10 flex items-center justify-center text-[#7A1A3A]">
                {/* Minimalist architectural parking pin */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M9 16V8h4a2.5 2.5 0 0 1 0 5H9" />
                </svg>
              </div>
              <span className="text-[11px] font-serif font-bold tracking-widest text-[#7A1A3A]/60 block mb-1">
                03
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-3">
                {t.visit.items[2].title}
              </h3>
              <p className="text-sm text-[#6B645C] leading-relaxed font-sans">
                {t.visit.items[2].desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. YOUR HOSTS (EDITORIAL MAGAZINE PORTRAIT) ================= */}
      <section id="hosts" className="py-24 sm:py-32 bg-white border-t border-[#1C1917]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A1A3A] font-semibold block mb-3 font-sans">
              {t.hosts.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
              {t.hosts.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#7A1A3A] mx-auto mt-5"></div>
          </div>

          <div className="bg-[#FAF7F2] border border-[#1C1917]/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 sm:gap-12 reveal-item delay-150">
            
            {/* Host Portrait */}
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shrink-0 shadow-md border border-[#1C1917]/10 bg-white">
              <Image 
                src="/assets/staff_yui_takeda.jpg" 
                alt={`${t.hosts.name}, ${t.hosts.role}`} 
                fill 
                className="object-cover object-top" 
              />
            </div>

            {/* Introduction prose */}
            <div className="text-center md:text-left">
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-sans font-semibold text-[#7A1A3A] mb-2">
                {t.hosts.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-1">
                {t.hosts.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#8C827A] mb-6 font-sans">
                {t.hosts.role}
              </p>

              <div className="text-sm sm:text-base text-[#6B645C] leading-relaxed space-y-3 font-sans">
                <p>{t.hosts.intro1}</p>
                <p>{t.hosts.intro2}</p>
                <p>{t.hosts.intro3}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. FAQ (MINIMALIST CALM SANCTUARY ACCORDION) ================= */}
      <section id="faq" aria-labelledby="faq-heading" className="faq-accordion py-24 sm:py-32 bg-[#141312] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#4A6B5D] font-semibold block mb-3 font-sans">
              {t.faq.badge}
            </span>
            <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {t.faq.title}
            </h2>
            <div className="w-10 h-[1.5px] bg-[#4A6B5D] mx-auto mt-5"></div>
          </div>

          <div className="border-t border-white/12">
            {t.faq.items.map((item, idx) => (
              <details key={idx} className="py-6 group" open>
                <summary className="font-serif text-base sm:text-lg text-white font-medium flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="text-white/40 group-open:rotate-45 transition-transform text-xl font-sans font-light">
                    +
                  </span>
                </summary>
                <div className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed font-sans pl-2">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4 reveal-item delay-200">
            <p className="text-xs sm:text-sm text-white/60 font-serif">
              {t.faq.prompt}
            </p>
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/20 hover:border-[#4A6B5D] text-white text-xs tracking-wider uppercase font-medium transition-colors"
            >
              {t.faq.cta}
            </a>
          </div>

        </div>
      </section>

      {/* ================= 9. CTA BANNER, RESERVATION FORM & DOJO INFO ================= */}
      <section id="booking" className="py-24 sm:py-32 bg-[#1E1D1A] text-[#FAF7F2] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-item">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#4A6B5D] font-semibold block mb-3 font-sans">
              {t.booking.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {t.booking.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6B5D] font-medium tracking-wide">
              {t.booking.hours}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Reservation Form */}
            <div className="lg:col-span-7 bg-[#FAF7F2] text-[#1C1917] rounded-3xl p-7 sm:p-10 shadow-xl reveal-item delay-100">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2">
                {t.booking.form.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B645C] mb-8 font-sans">
                {t.booking.form.subtitle}
              </p>

              {submitStatus === "success" ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <div className="text-3xl mb-3">🕊️</div>
                  <h4 className="font-serif font-bold text-emerald-800 text-lg mb-2">
                    {t.booking.form.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed font-sans">
                    {t.booking.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5 font-sans">
                      {t.booking.form.fullNameLabel}
                    </label>
                    <input 
                      id="full-name"
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.booking.form.fullNamePlaceholder} 
                      className="w-full px-4 py-3 rounded-xl border border-[#1C1917]/15 bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#7A1A3A] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email-addr" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5 font-sans">
                        {t.booking.form.emailLabel}
                      </label>
                      <input 
                        id="email-addr"
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.booking.form.emailPlaceholder} 
                        className="w-full px-4 py-3 rounded-xl border border-[#1C1917]/15 bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#7A1A3A] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone-num" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5 font-sans">
                        {t.booking.form.phoneLabel}
                      </label>
                      <input 
                        id="phone-num"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.booking.form.phonePlaceholder} 
                        className="w-full px-4 py-3 rounded-xl border border-[#1C1917]/15 bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#7A1A3A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="pref-time" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5 font-sans">
                      {t.booking.form.timeLabel}
                    </label>
                    <input 
                      id="pref-time"
                      type="datetime-local" 
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#1C1917]/15 bg-white text-sm text-[#6B645C] focus:outline-none focus:border-[#7A1A3A] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-1.5 font-sans">
                      {t.booking.form.notesLabel}
                    </label>
                    <textarea 
                      id="notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.booking.form.notesPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-[#1C1917]/15 bg-white text-sm text-[#1C1917] focus:outline-none focus:border-[#7A1A3A] transition-colors"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-[#7A1A3A] hover:bg-[#5E122B] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? t.booking.form.submittingBtn : t.booking.form.submitBtn}
                  </button>

                  {submitStatus === "error" && (
                    <p className="text-xs text-rose-600 text-center font-sans">
                      {t.booking.form.errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Direct Contact & Google Map */}
            <div className="lg:col-span-5 space-y-6 reveal-item delay-200">
              
              {/* Quick Contact Card */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 text-sm">
                <h4 className="font-serif font-bold text-white text-lg mb-4">
                  {t.booking.contactCard.title}
                </h4>
                <div className="space-y-3 text-white/80 text-xs sm:text-sm font-sans leading-relaxed">
                  <p>📍 <strong className="text-white">{t.booking.contactCard.addressLabel}</strong> {t.booking.contactCard.addressVal}</p>
                  <p>🕒 <strong className="text-white">{t.booking.contactCard.hoursLabel}</strong> {t.booking.contactCard.hoursVal}</p>
                  <p>
                    📞 <strong className="text-white">{t.booking.contactCard.phoneLabel}</strong>{" "}
                    <a href="tel:+16045682867" className="text-[#4A6B5D] hover:underline font-medium">
                      +1 (604) 568-2867
                    </a>
                  </p>
                  <p>
                    ✉️ <strong className="text-white">{t.booking.contactCard.emailLabel}</strong>{" "}
                    <a href="mailto:info-can@worlddivinelight.org" className="text-[#4A6B5D] hover:underline font-medium">
                      info-can@worlddivinelight.org
                    </a>
                  </p>
                </div>

                {/* Direct Action Buttons: Voice Call & Email (Zero SMS) */}
                <div className="mt-6 pt-5 border-t border-white/10 flex gap-3">
                  <a 
                    href="tel:+16045682867" 
                    className="flex-1 py-3 rounded-full bg-[#7A1A3A] hover:bg-[#5E122B] text-white font-medium text-xs tracking-wider uppercase text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    {t.booking.contactCard.callBtn}
                  </a>
                  <a 
                    href="mailto:info-can@worlddivinelight.org" 
                    className="flex-1 py-3 rounded-full border border-white/20 hover:border-[#4A6B5D] text-white font-medium text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    {t.booking.contactCard.emailBtn}
                  </a>
                </div>

                <p className="text-[11px] text-white/45 mt-4 pt-3 border-t border-white/5 text-center font-sans tracking-wide">
                  {t.booking.contactCard.badge}
                </p>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-white/10 h-60 relative">
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
                  className="absolute top-3 left-3 bg-white/95 hover:bg-white text-[#1C1917] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm transition-all flex items-center gap-1"
                >
                  {t.booking.contactCard.mapBtn}
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 10. MINIMAL FOOTER ================= */}
      <footer className="bg-[#0E0D0C] text-white/60 py-12 px-4 text-center text-xs border-t border-white/10 font-sans">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-serif text-base sm:text-lg text-white font-bold tracking-wide">
            {t.footer.org}
          </p>
          <p className="text-[11px] text-white/40 tracking-wider">
            {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* ================= MOBILE STICKY BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#1C1917]/10 px-4 py-2.5 flex items-center gap-2.5">
        <a 
          href="tel:+16045682867" 
          className="flex-1 py-2.5 rounded-full border border-[#7A1A3A]/40 text-[#7A1A3A] text-center text-xs font-semibold bg-white flex items-center justify-center gap-1"
        >
          {t.mobileBar.callBtn}
        </a>
        <a 
          href="#booking" 
          className="flex-[2] py-2.5 rounded-full bg-[#7A1A3A] text-white text-center text-xs font-semibold shadow-sm"
        >
          {t.mobileBar.reserveBtn}
        </a>
      </div>

    </div>
  );
}
