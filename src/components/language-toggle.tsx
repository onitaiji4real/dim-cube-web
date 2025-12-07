"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLanguage = () => {
    const newLocale = pathname.startsWith('/en') ? 'zh-TW' : 'en'
    // This is a naive replacement, in a real app might need more robust path handling
    // assuming structure is /[locale]/...
    const segments = pathname.split('/')
    if (segments.length > 1) {
        segments[1] = newLocale
        router.push(segments.join('/'))
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full"
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
