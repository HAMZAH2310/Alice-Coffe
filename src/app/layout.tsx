import type { Metadata } from "next";
import { dancingScript } from "./Fonts/dancingScript";
import { leiko } from "./Fonts/leiko";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alice Caffe",
  description: "A cozy coffee shop website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${leiko.className}`}
      >
        {children}
      </body>
    </html>
  );
}
