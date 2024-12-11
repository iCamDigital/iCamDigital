"use client";

import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Database } from "@/types/supabase";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function SettingsPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [updating, setUpdating] = useState(false);
  const supabase = createClientComponentClient<Database>();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) throw error;

        if (user) {
          setUser(user);
          const metadata = user.user_metadata || {};

          // First try to get individual first/last name
          let firstNameValue = metadata.first_name || "";
          let lastNameValue = metadata.last_name || "";

          // If no individual names, try to parse from full_name or name
          if (!firstNameValue && !lastNameValue) {
            const fullName = metadata.full_name || metadata.name || "";
            if (fullName) {
              const [parsedFirst, ...parsedRest] = fullName.split(" ");
              firstNameValue = parsedFirst || "";
              lastNameValue = parsedRest.join(" ") || "";
            }
          }

          setFirstName(firstNameValue);
          setLastName(lastNameValue);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast({
          title: "Error",
          description: "Failed to load user data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [supabase.auth, toast]);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs before proceeding
    if (!firstName.trim() || !lastName.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both first and last name",
        variant: "destructive",
      });
      return;
    }

    setUpdating(true);

    try {
      // Only check passwords if we're using email auth and a new password was entered
      if (!isProviderAuth && newPassword) {
        if (newPassword !== confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords don't match",
            variant: "destructive",
          });
          return;
        }

        if (newPassword.length < 6) {
          toast({
            title: "Error",
            description: "Password must be at least 6 characters long",
            variant: "destructive",
          });
          return;
        }

        const { error: passwordError } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (passwordError) throw passwordError;
      }

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          full_name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        },
      });

      if (updateError) throw updateError;

      setEditMode(false);
      setNewPassword("");
      setConfirmPassword("");

      toast({
        title: "Success",
        description: "Settings updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Error updating settings.",
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-20">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <div>Please sign in to view this page.</div>;
  }

  // Check if user is using a third-party provider by looking at multiple indicators
  const isProviderAuth = (() => {
    const providers = user.app_metadata?.providers || [];
    const hasMultipleProviders = providers.length > 1;
    const hasAvatarUrl = !!user.user_metadata?.avatar_url;

    // If user has multiple providers or has an avatar URL, they're using a third-party provider
    return hasMultipleProviders || hasAvatarUrl;
  })();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-4xl text-center font-bold mb-2">{t("settings")}</h1>
      <p className="text-muted-foreground text-center mb-6">
        {t("manageYourAccountSettingsAndSetEmailPreferences.")}
      </p>
      <Separator className="my-6" />

      <form onSubmit={handleSaveSettings}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{t("firstName")}</Label>
              <Input
                className="bg-white"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!editMode || isProviderAuth}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">{t("lastName")}</Label>
              <Input
                className="bg-white"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!editMode || isProviderAuth}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              className="bg-white"
              id="email"
              type="email"
              value={user.email}
              disabled
            />
          </div>
          {!isProviderAuth && (
            <>
              <div className="relative">
                <Label htmlFor="newPassword">{t("newPassword")}</Label>
                <Input
                  className="bg-white pr-10"
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder={t("leaveBlankToKeepCurrentPassword")}
                  minLength={6}
                  disabled={!editMode}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showNewPassword ? (
                    <EyeOff className="mt-6 h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="mt-6 h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              <div className="relative">
                <Label htmlFor="confirmPassword">
                  {t("confirmNewPassword")}
                </Label>
                <Input
                  className="bg-white pr-10"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t("leaveBlankToKeepCurrentPassword")}
                  minLength={6}
                  disabled={!editMode}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="mt-6 h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="mt-6 h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex space-x-2 mt-6">
          {editMode ? (
            <Button type="submit" disabled={updating}>
              {updating ? <> {t("saving...")} </> : <> {t("saveSettings")} </>}
            </Button>
          ) : (
            <div className="">
              <Button
                type="button"
                onClick={() => setEditMode(true)}
                disabled={editMode || isProviderAuth}
              >
                {t("changeSettings")}
              </Button>
            </div>
          )}
        </div>
      </form>
      {isProviderAuth && (
        <p className="mt-4 text-sm text-muted-foreground">
          {"yourAccountIsManagedByADifferentProvider(e.g. Google,"}
          {"Facebook, etc).YouCannotChangeYourSettingsHere."}
        </p>
      )}
    </div>
  );
}
