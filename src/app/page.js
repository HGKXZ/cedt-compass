import CompassPage from "@/components/CompassPage";
import { SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CEDT Compass",
  alternateName: ["CEDT Compass ทางลัดเว็บไซต์ CEDT"],
  url: SITE_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CompassPage />
    </>
  );
}