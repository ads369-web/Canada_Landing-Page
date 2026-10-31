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
    <div className="min-h-screen bg-[#FAF8F2] text-[#2E2618]">

      {/* ================= HEADER & NAVIGATION ================= */}
      <header className="sticky top-0 z-50 bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#E8E2D5] px-4 sm:px-6 py-3 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">
              <Image 
                src="/assets/wdl_logo.png" 
                alt="World Divine Light" 
                width={48} 
                height={48} 
                className="object-contain" 
                priority
              />
            </div>
            <div className="border-l border-[#E8E2D5] pl-3 flex flex-col justify-center">
              <span className="block font-serif font-bold text-sm sm:text-base text-[#9E7422] group-hover:text-[#7A5515] leading-tight transition-colors">
                Vancouver Spiritual Center
              </span>
              <span className="block text-[11px] text-[#6C5D4B] font-medium tracking-wide">
                World Divine Light Organization (Canada)
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#554C42]">
            <a href="#promises" className="hover:text-[#14110C] transition-colors">Promises</a>
            <a href="#space" className="hover:text-[#14110C] transition-colors">Our Space</a>
            <a href="#heart" className="hover:text-[#14110C] transition-colors">Our Heart</a>
            <a href="#expect" className="hover:text-[#14110C] transition-colors">What to Expect</a>
            <a href="#visit" className="hover:text-[#14110C] transition-colors">Before You Visit</a>
            <a href="#hosts" className="hover:text-[#14110C] transition-colors">Your Hosts</a>
            <a href="#faq" className="hover:text-[#14110C] transition-colors">FAQ</a>
          </nav>

          {/* Top CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-4 md:px-5 py-2 rounded-full bg-[#C09040] hover:bg-[#b08032] text-[#14110C] text-xs md:text-sm font-semibold transition-all shadow-sm"
            >
              Reserve a Session
            </a>
          </div>

        </div>
      </header>

      {/* ================= 1. ヒーロー (HERO) ================= */}
      {/* Headline: Experience the Power of Spiritual Harmony. */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 text-center">
        
        {/* Full Hero Photo Background with Light/Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero.jpg" 
            alt="Spiritual Harmony at Vancouver Spiritual Center" 
            fill 
            className="object-cover object-center" 
            priority
          />
          {/* Light overlay so trees and sunlight are clear and vibrant */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/35"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-block border border-[#C09040]/70 text-[#F5E9CC] rounded-full px-5 py-1.5 text-xs uppercase tracking-wider font-semibold mb-6 bg-black/25 backdrop-blur-sm shadow-sm">
            Federal Non-Profit Corporation in Canada
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
            Experience the Power of<br />
            Spiritual Harmony.
          </h1>

          {/* Subcopy */}
          <div className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/95 leading-relaxed mb-8 drop-shadow">
            <p>
              From physical fatigue and daily stress to friction with loved ones, this gentle energy practice helps you unwind, reset, and reconnect with yourself.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <a 
              href="#booking" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#C09040] hover:bg-[#b08032] text-[#14110C] font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Experience the Power of Divine Light
            </a>
            <a 
              href="tel:+16045682867" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#C09040] text-[#F5E9CC] hover:bg-black/40 font-semibold text-sm transition-all bg-black/25 backdrop-blur-sm shadow-sm"
            >
              Call +1 (604) 568-2867
            </a>
          </div>

          {/* Micro Copy */}
          <p className="text-xs sm:text-sm text-white/85 italic drop-shadow">
            First visit is completely free. No obligation, no pressure.
          </p>

        </div>
      </section>

      {/* ================= 2. ポイント一覧 (THREE PROMISES) ================= */}
      {/* Free to join / No pressure / Trusted & safe */}
      <section id="promises" className="py-20 bg-white border-y border-[#E8E2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center text-[#14110C] mb-12">
            Three promises
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Promise 1 */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">🤍</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">Free to join</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                There is no required fee. As a non-profit organization, love donations are purely optional and welcome.
              </p>
            </div>

            {/* Promise 2 */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">No pressure</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                No sales pitch, and no pressure to change your beliefs. Open to everyone — no prior background or spiritual experience needed.
              </p>
            </div>

            {/* Promise 3 */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">🕊</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">Trusted & safe</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                A Federal Non-Profit Corporation in Canada run by caring volunteers dedicated to the peace and well-being of the community.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3. ギャラリー (OUR SPACE) ================= */}
      {/* 3 Images of Vancouver Center */}
      <section id="space" className="py-20 bg-[#FAF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center text-[#14110C] mb-12">
            Our space
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Photo 1 */}
            <div className="group rounded-2xl overflow-hidden border border-[#C09040]/25 shadow-sm bg-white aspect-[4/3] relative">
              <Image 
                src="/assets/gallery_1.jpg" 
                alt="Vancouver Spiritual Center main sanctuary space" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Photo 2 */}
            <div className="group rounded-2xl overflow-hidden border border-[#C09040]/25 shadow-sm bg-white aspect-[4/3] relative">
              <Image 
                src="/assets/gallery_2.jpg" 
                alt="Peaceful session seating area" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Photo 3 */}
            <div className="group rounded-2xl overflow-hidden border border-[#C09040]/25 shadow-sm bg-white aspect-[4/3] relative">
              <Image 
                src="/assets/gallery_3.jpg" 
                alt="Welcoming tea and reflection lounge" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. 文章 (OUR HEART) ================= */}
      {/* Our heart / Our Mission: Bringing Light and Harmony to Everyday Life */}
      <section id="heart" className="py-20 bg-white border-y border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14110C] mb-3">
              Our heart
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#9E7422] italic">
              Our Mission: Bringing Light and Harmony to Everyday Life
            </p>
          </div>

          {/* Mission Statement Intro */}
          <div className="bg-[#FAF8F2] border border-[#C09040]/30 rounded-2xl p-6 sm:p-10 shadow-sm mb-12">
            <p className="text-base sm:text-lg text-[#3E3426] leading-relaxed">
              World Divine Light was established to help people regain their innermost heart of unconditional love, sincerity, and peace. We believe that the soul, mind, and body are deeply interconnected. When we purify and care for the spiritual source first, positive energy naturally flows down to revitalize our mind, body, and daily lives. Our purpose is to share this universal practice so that everyone can become &ldquo;people of light&rdquo;&mdash;bringing warmth, harmony, and well-being to their homes, workplaces, and communities.
            </p>
          </div>

          {/* What You'll Experience Subsection */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center text-[#14110C] mb-8">
              What You&rsquo;ll Experience
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Item 1 */}
              <div className="bg-[#FAF8F2] border border-[#C09040]/30 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#C09040]/15 text-[#9E7422] flex items-center justify-center text-lg mb-4 font-bold">
                  ✨
                </div>
                <h4 className="font-serif text-lg font-bold text-[#14110C] mb-2 leading-snug">
                  Purifying Soul, Mind, and Body
                </h4>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  Based on the principle that spirit, mind, and body are connected, the Art of Divine Light purifies the spiritual aspect at its source, helping relieve fatigue and restore natural balance.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-[#FAF8F2] border border-[#C09040]/30 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#C09040]/15 text-[#9E7422] flex items-center justify-center text-lg mb-4 font-bold">
                  🌱
                </div>
                <h4 className="font-serif text-lg font-bold text-[#14110C] mb-2 leading-snug">
                  Learning Universal Laws with an Open Mind
                </h4>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  Discover universal principles that complement your existing values. People of all backgrounds and faiths are welcome with no need to convert.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-[#FAF8F2] border border-[#C09040]/30 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#C09040]/15 text-[#9E7422] flex items-center justify-center text-lg mb-4 font-bold">
                  🕊
                </div>
                <h4 className="font-serif text-lg font-bold text-[#14110C] mb-2 leading-snug">
                  Becoming &ldquo;People of Light&rdquo;
                </h4>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  Through purification and universal principles, cultivate inner positivity and bring warmth, clarity, and harmony into your home, work, and community.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. 当日の流れ (WHAT TO EXPECT) ================= */}
      {/* Warm welcome / The Divine Light session / After talk */}
      <section id="expect" className="py-20 bg-[#FAF8F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center text-[#14110C] mb-12">
            What to expect
          </h2>

          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="bg-white border border-[#C09040]/25 rounded-2xl p-6 sm:p-7 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C09040] text-[#14110C] font-serif font-bold text-lg flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#14110C] mb-1 flex items-center gap-2">
                  Warm welcome
                  <span className="text-xs font-sans font-medium text-[#C09040]">
                    about 10 min
                  </span>
                </h3>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  Our staff greet you with a smile and a short introduction in a quiet room.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#C09040]/25 rounded-2xl p-6 sm:p-7 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C09040] text-[#14110C] font-serif font-bold text-lg flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#14110C] mb-1 flex items-center gap-2">
                  The Divine Light session
                  <span className="text-xs font-sans font-medium text-[#C09040]">
                    30 min
                  </span>
                </h3>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  Sit comfortably, close your eyes and relax while the gentle Divine Light is transmitted.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#C09040]/25 rounded-2xl p-6 sm:p-7 shadow-sm flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C09040] text-[#14110C] font-serif font-bold text-lg flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#14110C] mb-1 flex items-center gap-2">
                  After talk
                  <span className="text-xs font-sans font-medium text-[#C09040]">
                    about 10 min
                  </span>
                </h3>
                <p className="text-sm text-[#554C42] leading-relaxed">
                  After the session, we talk calmly about what you felt and any questions over a warm cup of tea.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. ポイント一覧 (BEFORE YOU VISIT) ================= */}
      {/* Attire / What to bring / Parking */}
      <section id="visit" className="py-20 bg-white border-y border-[#E8E2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-center text-[#14110C] mb-12">
            Before you visit
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Attire */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">Attire</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                Casual is fine. Jeans and everyday clothes are completely OK. Clean socks are requested indoors.
              </p>
            </div>

            {/* What to bring */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">What to bring</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                Nothing at all. Just come as you are.
              </p>
            </div>

            {/* Parking */}
            <div className="lp-card bg-[#FAF8F2] border border-[#C09040]/25 rounded-2xl p-7 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-3">Parking</h3>
              <p className="text-sm text-[#554C42] leading-relaxed">
                Convenient on-site parking is available directly outside Unit E at 2800 Douglas Road in Burnaby.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 7. スタッフ紹介 (YOUR HOSTS) ================= */}
      {/* Yui Takeda */}
      <section id="hosts" className="py-20 bg-[#FAF8F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14110C] mb-3">
            Your hosts
          </h2>
          <div className="w-16 h-0.5 bg-[#C09040] mx-auto mb-10"></div>

          <div className="max-w-lg mx-auto">
            
            {/* Host Image */}
            <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden shadow-md border-2 border-[#C09040]/40">
              <Image 
                src="/assets/staff_yui_takeda.jpg" 
                alt="Yui Takeda" 
                fill 
                className="object-cover object-top" 
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#14110C] mb-1">
              Yui Takeda
            </h3>
            <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#7A6840] mb-6">
              Minister
            </p>

            <div className="text-sm sm:text-base text-[#2E2618] leading-relaxed space-y-3">
              <p>Welcome! My name is Yui Takeda.</p>
              <p>
                Having served as a minister for over a decade, I am dedicated to sharing our teachings, offering Divine Light, and supporting everyone in our community.
              </p>
              <p>I truly look forward to meeting you at our centre!</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 8. よくある質問 (FAQ) ================= */}
      {/* Frequently asked questions - all items from LP Studio */}
      <section id="faq" className="py-20 bg-[#FAF8F2] border-y border-[#E8E2D5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14110C] mb-3">
              Frequently asked questions
            </h2>
            <div className="w-16 h-0.5 bg-[#C09040] mx-auto"></div>
          </div>

          <div className="space-y-4">
            
            {/* Item 1 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none" open>
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ Q: Is this event really free?</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

            {/* Item 2 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ A: There is no required fee. As a non-profit organization, love donations are purely optional and welcome.</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

            {/* Item 3 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ Q: Do I need to belong to a specific religion or faith?</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

            {/* Item 4 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ A: Open to everyone — no prior background or spiritual experience needed.</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

            {/* Item 5 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ Q: Is reservation required?</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

            {/* Item 6 */}
            <details className="bg-white border border-[#E8E2D5] rounded-xl p-5 sm:p-6 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-start justify-between cursor-pointer font-semibold text-sm sm:text-base text-[#14110C] gap-3">
                <span>▼ A: Yes, space is limited, so prior reservation is required.</span>
              </summary>
              <div className="mt-3 pt-3 border-t border-[#E8E2D5]/70 text-sm text-[#6C655E] leading-relaxed">
                Please call or email us and we will be glad to help.
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* ================= 9. 申込みバナー & 予約フォーム (CTA BANNER) ================= */}
      {/* Experience the Power of Divine Light */}
      <section id="booking" className="py-20 bg-[#14110C] text-[#F5E9CC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Experience the Power of Divine Light
            </h2>
            <p className="text-sm sm:text-base text-[#F5E9CC]/80">
              Hours: Tue - Fri 12:00 PM – 7:00 PM / Sat - Sun 10:00 AM – 4:00 PM (Mon Closed)
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Reservation Form */}
            <div className="lg:col-span-7 bg-[#FAF8F2] text-[#2E2618] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-[#14110C] mb-2">
                Reserve Your Spot
              </h3>
              <p className="text-xs text-[#554C42] mb-6">
                Please fill out this form to request a one-on-one session. There is no mandatory fee.
              </p>

              {submitStatus === "success" ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
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
                    <label className="block text-xs font-semibold text-[#14110C] mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe" 
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-white text-sm focus:outline-none focus:border-[#C09040]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#14110C] mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-white text-sm focus:outline-none focus:border-[#C09040]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#14110C] mb-1">
                        Phone (Call/SMS)
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (604) 000-0000" 
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-white text-sm focus:outline-none focus:border-[#C09040]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#14110C] mb-1">
                      Preferred Date & Time
                    </label>
                    <input 
                      type="datetime-local" 
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-white text-sm focus:outline-none focus:border-[#C09040] text-[#554C42]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#14110C] mb-1">
                      Questions or Notes
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know if you have any questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D5] bg-white text-sm focus:outline-none focus:border-[#C09040]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#C09040] hover:bg-[#b08032] text-[#14110C] font-semibold text-sm transition-all shadow-md disabled:opacity-50"
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
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm">
                <h4 className="font-serif font-bold text-white text-base mb-3">
                  Vancouver Spiritual Center (Burnaby)
                </h4>
                <div className="space-y-2 text-[#F5E9CC]/80 text-xs sm:text-sm">
                  <p><strong>📍 Address:</strong> 2800 Douglas Road, Unit E, Burnaby, B.C. V5C 5B7</p>
                  <p>
                    <strong>📞 Phone:</strong>{" "}
                    <a href="tel:+16045682867" className="text-[#C09040] hover:underline">
                      +1 (604) 568-2867
                    </a>
                  </p>
                  <p>
                    <strong>✉️ Email:</strong>{" "}
                    <a href="mailto:info-can@worlddivinelight.org" className="text-[#C09040] hover:underline">
                      info-can@worlddivinelight.org
                    </a>
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
                  <a 
                    href="tel:+16045682867" 
                    className="flex-1 py-2 rounded-xl bg-[#C09040] text-[#14110C] font-semibold text-xs text-center transition-all"
                  >
                    Call Directly
                  </a>
                  <a 
                    href="sms:+16045682867&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20Divine%20Light%20session." 
                    className="flex-1 py-2 rounded-xl border border-[#C09040] text-[#C09040] font-semibold text-xs text-center transition-all"
                  >
                    Text (SMS)
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-56 relative group">
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
                  className="absolute top-2.5 left-2.5 bg-white/90 hover:bg-white text-sky-700 px-3 py-1 rounded-lg text-xs font-semibold shadow-md backdrop-blur-sm transition-all flex items-center gap-1"
                >
                  Open in Maps ↗
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 10. フッター (FOOTER) ================= */}
      {/* Minimal Footer (no duplicate dojo info) */}
      <footer className="bg-[#0A0806] text-[#F5E9CC]/70 py-10 px-4 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-serif text-base sm:text-lg text-white font-bold tracking-wide">
            World Divine Light Organization
          </p>
          <p className="text-[11px] opacity-50">
            © 2026 Vancouver Spiritual Center · World Divine Light Organization. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ================= MOBILE STICKY BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F2]/95 backdrop-blur-md border-t border-[#E8E2D5] px-4 py-2.5 flex items-center gap-2">
        <a 
          href="sms:+16045682867&body=Hello%2C%20I%20would%20like%20to%20reserve%20a%20Divine%20Light%20session%20at%20the%20Vancouver%20Center." 
          className="flex-1 py-2.5 rounded-full border border-[#C09040] text-[#C09040] text-center text-xs font-semibold"
        >
          💬 SMS Us
        </a>
        <a 
          href="#booking" 
          className="flex-[2] py-2.5 rounded-full bg-[#C09040] text-[#14110C] text-center text-xs font-semibold shadow-sm"
        >
          Reserve a Session
        </a>
      </div>

    </div>
  );
}
