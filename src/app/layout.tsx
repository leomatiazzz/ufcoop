"use client";

import "@/styles/globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>UFCoop</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 bg-white pt-16">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
