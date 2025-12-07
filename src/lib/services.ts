import { 
  Globe, 
  Zap, 
  Sparkles, 
  BarChart3, 
  ShieldCheck, 
  Languages 
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  businessValue: string;
  technicalDetails: string[];
  price: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "seo-dominance",
    title: "Search Engine Dominance",
    businessValue: "Maximize your digital visibility and organic traffic. We structure your content so search engines understand your business value immediately, leading to higher rankings and more qualified leads.",
    technicalDetails: [
      "Advanced Schema Markup Implementation",
      "Semantic HTML5 Structure",
      "Automated Sitemap Generation",
      "Meta Tag Optimization Strategy"
    ],
    price: "Included in Standard",
    iconName: "Globe"
  },
  {
    id: "high-perf-arch",
    title: "High-Performance Architecture",
    businessValue: "Retain customers with lightning-fast load times. Our architecture ensures your site loads instantly, reducing bounce rates and improving conversion on all devices.",
    technicalDetails: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Edge Network Distribution",
      "Optimized Asset Delivery"
    ],
    price: "Base Architecture",
    iconName: "Zap"
  },
  {
    id: "ai-integration",
    title: "Mainstream AI Platforms Integration",
    businessValue: "Future-proof your business with intelligent automation. We integrate leading AI capabilities to enhance user engagement and streamline operations without vendor lock-in.",
    technicalDetails: [
      "LLM API Integration",
      "Context-Aware Chat Interfaces",
      "Vector Database Knowledge Retrieval",
      "Automated Content Processing"
    ],
    price: "Starting at $500/mo",
    iconName: "Sparkles"
  },
  {
    id: "business-intel",
    title: "Business Intelligence & Insights",
    businessValue: "Make data-driven decisions. We implement comprehensive tracking that respects user privacy while giving you deep insights into customer behavior and conversion funnels.",
    technicalDetails: [
      "Privacy-First Analytics Setup",
      "Custom Event Tracking",
      "Conversion Funnel Visualization",
      "Real-time Dashboard Integration"
    ],
    price: "$200 setup + usage",
    iconName: "BarChart3"
  },
  {
    id: "enterprise-security",
    title: "Enterprise-Grade Security",
    businessValue: "Protect your brand and customer data. We implement banking-grade security measures by default, building trust and ensuring compliance with modern data regulations.",
    technicalDetails: [
      "OWASP Top 10 Mitigation",
      "Automated Dependency Scanning",
      "Strict Content Security Policy",
      "End-to-End Encryption Standards"
    ],
    price: "Included in Premium",
    iconName: "ShieldCheck"
  },
  {
    id: "global-reach",
    title: "Multi-Market Accessibility",
    businessValue: "Expand your business globally. Our platform is built from the ground up to support multiple languages and regions, allowing you to scale into new markets effortlessly.",
    technicalDetails: [
      "Internationalization (i18n) Routing",
      "Locale-Based Content Delivery",
      "RTL (Right-to-Left) Support",
      "Currency & Date Localization"
    ],
    price: "$300/language",
    iconName: "Languages"
  }
];
