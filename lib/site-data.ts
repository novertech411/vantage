import {
  Camera,
  BrainCircuit,
  HeartHandshake,
  Network,
  ScanEye,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// TODO: confirm this is the real partnerships inbox before launch.
export const contactEmail = "hello@eagleeye.health";
export const partnerMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Eagle Eye Partnership Inquiry")}`;

// Served by the dashboard project through the /login rewrite in vercel.json.
export const loginHref = "/login";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Eagle Lens", href: "/eagle-lens" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Our impact", href: "/impact" },
  { label: "About us", href: "/about" },
];

export const footerLinks = [
  { label: "Technology", href: "/eagle-lens" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partner" },
  { label: "Log in", href: loginHref },
];

export const trustPoints = [
  "Portable by design",
  "Technology-assisted",
  "Focused on access",
];

export type Stat = {
  value: string;
  text: string;
  variant?: "highlight" | "wide";
};

// Source: Nigeria National Blindness and Visual Impairment Survey (2015).
// Verify each figure against the published paper before launch.
export const stats: Stat[] = [
  {
    value: "2.2 billion",
    text: "People worldwide live with near or distance vision impairment.",
  },
  {
    value: "1 billion",
    text: "People have vision impairment that could have been prevented or remains unaddressed.",
    variant: "highlight",
  },
  {
    value: "1 in 2",
    text: "People worldwide who need cataract surgery lack  access  to it.",
    variant: "wide",
  },
];

export const statsSource =
  " Source: World Health Organization, Blindness and vision impairment, February 2026.";

export const lensFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: ScanEye, label: "Portable retinal imaging" },
  { icon: Sparkles, label: "Computational analysis support" },
  { icon: Workflow, label: "Guided screening workflow" },
];

export type Step = { title: string; text: string; icon: LucideIcon };

export const steps: Step[] = [
  {
    title: "Capture",
    text: "Acquire retinal images with portable imaging equipment.",
    icon: Camera,
  },
  {
    title: "Analyze",
    text: "Support assessment with computational image analysis.",
    icon: BrainCircuit,
  },
  {
    title: "Connect",
    text: "Help link screening workflows and professional review.",
    icon: Network,
  },
  {
    title: "Care",
    text: "Support appropriate follow-up and referral decisions.",
    icon: HeartHandshake,
  },
];

export type Application = {
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const applications: Application[] = [
  {
    tag: "01 / Beyond the clinic",
    title: "Community outreach",
    text: "Supporting the possibility of eye screening in outreach programs and areas where specialist services may be less accessible.",
    image: "community-glasses",
    alt: "An elderly man being fitted with new glasses at a community eye outreach",
  },
  {
    tag: "02 / Within care systems",
    title: "Clinical workflows",
    text: "Giving eye-care teams a practical framework for image capture, screening support, and professional assessment.",
    image: "clinic-exam",
    alt: "A clinician examining a young woman's eye with a penlight in a clinic",
  },
];
