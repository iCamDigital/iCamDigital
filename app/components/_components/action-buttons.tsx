"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { useLanguage } from "../../contexts/LanguageContext";

const ActionButtons = ({ user }: { user: any }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div>
      {!user && (
        <>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <AlignJustify />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                      <Link href="/">{t("home")}</Link>
                      <Link href="/documentation/intro">
                        {t("documentation")}
                      </Link>
                      <Link href="/#pricing">{t("pricing")}</Link>
                      <Link href="/others/refund">{t("refunds")}</Link>
                      <Link href="/overview">{t("getStarted")}</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex md:space-x-4">
            <Link href="/overview">
              <Button className="text-md bg-blue-600">{t("getStarted")}</Button>
            </Link>
          </div>
        </>
      )}

      {user && (
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                    <Link href="/">{t("home")}</Link>
                    <form action="/auth/sign-out" method="post">
                      <button
                        type="submit"
                        className="text-lg text-black cursor-pointer"
                      >
                        {t("logout")}
                      </button>
                    </form>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
