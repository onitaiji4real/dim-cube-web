"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight, Info } from "lucide-react";

interface ServiceCardProps {
  title: string;
  businessValue: string;
  technicalDetails: string[];
  price?: string;
  icon?: React.ReactNode;
}

export function ServiceCard({
  title,
  businessValue,
  technicalDetails,
  price,
  icon,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-96 w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 transform-style-3d"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Face - Business Value */}
        <div className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl border border-gray-100 flex flex-col justify-between dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              {icon}
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {businessValue}
            </p>
          </div>
          
          <div className="flex items-center text-blue-600 font-medium dark:text-blue-400">
            <span>View Technical Strategy</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </div>
        </div>

        {/* Back Face - Technical Details */}
        <div 
          className="absolute inset-0 h-full w-full backface-hidden rounded-2xl bg-blue-600 p-8 shadow-xl text-white rotate-y-180 flex flex-col justify-between dark:bg-blue-700"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="mb-6 flex items-center gap-2 opacity-80">
              <Info className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                How We Do It
              </span>
            </div>
            
            <ul className="space-y-4">
              {technicalDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-blue-200" />
                  <span className="text-blue-50 leading-snug">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {price && (
            <div className="mt-4 border-t border-blue-500/30 pt-4">
              <p className="text-sm text-blue-200 mb-1">Estimated Investment</p>
              <p className="text-2xl font-bold">{price}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
