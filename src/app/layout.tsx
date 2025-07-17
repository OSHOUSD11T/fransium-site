import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fransium | The Intelligent Financial Universe",
  description: "Enterprise-grade, borderless finance for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
