"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm, SubmitHandler } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

type Inputs = {
  email: string;
};

const ForgetPassword = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPatternLoaded, setIsPatternLoaded] = useState(false);
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("email", data.email);

    try {
      const response = await fetch("/auth/reset-password", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.error) {
          throw new Error(result.error);
        }
        toast({
          title: "Password reset email sent",
          description: "Please check your email for further instructions.",
          duration: 5000,
        });
      } else {
        throw new Error("Failed to send reset email");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Wallpaper */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {!isPatternLoaded && (
          <div className="absolute inset-0">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500
          ${isPatternLoaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: "url('/pattern.svg')",
          }}
        >
          <img
            src="/pattern.svg"
            alt=""
            className="hidden"
            onLoad={() => setIsPatternLoaded(true)}
          />
        </div>
      </div>

      {/* Right side - Forget Password Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 p-4">
        {/* Logo */}
        <div className="mb-4">
          <a href="./">
            <img
              src="/images/logo/logo-1.svg"
              alt="Logo"
              className="w-52 h-20"
            />
          </a>
        </div>

        {/* Forget Password Form Container */}
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm p-6 rounded-xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-wide mb-2 dark:text-white">
                {t("forgotPassword?")}
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {t("enterYourEmailToResetYourPassword")}
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  {t("email")}
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder={t("enterYourEmail")}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {isSubmitted && errors.email && (
                    <span className="text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <Button
                isLoading={isSubmitting}
                disabled={isSubmitting}
                variant="default"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                    {t("sendingResetEmail...")}
                  </>
                ) : (
                  <>{t("resetPassword")}</>
                )}
              </Button>
            </form>

            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("backToLogin")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
