// ClientSideNav.tsx
"use client";

import {
  FileImage,
  Settings,
  WalletCards,
  PanelLeftClose,
  Sparkles,
  Video,
  Rss,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ClientSideCredits from "./realtime/ClientSideCredits";
import { Database } from "@/types/supabase";

interface ClientSideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  credits: Database["public"]["Tables"]["credits"]["Row"] | null;
}

export default function ClientSideNav({
  isOpen,
  toggleSidebar,
  credits,
}: ClientSideNavProps) {
  const path = usePathname();

  const MenuList = [
    {
      section: "GENERAL",
      items: [
        {
          name: "AI Headshots",
          icon: Sparkles,
          path: "/overview",
        },
        {
          name: "AI Video Generation",
          icon: Video,
          path: "/overview/video",
        },
        {
          name: "Image Editor",
          icon: FileImage,
          path: `/overview/editor`,
        },
      ],
    },
    {
      section: "SUPPORT",
      items: [
        {
          name: "Blog",
          icon: Rss,
          path: "/overview/blog",
        },
        {
          name: "Billing",
          icon: WalletCards,
          path: "/overview/credits",
        },
        {
          name: "Settings",
          icon: Settings,
          path: "/overview/settings",
        },
      ],
    },
  ];

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      borderRadius: "0 100% 100% 0",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      x: 0,
      borderRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderSidebarContent = (isMobile?: boolean) => (
    <div className="flex flex-col h-full">
      {/* Logo section */}
      <div className="flex justify-between items-center mb-8">
        <Image
          src="/images/logo/logo-1.svg"
          alt="logo"
          width={200}
          height={200}
        />
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <PanelLeftClose className="h-6 w-6" />
          </button>
        )}
      </div>
      <hr className="mb-4 border" />

      {/* Menu sections */}
      <div className="flex-1">
        {MenuList.map((section) => (
          <div key={uuidv4()} className="mb-4">
            <h3 className="text-xs font-medium tracking-wide text-gray-500 mb-3">
              {section.section}
            </h3>
            {section.items.map((menu) => (
              <Link
                href={menu.path}
                key={uuidv4()}
                onClick={isMobile ? toggleSidebar : undefined}
                className="block"
              >
                <div
                  className={`flex gap-2 mb-3 p-2 hover:bg-primary hover:text-white
                    rounded-lg cursor-pointer items-center transition-all hover-parent
                    ${path === menu.path ? "bg-primary text-white" : ""}`}
                >
                  <menu.icon className="h-5 w-5 icon-bounce" />
                  <h2 className="text-lg">{menu.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="mt-auto pt-4">
        <ClientSideCredits creditsRow={credits} />
        <hr className="my-3 border" />
        <p className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Framecast AI Inc.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <div className="h-full flex flex-col p-5 shadow-sm border bg-white">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={toggleSidebar}
            />

            {/* Mobile Sidebar */}
            <motion.div
              className="fixed inset-0 w-full max-w-[300px] z-[999] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
            >
              <div className="h-full bg-white p-5">
                {renderSidebarContent(true)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}