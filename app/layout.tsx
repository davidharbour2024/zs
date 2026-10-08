import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zahbro Sports",
    template: "%s | Zahbro Sports",
  },
  description: "Zahbro Sports — combat sports equipment for boxing, MMA and Muay Thai.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zahbrosports.co.uk"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
