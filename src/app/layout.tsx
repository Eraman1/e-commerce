import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "MyStore",
  description: "Best online store for amazing products!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="montserrat bg-gray-50">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
