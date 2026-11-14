export type Lang = "en" | "ja";

export interface Translations {
  header: {
    title: string;
    org: string;
    nav: {
      promises: string;
      heart: string;
      space: string;
      expect: string;
      visit: string;
      hosts: string;
      faq: string;
    };
    cta: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    primaryCta: string;
    phoneCta: string;
    microcopy: string;
    imageAlt: string;
  };
  trustStrip: {
    location: string;
    free: string;
    allFaiths: string;
    reservation: string;
  };
  promises: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
    callout: string;
  };
  heart: {
    title: string;
    mission: string;
    purposeBadge: string;
    purposeText: string;
    experienceTitle: string;
    experiencePoints: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  space: {
    title: string;
    subtitle: string;
    photos: Array<{
      title: string;
      sub: string;
      alt: string;
    }>;
  };
  expect: {
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      time: string;
      desc: string;
    }>;
  };
  visit: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  hosts: {
    title: string;
    badge: string;
    name: string;
    role: string;
    intro1: string;
    intro2: string;
    intro3: string;
  };
  faq: {
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
    prompt: string;
    cta: string;
  };
  booking: {
    heading: string;
    hours: string;
    form: {
      title: string;
      subtitle: string;
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      timeLabel: string;
      notesLabel: string;
      notesPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successDesc: string;
      errorMsg: string;
    };
    contactCard: {
      title: string;
      addressLabel: string;
      addressVal: string;
      hoursLabel: string;
      hoursVal: string;
      phoneLabel: string;
      emailLabel: string;
      callBtn: string;
      emailBtn: string;
      mapBtn: string;
      badge: string;
    };
  };
  footer: {
    org: string;
    copyright: string;
  };
  mobileBar: {
    callBtn: string;
    reserveBtn: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    header: {
      title: "Vancouver Spiritual Center",
      org: "World Divine Light (Canada)",
      nav: {
        promises: "Promises",
        heart: "Our Heart",
        space: "Our Space",
        expect: "What to Expect",
        visit: "Before You Visit",
        hosts: "Your Hosts",
        faq: "FAQ",
      },
      cta: "Reserve a Session",
    },
    hero: {
      badge: "Federal Non-Profit Corporation in Canada",
      titleMain: "Experience the Power of ",
      titleHighlight: "Spiritual Harmony.",
      subtitle:
        "From physical fatigue and daily stress to friction with loved ones, this gentle energy practice helps you unwind, reset, and reconnect with yourself.",
      primaryCta: "Experience the Power of Divine Light",
      phoneCta: "Call +1 (604) 568-2867",
      microcopy: "First visit is completely free. No obligation, no pressure.",
      imageAlt: "Warm sunlight shining through forest trees representing Spiritual Harmony",
    },
    trustStrip: {
      location: "Burnaby · Vancouver, BC",
      free: "100% Free to Attend",
      allFaiths: "Open to All Faiths",
      reservation: "Prior Reservation Required",
    },
    promises: {
      title: "Three promises",
      items: [
        {
          title: "Free to join",
          desc: "There is no required fee. As a non-profit organization, love donations are purely optional and welcome.",
        },
        {
          title: "No pressure",
          desc: "No sales pitch, and no pressure to change your beliefs. Open to everyone — no prior background or spiritual experience needed.",
        },
        {
          title: "Trusted & safe",
          desc: "A Federal Non-Profit Corporation in Canada run by caring volunteers dedicated to the peace and well-being of the community.",
        },
      ],
      callout:
        "A peaceful, multicultural spiritual family helping visitors improve life through Divine Light and universal principles.",
    },
    heart: {
      title: "Our heart",
      mission: "Our Mission: Bringing Light and Harmony to Everyday Life",
      purposeBadge: "Our Purpose",
      purposeText:
        'World Divine Light was established to help people regain their innermost heart of unconditional love, sincerity, and peace. We believe that the soul, mind, and body are deeply interconnected. When we purify and care for the spiritual source first, positive energy naturally flows down to revitalize our mind, body, and daily lives. Our purpose is to share this universal practice so that everyone can become "people of light"—bringing warmth, harmony, and well-being to their homes, workplaces, and communities.',
      experienceTitle: "What You’ll Experience",
      experiencePoints: [
        {
          num: "1",
          title: "Purifying Soul, Mind, and Body",
          desc: "Based on the principle that spirit, mind, and body are connected, the Art of Divine Light purifies the spiritual aspect at its source, helping relieve fatigue and restore natural balance.",
        },
        {
          num: "2",
          title: "Learning Universal Laws with an Open Mind",
          desc: "Discover universal principles that complement your existing values. People of all backgrounds and faiths are welcome with no need to convert.",
        },
        {
          num: "3",
          title: 'Becoming "People of Light"',
          desc: "Through purification and universal principles, cultivate inner positivity and bring warmth, clarity, and harmony into your home, work, and community.",
        },
      ],
    },
    space: {
      title: "Our space",
      subtitle:
        "A warm, welcoming sanctuary in Burnaby designed for peaceful Divine Light sessions and friendly fellowship.",
      photos: [
        {
          title: "Divine Light Sanctuary",
          sub: "Seated & Reclined Care",
          alt: "Practitioners gently offering Divine Light in our Burnaby sanctuary",
        },
        {
          title: "Restful Session Area",
          sub: "Clean & Calm Setting",
          alt: "Quiet session chairs and peaceful table space",
        },
        {
          title: "Warm Fellowship & After-Talk",
          sub: "Community Table",
          alt: "Visitors and center members chatting warmly around the table",
        },
        {
          title: "Unit E Entrance Door",
          sub: "2800 Douglas Rd, Burnaby",
          alt: "Unit E doorway sign reading Divine Light SMBK-Canada",
        },
      ],
    },
    expect: {
      title: "What to expect",
      subtitle: "Your first visit is relaxed, unhurried, and lasts under an hour.",
      steps: [
        {
          step: "01",
          title: "Warm welcome",
          time: "about 10 min",
          desc: "Our staff greet you with a smile and a short introduction in a quiet room.",
        },
        {
          step: "02",
          title: "The Divine Light session",
          time: "30 min",
          desc: "Sit comfortably, close your eyes and relax while the gentle Divine Light is transmitted.",
        },
        {
          step: "03",
          title: "After talk",
          time: "about 10 min",
          desc: "After the session, we talk calmly about what you felt and any questions over a warm cup of tea.",
        },
      ],
    },
    visit: {
      title: "Before you visit",
      items: [
        {
          icon: "👕",
          title: "Attire",
          desc: "Casual is fine. Jeans and everyday clothes are completely OK. Clean socks are requested indoors.",
        },
        {
          icon: "🎒",
          title: "What to bring",
          desc: "Nothing at all. Just come as you are.",
        },
        {
          icon: "🚗",
          title: "Parking",
          desc: "Convenient on-site parking is available directly outside Unit E at 2800 Douglas Road in Burnaby.",
        },
      ],
    },
    hosts: {
      title: "Your hosts",
      badge: "Meet Your Minister",
      name: "Yui Takeda",
      role: "Minister",
      intro1: "Welcome! My name is Yui Takeda.",
      intro2:
        "Having served as a minister for over a decade, I am dedicated to sharing our teachings, offering Divine Light, and supporting everyone in our community.",
      intro3: "I truly look forward to meeting you at our centre!",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Q: Is this event really free?",
          a: "A: There is no required fee. As a non-profit organization, love donations are purely optional and welcome.",
        },
        {
          q: "Q: Do I need to belong to a specific religion or faith?",
          a: "A: Open to everyone — no prior background or spiritual experience needed.",
        },
        {
          q: "Q: Is reservation required?",
          a: "A: Yes, space is limited, so prior reservation is required.",
        },
      ],
      prompt: "Please call or email us and we will be glad to help.",
      cta: "Have more questions?",
    },
    booking: {
      heading: "Experience the Power of Divine Light",
      hours: "Hours: Tue - Fri 12:00 PM – 7:00 PM / Sat - Sun 10:00 AM – 4:00 PM (Mon Closed)",
      form: {
        title: "Reserve Your Spot",
        subtitle: "Please fill out this form to request a one-on-one session. There is no mandatory fee.",
        fullNameLabel: "Full Name *",
        fullNamePlaceholder: "Jane Doe",
        emailLabel: "Email Address *",
        emailPlaceholder: "jane@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+1 (604) 000-0000",
        timeLabel: "Preferred Date & Time",
        notesLabel: "Questions or Notes",
        notesPlaceholder: "Let us know if you have any questions...",
        submitBtn: "Confirm Reservation Request",
        submittingBtn: "Sending Request...",
        successTitle: "Reservation Request Sent!",
        successDesc:
          "Thank you for reaching out. We will contact you via email or phone shortly to confirm your session.",
        errorMsg:
          "Failed to send request. Please try calling us directly or emailing info-can@worlddivinelight.org.",
      },
      contactCard: {
        title: "Vancouver Spiritual Center (Burnaby)",
        addressLabel: "Address:",
        addressVal: "2800 Douglas Road, Unit E, Burnaby, B.C. V5C 5B7",
        hoursLabel: "Hours:",
        hoursVal: "Tue–Fri 12:00 PM – 7:00 PM / Sat–Sun 10:00 AM – 4:00 PM (Mon Closed)",
        phoneLabel: "Phone:",
        emailLabel: "Email:",
        callBtn: "📞 Call Directly",
        emailBtn: "✉️ Email Directly",
        mapBtn: "Open in Maps ↗",
        badge: "Federal Non-Profit Corporation in Canada",
      },
    },
    footer: {
      org: "World Divine Light Organization",
      copyright: "© 2026 Vancouver Spiritual Center · World Divine Light Organization. All Rights Reserved.",
    },
    mobileBar: {
      callBtn: "📞 Call Us",
      reserveBtn: "Reserve a Session",
    },
  },
  ja: {
    header: {
      title: "バンクーバー道場",
      org: "真光（カナダ・非営利法人）",
      nav: {
        promises: "3つのお約束",
        heart: "私たちの思い",
        space: "道場の雰囲気",
        expect: "当日の流れ",
        visit: "ご来訪にあたって",
        hosts: "スタッフ紹介",
        faq: "よくある質問",
      },
      cta: "体験予約",
    },
    hero: {
      badge: "カナダ連邦政府公認 非営利法人",
      titleMain: "心と体の調和を取り戻す、",
      titleHighlight: "お浄めの体験。",
      subtitle:
        "日々の疲労やストレス、人間関係の悩みから解放され、心身をリセットして本来の調和と温もりを取り戻す優しいエネルギーの体験です。",
      primaryCta: "お浄めを体験してみる",
      phoneCta: "📞 お電話 +1 (604) 568-2867",
      microcopy: "初回のご体験は完全無料です。勧誘・改宗などは一切ありません。",
      imageAlt: "森の木々から差し込む温かい光（心と魂の調和を象徴）",
    },
    trustStrip: {
      location: "カナダ・バーナビー（バンクーバー近郊）",
      free: "初回参加無料",
      allFaiths: "どなたでも歓迎（改宗不要）",
      reservation: "事前予約制",
    },
    promises: {
      title: "3つのお約束",
      items: [
        {
          title: "参加は無料",
          desc: "参加費などの義務はありません。非営利団体として運営されており、自発的なお志（ドネーション）のみ歓迎しております。",
        },
        {
          title: "勧誘・無理強いなし",
          desc: "物品販売や教えの強要などは一切ありません。信仰や背景を問わず、どなたでも安心してお越しいただけます。",
        },
        {
          title: "安心と信頼の運営",
          desc: "カナダ連邦公認の非営利法人として、地域の平和と皆様の心身の調和を願う献身的なスタッフによって運営されています。",
        },
      ],
      callout:
        "神聖な光と普遍的な法則を通じて、訪れるすべての方々の人生がより豊かで調和に満ちたものとなるよう寄り添う、温かく平和なコミュニティです。",
    },
    heart: {
      title: "私たちの思い",
      mission: "使命：日常生活に光と調和をもたらす",
      purposeBadge: "私たちの目的",
      purposeText:
        "「真光（World Divine Light）」は、人々が無条件の愛と誠、そして真の安らぎに満ちた本来の心を取り戻すお手伝いをするために設立されました。私たちは、魂・心・体が深くつながっていると考えています。根源である魂を浄めることで、澄んだエネルギーが自然と心や体、そして日々の暮らしへと巡っていきます。私たちの目的は、この普遍的なお浄めの実践を分かち合い、誰もが温もり・調和・幸福を家庭や職場、地域社会へと広げる「光の人」となれるよう支えることです。",
      experienceTitle: "ご体験いただける3つのこと",
      experiencePoints: [
        {
          num: "1",
          title: "魂・心・体の調和と浄化",
          desc: "霊（魂）・心・体は一つであるという原理に基づき、「神の光」の手技によって精神的・霊的な根本から浄め、日々の疲労を和らげ自然なバランスを取り戻します。",
        },
        {
          num: "2",
          title: "普遍的な法則を学ぶ",
          desc: "これまでの価値観や信仰を大切にしながら、より生きやすくなる普遍の法則を学べます。どのような宗教・文化的背景の方も改宗の必要なくご参加いただけます。",
        },
        {
          num: "3",
          title: "「光の人」となって調和を広げる",
          desc: "お浄めと普遍の法則の実践を通じて内なる前向きさを育み、ご家庭や職場、周囲の人々へ温もりと調和をもたらす存在へと歩んでいただけます。",
        },
      ],
    },
    space: {
      title: "道場の雰囲気",
      subtitle:
        "バーナビーにある道場は、静かで落ち着いたお浄めのセッションと温かな交流ができる心地よい空間です。",
      photos: [
        {
          title: "お浄めのサンクチュアリ",
          sub: "椅子席・ベッド席完備",
          alt: "バーナビー道場でお浄めを静かに受けている様子",
        },
        {
          title: "落ち着いたセッション空間",
          sub: "清潔で静かな環境",
          alt: "セッション用の椅子と穏やかなスペース",
        },
        {
          title: "温かな交流とお茶の時間",
          sub: "コミュニティテーブル",
          alt: "テーブルを囲んでスタッフと参加者が和やかに語り合う様子",
        },
        {
          title: "道場エントランス（Unit E）",
          sub: "2800 Douglas Rd, Burnaby",
          alt: "Unit Eの入口看板（Divine Light SMBK-Canada）",
        },
      ],
    },
    expect: {
      title: "当日の流れ",
      subtitle: "初めての方のご体験は、約50分ほどでゆったりと進みます。",
      steps: [
        {
          step: "01",
          title: "温かいお迎え",
          time: "約10分",
          desc: "スタッフが笑顔でお迎えし、静かなお部屋で簡単にご案内いたします。",
        },
        {
          step: "02",
          title: "お浄めの体験",
          time: "30分",
          desc: "楽な姿勢で座り、目を閉じてリラックスしてください。手のひらから優しい光をお注ぎします。",
        },
        {
          step: "03",
          title: "アフタートーク",
          time: "約10分",
          desc: "セッション後、温かいお茶を飲みながら、体験のご感想や気になる点をお気軽にお話しいただけます。",
        },
      ],
    },
    visit: {
      title: "ご来訪にあたって",
      items: [
        {
          icon: "👕",
          title: "服装",
          desc: "普段着で気軽にお越しください。ジーンズなど動きやすい服装で構いません。室内履き用に清潔な靴下をお持ちください。",
        },
        {
          icon: "🎒",
          title: "持ち物",
          desc: "特別な持ち物はありません。手ぶらでお越しいただけます。",
        },
        {
          icon: "🚗",
          title: "駐車場",
          desc: "バーナビーの2800 Douglas Road、Unit Eのすぐ前に専用の無料駐車場がございます。",
        },
      ],
    },
    hosts: {
      title: "お迎えするスタッフ",
      badge: "専従者紹介",
      name: "武田 結（Yui Takeda）",
      role: "ミニスター（専従者）",
      intro1: "ようこそお越しくださいました！武田 結（ゆい）と申します。",
      intro2:
        "10年以上にわたり専従者として奉仕しており、お浄めを通じて地域の皆様の心身の健康と調和をサポートすることに尽力しております。",
      intro3: "カナダ道場で皆様とお会いできることを心より楽しみにしております！",
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          q: "Q: 本当に無料ですか？",
          a: "A: はい、参加費などの費用は一切かかりません。非営利団体ですので、自発的なお志（ドネーション）のみ歓迎しております。",
        },
        {
          q: "Q: 特定の宗教や信仰を持っている必要がありますか？",
          a: "A: いいえ、信仰の有無や背景を問わず、どなたでもご参加いただけます。スピリチュアルな経験も不要です。",
        },
        {
          q: "Q: 予約は必要ですか？",
          a: "A: はい、席数に限りがあるため、事前の日時のご予約をお願いしております。",
        },
      ],
      prompt: "ご不明な点がございましたら、お電話またはメールでお気軽にお問い合わせください。",
      cta: "ご質問・ご予約はこちら",
    },
    booking: {
      heading: "お浄めのご予約・お問い合わせ",
      hours: "開館時間：火〜金 12:00〜19:00 / 土・日 10:00〜16:00（月曜休館）",
      form: {
        title: "ご予約フォーム",
        subtitle: "個別のお浄め体験をご希望の方は、こちらのフォームよりご送信ください。費用は無料です。",
        fullNameLabel: "お名前（フルネーム）*",
        fullNamePlaceholder: "山田 太郎",
        emailLabel: "メールアドレス *",
        emailPlaceholder: "yamada@example.com",
        phoneLabel: "お電話番号",
        phonePlaceholder: "+1 (604) 000-0000",
        timeLabel: "ご希望日時",
        notesLabel: "ご質問・ご相談内容など",
        notesPlaceholder: "ご質問やご希望があればご自由にご記入ください...",
        submitBtn: "予約リクエストを送信する",
        submittingBtn: "送信中...",
        successTitle: "予約リクエストを送信しました！",
        successDesc:
          "お問い合わせありがとうございます。担当者よりメールまたはお電話にて折り返し確認のご連絡を差し上げます。",
        errorMsg:
          "送信に失敗しました。お手数ですが、お電話またはメールにて直接お問い合わせください。",
      },
      contactCard: {
        title: "バンクーバー道場（バーナビー）",
        addressLabel: "住所:",
        addressVal: "2800 Douglas Road, Unit E, Burnaby, B.C. V5C 5B7",
        hoursLabel: "開館時間:",
        hoursVal: "火〜金 12:00〜19:00 / 土・日 10:00〜16:00（月曜休館）",
        phoneLabel: "電話:",
        emailLabel: "メール:",
        callBtn: "📞 お電話をかける",
        emailBtn: "✉️ メールを送る",
        mapBtn: "Googleマップで開く ↗",
        badge: "カナダ連邦公認 非営利法人",
      },
    },
    footer: {
      org: "真光（World Divine Light Organization）",
      copyright: "© 2026 バンクーバー道場 · World Divine Light Organization. All Rights Reserved.",
    },
    mobileBar: {
      callBtn: "📞 お電話",
      reserveBtn: "体験予約をする",
    },
  },
};
