export type SocialLink = {
  label: string;
  href: string;
  image: string;
  shortLabel: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type PricingPlan = {
  name: string;
  subtitle: string;
  freePeriod: string;
  monthlyPrice: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const brand = {
  name: "TLP Publishing",
  logoSrc:
    "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/c32fb0b4-c5a0-478e-a9d9-da98473cce7b.webp",
};

export const media = {
  heroBackground:
    "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?auto=format&fit=crop&w=1170&q=80",
  companyBackground:
    "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/70017b8c-6d4e-4dc7-8969-fdaa405c6f07.png",
  companyImage:
    "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/d182fa53-e3a9-4bee-8a2a-ee5b4ceb5394.png",
  videoSectionBackground:
    "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/75x6oVRlEkU7gyLcePUE/media/3a153f19-c8c7-4af3-b037-00f6192d2a32.png",
  videoPoster:
    "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/69aede695a8a19ad0ac76335.png",
  videoSrc:
    "https://assets.cdn.filesafe.space/aZ2zBtPVu5ROuoWLOvZp/media/69aed862b9be7010650cfcb0.mp4",
};

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587838196052",
    image: "https://stcdn.leadconnectorhq.com/funnel/icons/square/facebook-square.svg",
    shortLabel: "Fb",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tlp.publishing/",
    image: "https://stcdn.leadconnectorhq.com/funnel/icons/square/instagram-square.svg",
    shortLabel: "Ig",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@tlppublishing",
    image: "https://stcdn.leadconnectorhq.com/funnel/icons/square/tiktok-square.svg",

    shortLabel: "Tk",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TLPPublishing",
    image: "https://stcdn.leadconnectorhq.com/funnel/icons/square/youtube-square.svg",
    shortLabel: "Yt",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/TLPpublishing/",
    image: "https://stcdn.leadconnectorhq.com/funnel/icons/square/pinterest-square.svg",
    shortLabel: "Pi",
  },
];

export const navLinks: NavLink[] = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact us", href: "#contact" },
];

export const companyStory = {
  badge: "Our Company",
  sections: [
    {
      heading: "OUR ORIGIN STORY",
      body: [
        "With over 30 years of experience developing multiple business, we are bringing tried business principles together with modern technology utilizing AI.",
      ],
    },
    {
      heading: "INDUSTRY EXPERIENCE",
      body: [
        "Having operated businesses in the financial services and contracting industries our founders bring a history of experience and expertise unparalleled, not too many situations that we haven't encountered.",
      ],
    },
    {
      heading: "OUR MISSION",
      body: [
        "To build value in our business by helping others increase the value of their business.",
        "As Zig Ziglar said, “you can have everything you want if you will help others get everything that they want.”",
      ],
    },
    {
      heading: "OUR VISION",
      body: [
        "We heard the story from a very young age about This Little Piggy went to Market, This Little Piggy stayed home, this little piggy had roast beef, this little piggy had none.",
        "What we learned from this story is that if we don't go to market we can't eat roast beef. We aim to bring you to a place in the market where you will get noticed and help you build systems to create revenue by helping others get what they want.",
      ],
    },
  ],
};

export const about = {
  heading: "We Help Customers Succeed!",
  introLabel: "About Us",
  values: [
    {
      heading: "Professionalism at Every Level",
      body: "Our communication is deliberate and respectful.",
    },
    {
      heading: "Trust and Reliability",
      body: "Our operations are rooted in sound judgment and dependable outcomes.",
    },
    {
      heading: "Discreet and Purpose-Driven",
      body: "We create value through structured, intentional investments.",
    },
    {
      heading: "Visual and Operational Stability",
      body: "Stability is our signature in both online presence and execution.",
    },
  ],
};

