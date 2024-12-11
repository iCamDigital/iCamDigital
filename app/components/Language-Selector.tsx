"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { languages } from "../i18n/settings";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown, CheckCircle2 } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex gap-1 ">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <ChevronDown className="h-[1rem] w-[1rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Globe className="text-primary h-4 w-4" />
          Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className="w-full flex items-center justify-between px-2 py-1.5 cursor-pointer"
          >
            <span className="flex-1">{lang.toUpperCase()}</span>
            {language === lang && (
              <CheckCircle2 className="h-4 w-4 text-primary ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
