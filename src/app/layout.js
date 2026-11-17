import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CEDT Compass | ทางลัดไปยังเว็บไซต์ของสาขา CEDT",
  description:
    "Link hub for CEDT students at Chulalongkorn University. ทางลัดไปยังเว็บไซต์ทั้งหมดของสาขา CEDT จุฬาฯ",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CEDT Compass",
    description: "Find your way to every CEDT portal.",
    url: SITE_URL,
    siteName: "CEDT Compass",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
