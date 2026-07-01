import userImage from "@/images/user-img.png";
import greyWhatsappIcon from "@/images/grey-wp.png";
import greyDownloadIcon from "@/images/grey-dn.png";
import doctorImage from "@/images/dr-qht.png";
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
import rajpalImage from "@/images/Rajpal.webp";
import dayaImage from "@/images/Daya.webp";
import nadeemImage from "@/images/Nadeem.webp";
import armaanImage from "@/images/Armaan.webp";
import saurabhImage from "@/images/Saurabh.webp";
import tarunImage from "@/images/Tarun.webp";
import shubhamImage from "@/images/Shubham.webp";
import sanatImage from "@/images/Sanat.webp";
import puneetImage from "@/images/Puneet.webp";
import mayankImage from "@/images/Mayank.webp";
import kshitijImage from "@/images/Kshitij.webp";
import gauravImage from "@/images/Gaurav.webp";
import dheerendraImage from "@/images/Dheerendra.webp";
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
    name: "Dr. S.K Mishra",
    role: "Plastic Surgeon",
    degree: "MCh (Plastic Surgery)",
    experience: "~17 Years",
    location: "Delhi",
    description:
      "Clinical specialist in advanced hair restoration, follicle rejuvenation, and personalized scalp therapies.",
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
    id: "rajpal",
    image: rajpalImage,
    quote: '"Superb hairline reconstruction and dense packing of follicles. The results look completely natural."',
    name: "Rajpal Yadav",
    age: "From : Mumbai, India",
    label: "QHT RESULT",
  },
  {
    id: "daya",
    image: dayaImage,
    quote: '"The FUE hair transplant procedure was smooth and pain-free. The density achieved is outstanding."',
    name: "Daya",
    age: "From : Maharashtra",
    label: "QHT RESULT",
  },
  {
    id: "nadeem",
    image: nadeemImage,
    quote: '"Extremely happy with the hair restoration. Highly skilled doctors and excellent support staff."',
    name: "Nadeem",
    age: "From : Delhi, India",
    label: "QHT RESULT",
  },
  {
    id: "armaan",
    image: armaanImage,
    quote: '"Dr. Shilpa and the QHT Clinic team mapped my hairline perfectly. Very natural-looking temples."',
    name: "Armaan",
    age: "From : Punjab, India",
    label: "QHT RESULT",
  },
  {
    id: "saurabh",
    image: saurabhImage,
    quote: '"Remarkable density on the crown area. The follicle survival rate exceeded my expectations."',
    name: "Saurabh",
    age: "From : Pune, India",
    label: "QHT RESULT",
  },
  {
    id: "tarun",
    image: tarunImage,
    quote: '"Excellent recovery timeline and minimal downtime. QHT technique is definitely the best in India."',
    name: "Tarun",
    age: "From : Rajasthan",
    label: "QHT RESULT",
  },
  {
    id: "shubham",
    image: shubhamImage,
    quote: '"Professional advice, custom planning, and seamless treatment. Highly recommend QHT Clinic."',
    name: "Shubham",
    age: "From : Bihar, India",
    label: "QHT RESULT",
  },
  {
    id: "sanat",
    image: sanatImage,
    quote: '"The hairline looks clean, aligned, and dense. The clinic followed up diligently post-surgery."',
    name: "Sanat",
    age: "From : Bangalore, India",
    label: "QHT RESULT",
  },
  {
    id: "puneet",
    image: puneetImage,
    quote: '"Perfect grafts alignment and natural look. The QHT procedure is highly recommended."',
    name: "Puneet",
    age: "From : Haryana, India",
    label: "QHT RESULT",
  },
  {
    id: "mayank",
    image: mayankImage,
    quote: '"Advanced follicular unit extraction. No scars, quick healing, and dense hair regrowth."',
    name: "Mayank",
    age: "From : Uttar Pradesh",
    label: "QHT RESULT",
  },
  {
    id: "kshitij",
    image: kshitijImage,
    quote: '"The clinical validation of the QHT technique speaks for itself. Extremely happy with my new look."',
    name: "Kshitij",
    age: "From : Maharashtra",
    label: "QHT RESULT",
  },
  {
    id: "gaurav",
    image: gauravImage,
    quote: '"Top-class hygiene standards and world-class OTs. The transplant is permanently safe and natural."',
    name: "Gaurav",
    age: "From : Delhi, India",
    label: "QHT RESULT",
  },
  {
    id: "dheerendra",
    image: dheerendraImage,
    quote: '"Life-changing results. My confidence is completely restored thanks to QHT Clinic doctors."',
    name: "Dheerendra",
    age: "From : Madhya Pradesh",
    label: "QHT RESULT",
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
