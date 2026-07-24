import "./globals.css";

export const metadata = {
  title: "CEDT Compass",
  description: "Find your way to every CEDT portal.",
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
