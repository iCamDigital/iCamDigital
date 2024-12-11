import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { Database } from "@/types/supabase";
import Logo from "./_components/logo";
import ActionButtons from "./_components/action-buttons";
import { NavigationMenuBar } from "./_components/navigation-bar";
import LanguageSelector from "./Language-Selector";
import ClientSideHeader from "./Client-Side-Header";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="flex justify-between items-center h-16 px-6 md:px-10 lg:px-20 border-b py-2 sticky top-0 z-50 bg-white shadow-sm">
      <Link href="/">
        <Logo />
      </Link>

      {user ? (
        <ClientSideHeader user={user} />
      ) : (
        <>
          <NavigationMenuBar />
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ActionButtons user={user} />
          </div>
        </>
      )}
    </nav>
  );
}
