// src/data/data.ts
import { FaCapsules, FaDownload, FaPills } from "react-icons/fa6";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaFileExcel, FaBrain, FaRobot } from "react-icons/fa6";
import { FaWandMagic } from "react-icons/fa6";
import { FaBroom } from "react-icons/fa6";
import { PiTestTubeFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";
import { FaChartPie, FaList } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { MdPrivacyTip } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { CgPerformance } from "react-icons/cg";
import { MdGroups3 } from "react-icons/md";

export interface Path {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonBgColor: string;
  buttonHoverColor: string;
  link: string;
}

export interface Comparison {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  features: string[];
  isHighlighted: boolean;
}

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  keywords?: String[];
}

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
}

export interface TestimonialProps {
  name: string;
  designation: string;
  src: string;
  quote: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface walkthroughProps {
  factNumber: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imageSrcSet: string;
  imageSizes: string;
  imageOnRight: boolean;
}

// ----------------------------------------------------------------- CHOOSE PATH

export const paths: Path[] = [
  {
    icon: FaPills,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
    title: "Red Pill",
    description: "Discover the truth about research",
    buttonText: "Learn More",
    buttonBgColor: "bg-red-600",
    buttonHoverColor: "hover:bg-red-700",
    link: "/red-pill",
  },
  {
    icon: FaCapsules,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Blue Pill",
    description: "Take a guided tour of MeMeY features",
    buttonText: "Take Tour",
    buttonBgColor: "bg-blue-600",
    buttonHoverColor: "hover:bg-blue-700",
    link: "/blue-pill",
  },
  {
    icon: FaDownload,
    iconBgColor: "bg-black/10",
    iconColor: "text-black",
    title: "Direct Download",
    description: "Get started with MeMeY right away",
    buttonText: "Download Now",
    buttonBgColor: "bg-black",
    buttonHoverColor: "hover:bg-black/90",
    link: "https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0",
  },
];

// ----------------------------------------------------------------- COMPARISON

export const comparisons: Comparison[] = [
  {
    icon: IoCodeSlashSharp,
    title: "Traditional Code",
    features: [
      "✓ Flexible",
      "✕ Complex Setup",
      "✕ Manual Work",
      "✕ Coding Skills",
    ],
    isHighlighted: false,
  },
  {
    icon: FaFileExcel,
    title: "Excel",
    features: [
      "✓ Easy to Use",
      "✓ Basic Analysis",
      "✕ Limited Features",
      "✕ No AI Support",
    ],
    isHighlighted: false,
  },
  {
    icon: FaBrain,
    title: "MeMeY",
    features: [
      "✓ One-Click Analysis",
      "✓ Smart Insights",
      "✓ Auto Reporting",
      "✓ No Code Needed",
    ],
    isHighlighted: true,
  },
  {
    icon: FaRobot,
    title: "Other AI Tools",
    features: [
      "✓ AI Features",
      "✕ High Cost",
      "✕ Limited Export",
      "✕ Complex UI",
    ],
    isHighlighted: false,
  },
];

// ----------------------------------------------------------------- FEATURES

export const features: FeatureCardProps[] = [
  {
    icon: FaWandMagic,
    title: "One-Click Analysis",
    description: "Just click 'analyze' and let MeMeY handle the complexity",
  },
  {
    icon: FaBroom,
    title: "Data Cleaning",
    description: "Automated data cleaning and preprocessing",
  },
  {
    icon: PiTestTubeFill,
    title: "Testing",
    description: "Comprehensive statistical testing suite",
  },
  {
    icon: IoDocumentText,
    title: "Reporting",
    description: "Automated report generation with insights",
  },
];

// ----------------------------------------------------------------- PRICING

export const pricingPlans: PricingCardProps[] = [
  {
    title: "Personal License",
    price: "$99",
    description: "Ideal for individual users, students, and solo analysts.",
    features: [
      "Use on 1 device",
      "Full access to all features",
      "Export results to Excel",
      "Interpretation assistant",
      "Local processing",
      "Free updates for the year",
    ],
    buttonText: "Get Personal Plan",
  },
  {
    title: "Business License",
    price: "$249",
    description: "Designed for startups, consultants, and small teams.",
    features: [
      "Everything in Personal",
      "Use on up to 3 devices",
      "Priority email support",
      "Business usage rights",
      "Internal report sharing license",
    ],
    buttonText: "Get Business Plan",
    isRecommended: true,
  },
  {
    title: "Institution License",
    price: "$999",
    description: "Tailored for universities, labs, and large organizations.",
    features: [
      "Everything in Business",
      "Unlimited devices within one organization",
      "Classroom or lab deployment",
      "Compliance support (HIPAA, GDPR)",
      "License certificate for accreditation",
      "Direct access to tech team for setup",
    ],
    buttonText: "Get Institution Plan",
  },
];

// ----------------------------------------------------------------- TESTIMONIALS

export const testimonials: TestimonialProps[] = [
  {
    name: "Dr. Emily Torres",
    designation: "Medical Researcher",
    src: "https://mighty.tools/mockmind-api/content/human/127.jpg",
    quote:
      "As a medical researcher, data privacy is non-negotiable. MeMeY lets me analyze everything locally — no uploads, no risks. The built-in stats tools and clear explanations save me hours.",
  },
  {
    name: "Marcus Reed",
    designation: "Small Business Owner",
    src: "https://mighty.tools/mockmind-api/content/human/91.jpg",
    quote:
      "I found insights in 10 minutes that I couldn’t get in 10 days before. MeMeY made my messy spreadsheets actually useful — no analyst required.",
  },
  {
    name: "Dr. Laila Chen",
    designation: "University Dean",
    src: "https://mighty.tools/mockmind-api/content/human/87.jpg",
    quote:
      "We use MeMeY to teach ethical data science. It helps our students find valuable insights honestly, without pressure to fake results. That’s a win for academic integrity.",
  },
  {
    name: "Alex Martin",
    designation: "High School Data Science Teacher",
    src: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    quote:
      "My students love it! They can explore real data without writing a line of code — and they understand the results. It’s making stats actually fun to learn.",
  },
  {
    name: "Sophia Al-Hassan",
    designation: "Clinical Lab Technician",
    src: "https://mighty.tools/mockmind-api/content/human/8.jpg",
    quote:
      "I don’t have a background in statistics, but with MeMeY, I don’t need one. It highlights the important comparisons and helps me focus on the real science.",
  },
];

// ----------------------------------------------------------------- FAQ PAGE

export const faqs: FAQ[] = [
  {
    question: "What is MeMeY?",
    answer:
      "MeMeY is a user-friendly data analysis tool designed specifically for students. It simplifies the process of analyzing research data while maintaining powerful capabilities, allowing you to focus on results rather than complexity.",
  },
  {
    question: "How do I get started with MeMeY?",
    answer:
      "To get started, sign up for an account on our website, download the MeMeY app, and follow the onboarding tutorial. You can also check out our tutorial videos on the Help page for a step-by-step guide on logging in and importing data.",
  },
  {
    question: "Is my data secure with MeMeY?",
    answer:
      "Yes, MeMeY prioritizes your privacy. We don’t sell your email or personal information to third parties, and we don’t record your payment details or any data you input into the app. MeMeY is designed to work fully offline, ensuring your data stays private. Check our Privacy Policy for more details.",
  },
  {
    question: "What kind of data can I analyze with MeMeY?",
    answer:
      "MeMeY supports a variety of data types, including spreadsheets (CSV, Excel), and allows you to perform analyses like outlier detection, regressions, summary statistics, and more. It’s built to handle both numeric and categorical data effectively.",
  },
  {
    question: "How do I contact support if I have issues?",
    answer:
      "You can reach out to our support team by emailing us at support@memey.cloud. We’re here to help with any questions or issues you encounter while using MeMeY!",
  },
];

// ----------------------------------------------------------------- FEATURES PAGE

export const featuresDeatiled: FeatureCardProps[] = [
  {
    icon: HiCursorClick,
    title: "One-Click Automatic Analysis",
    description:
      "MeMeY removes manual work with powerful algorithms. It compares every column, runs hypothesis tests, and highlights statistically significant relationships—automatically—making data analysis fast, simple, and insightful, even for non-technical users.",
    keywords: ["automatic data analysis", "no-code tool"],
  },
  {
    icon: FaChartPie,
    title: "Hypothesis Testing with Smart Statistics",
    description:
      "MeMeY uses nonparametric tests to avoid assumptions and deliver provable insights. It includes p-values, alpha thresholds, and similarity statements, making it easy to identify real relationships with statistical clarity and confidence.",
    keywords: ["hypothesis testing software", "statistical analysis"],
  },
  {
    icon: FaHandsHelping,
    title: "Built-in Interpretation Assistance",
    description:
      "Statistical results can be confusing—MeMeY solves that. Every output includes a guide explaining what the result means, its impact, and next steps, making insights accessible to anyone, especially beginners with no statistics background.",
    keywords: ["data insight tool", "beginner-friendly analysis"],
  },
  {
    icon: PiMicrosoftExcelLogoFill,
    title: "Excel-Compatible Reports",
    description:
      "Copy tables and results directly into Excel. Export graphs as images for reports. MeMeY makes offline data sharing seamless and efficient, offering both interactive results and static formats for further exploration or presentation.",
    keywords: ["export data analysis to Excel"],
  },
  {
    icon: MdPrivacyTip,
    title: "Complete Data Privacy",
    description:
      "MeMeY runs locally on your device, never uploading data online. This ensures compliance with HIPAA and GDPR, offering secure, private analysis for sensitive medical, business, or academic datasets without removing personal identifiers.",
    keywords: ["secure data analysis", "HIPAA-compliant"],
  },
  {
    icon: MdDocumentScanner,
    title: "Bulk Testing Without Guesswork",
    description:
      "Instead of analyzing one result at a time, MeMeY automatically scans entire datasets, identifies significant relationships, and highlights patterns—removing guesswork and enabling meaningful discovery from even the most complex data collections.",
    keywords: ["data scanning tool", "full dataset analysis"],
  },
  {
    icon: FaList,
    title: "Visual + List-Based Insights",
    description:
      "MeMeY improves traditional box-and-whisker plots with a List View. It clearly shows value distribution and outliers, making data interpretation easier and preventing common errors in understanding data spreads or assumptions.",
    keywords: ["data visualization", "outlier detection"],
  },
  {
    icon: GrSecure,
    title: "Built-in Safety Rails Against Mistakes",
    description:
      "MeMeY includes built-in guardrails to prevent incorrect statistical methods. Adaptive algorithms ensure accurate results, making it safe for beginners and professionals alike to analyze data without common, costly interpretation mistakes.",
    keywords: ["error-proof analysis tool", "beginner-safe statistics"],
  },
  {
    icon: CgPerformance,
    title: "Lightning Fast Performance",
    description:
      "Written in Go, MeMeY processes massive datasets faster than Python or R. It runs locally, delivering near-instant results—ideal for researchers, analysts, and businesses needing speed without sacrificing accuracy or performance.",
    keywords: ["fast data analysis software"],
  },
  {
    icon: MdGroups3,
    title: "Designed for Everyone",
    description:
      "Whether you’re a business owner, student, teacher, or researcher, MeMeY adapts to your needs. It simplifies complex data analysis, delivering valuable insights clearly, quickly, and confidently—no advanced training or coding required.",
    keywords: [],
  },
];

// ----------------------------------------------------------------- WALKTHROUGH PAGE

export const walkthrough: walkthroughProps[] = [
  {
    factNumber: "MeMeY fact #1",
    description:
      "MeMeY has some built-in smarts for guessing which folders contain your spreadsheets, so you can find them quicker",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=1024",
    imageAlt: "MeMeY graphic 1",
    imageCaption: "Click the thingy with the folder",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-1.png 1578w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: false,
  },
  {
    factNumber: "MeMeY fact #2",
    description:
      "MeMeY will protect you from overanalyzing by letting you know how much work each job will take",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=1024",
    imageAlt: "MeMeY graphic 2",
    imageCaption: "Click everything interesting",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-2.png 1559w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: true,
  },
  {
    factNumber: "MeMeY fact #3",
    description:
      "Once you’ve read in your data, you can now use MeMeY’s simple but powerful suite of minitools.",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png",
    imageAlt: "MeMeY graphic 3",
    imageCaption:
      "This button is basically magic. It does everything you want it to do without any of your effort or thinking.",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png 1572w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=150&h=91 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=300&h=182 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=768&h=467 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-3.png?w=1024&h=623 1024w",
    imageSizes: "(max-width: 1572px) 100vw, 1572px",
    imageOnRight: false,
  },
  {
    factNumber: "MeMeY fact #4",
    description:
      "MeMeY uses (proven) estimates, but unlike some statistical software out there, it doesn’t cut corners. It also doesn’t make heavy assumptions, unlike lots of the AI-powered data analyzers. Beware of heavy assumptions, they can destroy or invalidate your results without you realizing it!",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=1024",
    imageAlt: "Designer 1",
    imageCaption: "",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=1022 1022w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/designer-1.png 2018w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: true,
  },
  {
    factNumber: "MeMeY fact #5",
    description:
      "The top radio bar lets you filter results even further, so you often don’t even need to look through most of the results to find the surprising insights!",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=1024",
    imageAlt: "MeMeY graphic 5",
    imageCaption: "Shows ONLY significant results",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-5.png 1634w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: false,
  },
  {
    factNumber: "MeMeY fact #6",
    description:
      "MeMeY was designed to be easy mode for data science. As a result, it clarifies results more clearly even super expensive, professional software does.",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=1024",
    imageAlt: "MeMeY graphic 6",
    imageCaption: "Get a nice results table that actually explains itself",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/10/memey-graphic-6.png 1636w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: true,
  },
  {
    factNumber: "MeMeY fact #7",
    description:
      "You only clicked one button one time to perform the entire analysis!",
    imageSrc:
      "https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=1024",
    imageAlt: "MeMeY graphic 7",
    imageCaption: "",
    imageSrcSet:
      "https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=1024 1024w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=150 150w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=300 300w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png?w=768 768w, https://memey.cloud/wp-content/uploads/2024/08/memey-graphic-7.png 1662w",
    imageSizes: "(max-width: 1024px) 100vw, 1024px",
    imageOnRight: false,
  },
];
