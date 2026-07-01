import userImage from "@/images/user-img.png";
import greyWhatsappIcon from "@/images/grey-wp.png";
import greyDownloadIcon from "@/images/grey-dn.png";
import doctorImage from "@/images/dr-dp.png";
import greenTickIcon from "@/images/green-tick.png";
import causeIconOne from "@/images/cause-usp-1.png";
import causeIconTwo from "@/images/cause-usp-2.png";
import causeIconThree from "@/images/cause-usp-3.png";
import causeIconFour from "@/images/cause-usp-4.png";
import quoteBackgroundImage from "@/images/bg-qoute-img.png";
import addOnOneImage from "@/images/add-on-1.png";
import addOnTwoImage from "@/images/add-on-2.png";
import addOnThreeImage from "@/images/add-on-3.png";
import addOnFourImage from "@/images/add-on-4.png";
import addOnFiveImage from "@/images/add-on-5.png";
import addOnSixImage from "@/images/add-on-6.png";
import addOnSevenImage from "@/images/add-on-7.png";
import addOnEightImage from "@/images/add-on-8.png";
import sliderLeftArrowImage from "@/images/slider-left-arrow.png";
import sliderRightArrowImage from "@/images/slider-right-arrow.png";
import testimonialOneImage from "@/images/matched-testino-img-1.png";
import testimonialTwoImage from "@/images/matched-testino-img-2.png";
import kitOneImage from "@/images/kit-img-1.png";
import kitTwoImage from "@/images/kit-img-2.png";
import kitThreeImage from "@/images/kit-img-3.png";
import kitFourImage from "@/images/kit-img-4.png";
import kitFiveImage from "@/images/kit-img-5.png";
import kitSixImage from "@/images/kit-img-6.png";
import greenRightIcon from "@/images/green-right.png";
import buttonArrowIcon from "@/images/btn-arrow.png";

export const resultOverview = {
  greeting: "Hi Akash,",
  highlight: "Moderate Hair Fall",
  summarySuffix:
    "due to stress, poor nutrition, & scalp imbalance.",
  userImage,
  actions: [
    { id: "whatsapp", label: "Get on WhatsApp", icon: greyWhatsappIcon },
    { id: "save", label: "Save for later", icon: greyDownloadIcon },
  ],
  doctor: {
    image: doctorImage,
    badgeIcon: greenTickIcon,
    badgeLabel: "Expert advice",
    name: "Dr. Shila",
    role: "Senior Doctor",
    description:
      "PGDM Bangalore Govt Medical College, Dermatologist, Plastic Surgeon",
  },
  causes: [
    { id: "protein-gap", label: "Protein Gap", icon: causeIconOne },
    { id: "elevated-stress", label: "Elevated Stress", icon: causeIconTwo },
    { id: "hard-water", label: "Hard Water", icon: causeIconThree },
    { id: "sleep-debt", label: "Sleep Debt", icon: causeIconFour },
  ],
  quote: {
    image: quoteBackgroundImage,
    text: "Combined with hard water at home and a protein light vegetarian diet, your hair is showing classic signs of nutritional thinning. We have handpicked a hair growth kit as per your current hairfall stage. Try and see the result within 3 months of daily use.",
  },
};

export const resultAddOns = [
  {
    id: "calm-mind",
    name: "Calm Mind",
    description: "For Stress & Better Sleep",
    price: "₹599",
    image: addOnOneImage,
  },
  {
    id: "hair-vita",
    name: "Hair Vita",
    description: "Daily Nutrition for Hair",
    price: "₹599",
    image: addOnTwoImage,
  },
  {
    id: "gentle-gut",
    name: "Gentle Gut",
    description: "For Better Digestion",
    price: "₹599",
    image: addOnThreeImage,
  },
  {
    id: "hair-supplement",
    name: "Hair Supplement",
    description: "Hair Growth & Nourishment",
    price: "₹599",
    image: addOnFourImage,
  },
  {
    id: "hair-serum",
    name: "Hair Serum",
    description: "Advanced Scalp Serum",
    price: "₹599",
    image: addOnFiveImage,
  },
  {
    id: "hydra",
    name: "Hydra",
    description: "Healthy Hair Shampoo",
    price: "₹599",
    image: addOnSixImage,
  },
  {
    id: "hair-vita-tablets",
    name: "Hair Vita Tablets",
    description: "Digestion & Gut Comfort",
    price: "₹599",
    image: addOnSevenImage,
  },
  {
    id: "re-gro",
    name: "RE-GRO",
    description: "Anti Hair-fall Shampoo",
    price: "₹599",
    image: addOnEightImage,
  },
];

