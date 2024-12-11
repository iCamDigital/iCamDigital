"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import LanguageSelector from "./Language-Selector";
import { useTranslation } from "../i18n/client";
import { useLanguage } from "../contexts/LanguageContext";

export default function ClientSideHeader({ user }: { user: any }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <div className="hidden md:flex space-x-4">
        <NavButton href="/" label={t("home")} />
        <NavButton href="/overview" label={t("dashboard")} />
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full focus:outline-none bg-blue-100"
            >
              <Avatar className="h-8 w-8 bg-blue-100">
                <AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt={user.email || ""}
                  className="bg-blue-100"
                />
                <AvatarFallback className="bg-blue-100">
                  {user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-blue-600">
                  {user.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.user_metadata.full_name}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator className="md:hidden" />
            <form action="/auth/sign-out" method="post">
              <DropdownMenuItem asChild>
                <Button
                  type="submit"
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t("logout")}</span>
                </Button>
              </DropdownMenuItem>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

function NavButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 font-medium"
      >
        {label}
      </Button>
    </Link>
  );
}
