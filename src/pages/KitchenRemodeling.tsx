import { Helmet } from "react-helmet-async";
import { business } from "@/lib/business";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { FeaturedProject } from "@/components/landing/FeaturedProject";
import { WhySunshine } from "@/components/landing/WhySunshine";
import { WhoThisIsFor } from "@/components/landing/WhoThisIsFor";
import { Process } from "@/components/landing/Process";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

const canonicalUrl = `${business.siteUrl}${business.landingPath}`;

const title = "Kitchen Remodeling Tampa Bay | Licensed Contractor | Sunshine Custom Builders";
const description =
  "Custom kitchen renovations in Tampa Bay by a licensed Florida contractor. Complete kitchen transformations, custom cabinetry & countertops. Projects from $10,000. Free consultation.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  description: `Licensed Florida general contractor specializing in custom kitchen remodeling and renovations, serving ${business.serviceAreaDetail}.`,
  areaServed: business.serviceArea,
  telephone: business.landingPhone,
  url: canonicalUrl,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kitchen Remodeling Services",
    itemListElement: [
      "Complete kitchen renovations",
      "Custom cabinetry",
      "Countertops and islands",
      "Kitchen layout redesign",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function KitchenRemodeling() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <LandingHeader />

      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedProject />
        <WhySunshine />
        <WhoThisIsFor />
        <Process />
        <ServiceArea />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