export const resultTestimonialSlider = {
  prevArrow: sliderLeftArrowImage,
  nextArrow: sliderRightArrowImage,
};

export const resultTestimonials = [
  {
    id: "nadeem",
    image: testimonialOneImage,
    quote:
      '"Started with the hair test. The doctor explained my stage clearly and gave me a structured plan. The follow-ups made all the difference"',
    name: "Nadeem",
    age: "Age : 31y",
    label: "AFTER 3 MONTH",
  },
  {
    id: "dayanand",
    image: testimonialTwoImage,
    quote:
      '"Started with the hair test. The doctor explained my stage clearly and gave me a structured plan. The follow-ups made all the difference"',
    name: "Dayanand",
    age: "Age : 31y",
    label: "AFTER 3 MONTH",
  },
  {
    id: "rahul",
    image: testimonialOneImage,
    quote:
      '"Started with the hair test. The doctor explained my stage clearly and gave me a structured plan. The follow-ups made all the difference"',
    name: "Rahul",
    age: "Age : 31y",
    label: "AFTER 3 MONTH",
  },
];

export const resultFaqs = [
  {
    id: "serum-frequency",
    question: "Q. How often should I use this hair serum?",
    answer:
      "Use the serum once or twice daily on a clean scalp for best results. Consistent application is recommended.",
  },
  {
    id: "results",
    question: "Q. When can I expect visible results?",
    answer:
      "Visible improvements typically begin within four to six weeks, with stronger hair, reduced fall, and better scalp health overall.",
  },
  {
    id: "all-hair-types",
    question: "Q. Is this serum suitable for all hair types?",
    answer:
      "Yes, the serum is formulated to work across most hair and scalp types.",
  },
  {
    id: "other-products",
    question: "Q. Can I use it with other hair products?",
    answer:
      "Yes, it can be used alongside shampoos, conditioners, and other hair-care products.",
  },
  {
    id: "severe-thinning",
    question: "Q. Does it help with severe hair thinning?",
    answer:
      "It may help improve hair density and scalp health, though results vary depending on the cause of hair thinning.",
  },
];

export const resultKit = {
  eyebrow: "Your personalised kit is here.",
  title: "Daily Hair Growth Kit",
  subtitle: "For Reduced Hair Fall & Stronger, Thicker Hair",
  oldPrice: "₹4,499",
  newPrice: "₹2,999",
  label: "THE KIT INCLUDES 6 PRODUCTS",
  products: [
    {
      id: "moisthair-shampoo",
      name: "MoistHair Shampoo",
      price: "₹599",
      image: kitOneImage,
    },
    {
      id: "venfoll-hair-serum",
      name: "Venfoll Hair Serum",
      price: "₹599",
      image: kitTwoImage,
    },
    {
      id: "growbald-tablets",
      name: "Growbald Tablets",
      price: "₹599",
      image: kitThreeImage,
    },
    {
      id: "finasil-tablets",
      name: "Finasil Tablets",
      price: "₹599",
      image: kitFourImage,
    },
    {
      id: "derma-roller",
      name: "Derma Roller",
      price: "₹599",
      image: kitFiveImage,
    },
    {
      id: "vitamin-d3-capsules",
      name: "Vitamin D3 Capsules",
      price: "₹599",
      image: kitSixImage,
    },
  ],
  certifications: [
    {
      id: "gmp",
      icon: greenRightIcon,
      label: "GMP & ISO 9001 Certified",
    },
    {
      id: "promise",
      icon: greenRightIcon,
      label: "3 month Promise",
    },
  ],
  ctaLabel: "Add My Kit To Cart",
  ctaIcon: buttonArrowIcon,
};
