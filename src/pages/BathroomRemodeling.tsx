import { Helmet } from "react-helmet-async";
import { business } from "@/lib/business";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { Footer } from "@/components/layout/Footer";
import { BathroomHero } from "@/components/landing/BathroomHero";
import { TrustBar } from "@/components/landing/TrustBar";
import { BathroomServices } from "@/components/landing/BathroomServices";
import { BathroomFeaturedProject } from "@/components/landing/BathroomFeaturedProject";
import { WhySunshine } from "@/components/landing/WhySunshine";
import { WhoThisIsFor } from "@/components/landing/WhoThisIsFor";
import { Process } from "@/components/landing/Process";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { BathroomFAQ } from "@/components/landing/BathroomFAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

const canonicalUrl = `${business.siteUrl}/bathroom-remodeling`;

const title = "Bathroom Remodeling Pinellas County | Licensed Contractor | Sunshine Custom Builders";
const description =
  "Custom bathroom renovations in Pinellas County by a licensed Florida contractor. Walk-in showers, tub-to-shower conversions, custom vanities. Projects from $10,000. Free consultation.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  description: `Licensed Florida general contractor specializing in custom bathroom remodeling and renovations, serving ${business.serviceAreaDetail}.`,
  areaServed: business.serviceArea,
  telephone: business.landingPhone,
  url: canonicalUrl,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bathroom Remodeling Services",
    itemListElement: [
      "Complete bathroom renovations",
      "Custom vanities",
      "Walk-in showers and tub-to-shower conversions",
      "Bathroom layout redesign",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function BathroomRemodeling() {
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
        <BathroomHero />
        <TrustBar />
        <BathroomServices />
        <BathroomFeaturedProject />
        <WhySunshine noun="bathroom" />
        <WhoThisIsFor noun="bathroom" />
        <Process noun="bathroom" headingNoun="Bathroom" />
        <ServiceArea noun="bathroom" />
        <BathroomFAQ />
        <FinalCTA
          heading="Ready to Remodel Your Bathroom?"
          formSource="bathroom_remodeling_estimate"
          projectPlaceholder="e.g. Walk-in shower, tub conversion, full bathroom renovation"
        />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
