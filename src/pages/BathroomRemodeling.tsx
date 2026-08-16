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
import { Process, type ProcessStep } from "@/components/landing/Process";
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

const processSteps: ProcessStep[] = [
  { number: "01", title: "Request a Consultation", description: "Reach out through the form or by phone to get started." },
  { number: "02", title: "Discuss Your Project", description: "We talk through your goals, your space, and your budget range." },
  { number: "03", title: "Develop the Scope", description: "We define the layout, materials, and full scope of work." },
  { number: "04", title: "Receive Your Estimate", description: "You get a clear picture of cost before anything begins." },
  { number: "05", title: "Schedule the Project", description: "We plan the timeline and coordinate the trades involved." },
  { number: "06", title: "Complete the Renovation", description: "Our team manages the work while keeping you informed at each phase." },
  { number: "07", title: "Final Walkthrough", description: "We walk the finished bathroom with you to confirm everything meets expectations." },
];

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
        <Process noun="bathroom" headingNoun="Bathroom" steps={processSteps} />
        <ServiceArea noun="bathroom" />
        <BathroomFAQ />
        <FinalCTA
          heading="Ready to Remodel Your Bathroom?"
          formSource="bathroom_remodeling_estimate"
          projectPlaceholder="e.g. Walk-in shower, tub conversion, full bathroom renovation"
          submitLabel="Request Your Free Bathroom Remodeling Estimate"
        />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
