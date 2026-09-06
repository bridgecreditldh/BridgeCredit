import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { site } from "@/lib/site";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Authorized Banking Channel Partner`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Authorized Banking Channel Partner`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Authorized Banking Channel Partner`,
    description: site.description,
  },
  alternates: { canonical: "/" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  ...(site.email ? { email: site.email } : {}),
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.address ? { address: { "@type": "PostalAddress", streetAddress: site.address } } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-14 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
