import type { StepDef } from "@/components/stepper-form";

export const starterFormSteps: StepDef[] = [
  {
    title: "Your Contact Information",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "contactNumber", label: "Contact Number", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
    ],
  },
  {
    title: "Business & Positioning",
    fields: [
      {
        name: "businessName",
        label: "What is your business name exactly as it should appear on the website?",
        type: "text",
        required: true,
      },
      {
        name: "tagline",
        label: "Do you have a tagline? If yes, what is it? We can also make it for you.",
        type: "textarea",
      },
      {
        name: "servicesOrProducts",
        label: "What services or products do you offer?",
        type: "textarea",
        required: true,
      },
      {
        name: "idealTargetAudience",
        label: "Who is your ideal target audience?",
        type: "textarea",
        required: true,
      },
      {
        name: "serviceLocations",
        label: "What locations do you serve?",
        type: "textarea",
        required: true,
      },
      {
        name: "problemSolved",
        label: "What problem does your business solve?",
        type: "textarea",
        required: true,
      },
      {
        name: "businessDifferentiator",
        label: "What makes your business different from competitors?",
        type: "textarea",
      },
      {
        name: "topAdvantages",
        label: "What are your top 2-3 competitive advantages?",
        type: "textarea",
      },
      {
        name: "customerObjections",
        label: "What objections do customers usually have before buying?",
        type: "textarea",
      },
      {
        name: "competitorWebsites",
        label: "List 1-2 competitor websites you like and explain why.",
        type: "textarea",
      },
      {
        name: "brandPersonality",
        label: "How would you describe your brand personality?",
        type: "textarea",
        required: true,
      },
      {
        name: "avoidMessagingStyles",
        label: "Are there any words or messaging styles you do NOT want used?",
        type: "textarea",
      },
    ],
  },
  {
    title: "Website Goals & Strategy",
    fields: [
      {
        name: "primaryWebsiteGoal",
        label: "What is the primary goal of this website?",
        type: "textarea",
        required: true,
      },
      {
        name: "immediateVisitorAction",
        label: "What action do you want visitors to take immediately?",
        type: "textarea",
        required: true,
      },
      {
        name: "websiteFocus",
        label: "Is this website focused on lead generation, booking, sales, branding, or a mix?",
        type: "radio",
        required: true,
        options: [
          { label: "Lead Generation", value: "lead_generation" },
          { label: "Booking", value: "booking" },
          { label: "Sales", value: "sales" },
          { label: "Branding", value: "branding" },
          { label: "Mix", value: "mix" },
        ],
      },
      {
        name: "ctaPreference",
        label: "Do you want a single strong CTA or multiple CTAs?",
        type: "radio",
        required: true,
        options: [
          { label: "Single Strong CTA", value: "single" },
          { label: "Multiple CTAs", value: "multiple" },
        ],
      },
      {
        name: "primaryCta",
        label: "What is the primary call-to-action?",
        type: "textarea",
        required: true,
      },
      {
        name: "urgencyElements",
        label:
          "Do you want urgency elements like countdown timers or limited availability messaging?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not Sure", value: "not_sure" },
        ],
      },
    ],
  },
  {
    title: "Branding & Design Preferences",
    fields: [
      {
        name: "hasBrandGuidelines",
        label: "Do you have brand guidelines?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "In Progress", value: "in_progress" },
        ],
      },
      {
        name: "hasLogo",
        label: "Do you have a logo (SVG/PNG)?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "brandColors",
        label: "What are your brand colors?",
        type: "textarea",
      },
      {
        name: "brandFonts",
        label: "What fonts do you use (if any)?",
        type: "text",
      },
      {
        name: "designStyle",
        label: "What overall design style do you prefer?",
        type: "textarea",
      },
      {
        name: "modePreference",
        label: "Do you prefer light mode, dark mode, or a mix?",
        type: "radio",
        options: [
          { label: "Light Mode", value: "light" },
          { label: "Dark Mode", value: "dark" },
          { label: "Mix", value: "mix" },
        ],
      },
      {
        name: "styleDirection",
        label:
          "Do you prefer modern, corporate, luxury, bold, playful, tech-focused, or local-trust style?",
        type: "radio",
        options: [
          { label: "Modern", value: "modern" },
          { label: "Corporate", value: "corporate" },
          { label: "Luxury", value: "luxury" },
          { label: "Bold", value: "bold" },
          { label: "Playful", value: "playful" },
          { label: "Tech-Focused", value: "tech_focused" },
          { label: "Local-Trust", value: "local_trust" },
        ],
      },
      {
        name: "cornerStyle",
        label: "Do you prefer rounded corners or sharp edges?",
        type: "radio",
        options: [
          { label: "Rounded Corners", value: "rounded" },
          { label: "Sharp Edges", value: "sharp" },
          { label: "Mix", value: "mix" },
        ],
      },
      {
        name: "layoutPreference",
        label: "Do you prefer image-heavy design or text-focused layout?",
        type: "radio",
        options: [
          { label: "Image-Heavy", value: "image_heavy" },
          { label: "Text-Focused", value: "text_focused" },
          { label: "Balanced", value: "balanced" },
        ],
      },
      {
        name: "imageSource",
        label: "Will you provide professional images, or should we use stock photos?",
        type: "radio",
        options: [
          { label: "I Will Provide Professional Images", value: "provide_professional_images" },
          { label: "Use Stock Photos", value: "use_stock_photos" },
          { label: "Mix of Both", value: "mix_of_both" },
        ],
      },
      {
        name: "hasBrandPhotos",
        label: "Do you have brand photos, team photos, or office photos?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Some", value: "some" },
        ],
      },
    ],
  },
  {
    title: "Website Structure",
    fields: [
      {
        name: "hasWrittenContent",
        label: "Do you already have written content?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Partially", value: "partial" },
        ],
      },
      {
        name: "needBlogSection",
        label: "Do you need a blog section?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "needGalleryOrPortfolio",
        label: "Do you need a gallery or portfolio section?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "faqPlacement",
        label: "Do you need FAQs on a separate page or homepage section?",
        type: "radio",
        options: [
          { label: "Separate Page", value: "separate_page" },
          { label: "Homepage Section", value: "homepage_section" },
          { label: "Both", value: "both" },
        ],
      },
      {
        name: "needLegalPages",
        label: "Do you need legal pages such as Privacy Policy or Terms & Conditions?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not Sure", value: "not_sure" },
        ],
      },
    ],
  },
  {
    title: "Content & Messaging",
    fields: [
      {
        name: "hasBrandStory",
        label: "Do you have a brand story?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "In Progress", value: "in_progress" },
        ],
      },
      {
        name: "hasMissionVision",
        label: "Do you have a mission and vision statement?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "In Progress", value: "in_progress" },
        ],
      },
      {
        name: "tonePreference",
        label: "Should the tone be emotional storytelling or direct and professional?",
        type: "radio",
        options: [
          { label: "Emotional Storytelling", value: "emotional" },
          { label: "Direct and Professional", value: "direct_professional" },
          { label: "Balanced", value: "balanced" },
        ],
      },
      {
        name: "hasTestimonials",
        label: "Do you have testimonials?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "hasVideoTestimonials",
        label: "Do you have video testimonials?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "hasCaseStudies",
        label: "Do you have case studies?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "embedGoogleReviews",
        label: "Can we embed Google reviews?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "hasCertifications",
        label: "Do you have certifications, licenses, or badges to display?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    ],
  },
  {
    title: "Lead Capture & Conversion",
    fields: [
      {
        name: "needBookingIntegration",
        label: "Do you need appointment booking integration?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "calendarLink",
        label: "What calendar link should be connected?",
        type: "text",
      },
    ],
  },
  {
    title: "Technical Setup",
    fields: [
      {
        name: "ownsDomain",
        label: "Do you own a domain?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "domainProvider",
        label: "Who is your domain provider?",
        type: "text",
      },
    ],
  },
  {
    title: "E-Commerce / Monetization (If Applicable)",
    fields: [
      {
        name: "sellsProductsOnline",
        label: "Do you sell products online?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "needPaymentGateway",
        label: "Do you need Stripe or payment gateway integration?",
        type: "radio",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not Sure", value: "not_sure" },
        ],
      },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      {
        name: "companyContactEmail",
        label: "What is your company's contact email address?",
        type: "email",
        required: true,
      },
      {
        name: "companyContactPhone",
        label: "What is your company's contact phone number?",
        type: "text",
        required: true,
      },
      {
        name: "socialMediaLinks",
        label: "If you have social media accounts, please share your social media profile links.",
        type: "textarea",
      },
      {
        name: "businessAddress",
        label: "Business Address (Optional for website)",
        type: "text",
      },
    ],
  },
];
