import React from "react";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";

export default function OthersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