export const serviceItems = [
  {
    title: "Website Development",
  },
  {
    title: "Logo Development",
  },
  {
    title: "Email Marketing, SMS Marketing, AI Marketing",
  },
  {
    title: "Long-Term Asset Development - marketing as a cumulative asset",
  },
  {
    title: "Administrative education for marketing",
    description: "Educational program to help business owners build businesses, not just jobs",
  },
];

export const pricingIntro = {
  heading: "TLP Publishing offers Digital Solutions Tailored to Your Growth",
  paragraphs: [
    "Every business is at a different stage of growth. Whether you are a solo entrepreneur needing a professional look or an established company ready to automate your sales process, we have a plan that fits.",
    "Choosing the right plan is crucial for your business growth. We offer tailored plans that fit your current needs and scale with your ambitions.",
    "We are so confident you will grow, we are giving you free months.",
  ],
  bullets: [
    "No contracts. No commitments.",
    "Cancel anytime - even after the free period ends.",
    "Get started with one of our 4 growth packages today.",
  ],
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Offer",
    subtitle: "Establish your essential online presence with a done-for-you 3-page website.",
    freePeriod: "Free for 6 months",
    monthlyPrice: "$50.00/mo",
    features: ["3-page website done for you", "2 revisions included"],
    ctaLabel: "Choose Starter",
    ctaHref: "https://tlppublishing.com/website-creation-form-starter-offer-plan",
  },
  {
    name: "The Launchpad",
    subtitle:
      "Kickstart your marketing with a 5-page site plus your choice of one essential automation tool.",
    freePeriod: "Free for 5 months",
    monthlyPrice: "$65.00/mo",
    features: [
      "5-page website done for you",
      "3 revisions included",
      "Choose 1: Email Marketing, 2-Way SMS/Call Marketing, Booking & Appointment, Call Tracking, Surveys & Forms, Tracking & Analytics, Communities, or Chatbot",
    ],
    ctaLabel: "Choose LAUNCHPAD",
    ctaHref: "https://tlppublishing.com/website-creation-form-the-launchpad-plan",
  },
  {
    name: "The Spotlight",
    subtitle:
      "Step into the light with expanded features - choose two premium tools to engage your audience.",
    freePeriod: "Free for 4 months",
    monthlyPrice: "$80.00/mo",
    features: [
      "5-page website done for you",
      "4 revisions included",
      "Choose 2: Email Marketing, 2-Way SMS/Call Marketing, Booking & Appointment, Call Tracking, Surveys & Forms, Tracking & Analytics, Communities, or Chatbot",
    ],
    ctaLabel: "Choose Spotlight",
    ctaHref: "https://tlppublishing.com/website-creation-form-the-spotlight-plan",
  },
  {
    name: "The Empire Suite",
    subtitle:
      "The ultimate value package - unlock every feature, full CRM access, and maximum automation for one price.",
    freePeriod: "Free for 3 months",
    monthlyPrice: "$97.00/mo",
    features: [
      "7-page website done for you with chatbot",
      "Full access on revisions",
      "Full access to all listed marketing features",
    ],
    ctaLabel: "Choose Empire Suite",
    ctaHref: "https://tlppublishing.com/website-creation-form-the-empire-suite-plan",
  },
];

export const pricingFootnotes = [
  "*Unrestricted growth, zero waste. Communication tools run on a usage-based model with low rates and full budget control.",
  "**Connect your existing number or claim a new local line to unlock call tracking analytics, call recording, and automatic missed-call text back.",
];

export const contact = {
  phoneLabel: "Call/Text: +1 (662) 596-6242",
  phoneHref: "tel:+16625966242",
  emailLabel: "Email: info@tlppublishing.com",
  emailHref: "mailto:info@tlppublishing.com",
  websiteLabel: "www.tlppublishing.com",
  websiteHref: "https://www.tlppublishing.com",
};

export const footer = {
  legal: "Copyright 2026 TLP MARKETING LLC doing business as TLP Publishing. All rights reserved.",
  privacyHref: "https://tlppublishing.com/privacypolicy-termsandconditions",
};
