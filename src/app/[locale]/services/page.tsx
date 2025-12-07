import { ServiceCard } from "@/components/ServiceCard";
import { servicesData } from "@/lib/services";
import { 
  Globe, 
  Zap, 
  Sparkles, 
  BarChart3, 
  ShieldCheck, 
  Languages 
} from "lucide-react";

// Map icon names to components
const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  Sparkles: <Sparkles className="h-8 w-8" />,
  BarChart3: <BarChart3 className="h-8 w-8" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8" />,
  Languages: <Languages className="h-8 w-8" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Our Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Business Value First, Technology Second
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We don't just write code; we build digital assets that drive growth, security, and efficiency for your business. Hover over any card to see how we deliver these results.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              businessValue={service.businessValue}
              technicalDetails={service.technicalDetails}
              price={service.price}
              icon={iconMap[service.iconName]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
