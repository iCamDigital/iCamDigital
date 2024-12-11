"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SubmitHandler, useForm } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { Zap, Eye, EyeOff } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

type Inputs = {
  email: string;
  password: string;
};

export const Login = ({
  host,
  searchParams,
}: {
  host: string | null;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLinkedinLoading, setIsLinkedinLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);
  const [isPatternLoaded, setIsPatternLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description:
          "You have been successfully logged in. Redirecting you to dashboard.",
        duration: 3000,
      });

      // Add delay then redirect
      setTimeout(() => {
        router.push("/overview");
        router.refresh();
      }, 1000);
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Invalid email or password.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const protocol = host?.includes("localhost") ? "http" : "https";
  const redirectUrl = `${protocol}://${host}/auth/callback`;

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) {
        toast({
          title: "Google Sign-In Failed",
          description:
            "There was an error signing in with Google. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to sign in with Google. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleLinkedinSignIn = async () => {
    try {
      setIsLinkedinLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "linkedin_oidc",
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            prompt: "consent",
          },
        },
      });

      if (error) {
        toast({
          title: "LinkedIn Sign-In Failed",
          description:
            "There was an error signing in with LinkedIn. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to sign in with LinkedIn. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLinkedinLoading(false);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      setIsFacebookLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            prompt: "consent",
          },
        },
      });

      if (error) {
        toast({
          title: "Facebook Sign-In Failed",
          description:
            "There was an error signing in with Facebook. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to sign in with Facebook. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsFacebookLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
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

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 p-4">
        <div className="mb-4">
          <a href="./">
            <img
              src="/images/logo/logo-1.svg"
              alt="Logo"
              className="w-52 h-20"
            />
          </a>
        </div>

        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm p-6 rounded-xl">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {t("don'tHaveAnAccountYet?")}{" "}
                <a
                  href="/signup"
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none font-medium dark:text-blue-500"
                >
                  {t("signUpHere")}
                </a>
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                className="p-3 px-10 inline-flex justify-center items-center rounded-lg border border-gray-200 hover:bg-gray-50
                  dark:border-neutral-700 dark:hover:bg-neutral-700"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading}
              >
                {isGoogleLoading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="p-3 px-10 inline-flex justify-center items-center text-sm font-medium 
                rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-900
                dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                onClick={handleLinkedinSignIn}
                disabled={isLinkedinLoading}
              >
                {isLinkedinLoading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin" />
                ) : (
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0A66C2"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="p-3 px-10 inline-flex justify-center items-center text-sm font-medium 
                rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-900
                dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                onClick={handleFacebookSignIn}
                disabled={isFacebookLoading}
              >
                {isFacebookLoading ? (
                  <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin" />
                ) : (
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1877F2"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                )}
              </Button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 dark:border-neutral-700 w-full"></div>
              <div className="absolute bg-white dark:bg-neutral-800 px-4">
                <span className="text-sm text-gray-500 dark:text-neutral-400">
                  {t("or")}
                </span>
              </div>
            </div>

            <div className="mt-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
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
                          value: /\S+@\S+\.\S+/,
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

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    {t("password")}
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("enterYourPassword")}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    {isSubmitted && errors.password && (
                      <span className="text-xs text-red-400">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <a
                    href="/login/forget-password"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {t("forgotPassword?")}
                  </a>
                </div>

                <Button
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  variant="outline"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium 
                  rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 hover:text-white 
                  focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  type="submit"
                >
                  {t("signIn")}
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm p-4 rounded-xl max-w-sm w-full flex items-center">
            <Zap className="w-6 h-6 text-black mr-3" />
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {t("fast&Secure,MadeForUsersToLoveAndAdore.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
