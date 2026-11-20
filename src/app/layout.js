import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CEDT Compass | ทางลัดไปยังเว็บไซต์ของสาขา CEDT",
  description: 
    "CEDT Compass รวมเว็บไซต์ทั้งหมดของสาขา CEDT คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยไว้ในที่เดียว ทั้งลงทะเบียนวิชาเลือก Capstone สมัครและประเมินการฝึกงาน และแลกแต้มกิจกรรม Talent Journey",
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
