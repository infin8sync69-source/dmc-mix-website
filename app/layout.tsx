import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMC Mix | Finishing Systems",
  description:
    "Dry Mortar Company (DMC) — leading producer and specialist in EIFS (external facade insulation and finishing systems) with the highest quality materials specially developed for Middle East conditions.",
  keywords:
    "DMC Mix, dry mortar, finishing systems, EIFS, renders, mortars, UAE, Middle East",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
