import { Helmet } from "react-helmet-async";
import { business } from "@/lib/business";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { Footer } from "@/components/layout/Footer";
import { BathroomStickyCTA } from "@/components/landing/BathroomStickyCTA";
import { BathroomHero } from "@/components/landing/BathroomHero";
import { TrustBar, type TrustBarItem } from "@/components/landing/TrustBar";
import { BathroomServices } from "@/components/landing/BathroomServices";
import { BathroomFeaturedProject } from "@/components/landing/BathroomFeaturedProject";
import { BathroomOurWork } from "@/components/landing/BathroomOurWork";
import { BathroomQualifier } from "@/components/landing/BathroomQualifier";
import { WhySunshine, type WhyPoint } from "@/components/landing/WhySunshine";
import { WhoThisIsFor } from "@/components/landing/WhoThisIsFor";
import { Process, type ProcessStep } from "@/components/landing/Process";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { BathroomFAQ } from "@/components/landing/BathroomFAQ";
import { BathroomReviews } from "@/components/landing/BathroomReviews";
import { BathroomFinalCTA } from "@/components/landing/BathroomFinalCTA";

const canonicalUrl = `${business.siteUrl}/bathroom-remodeling`;

const title = "Bathroom Remodeling Tampa Bay | Licensed Contractor | Sunshine Custom Builders";
const description =
  "Custom bathroom renovations in the Tampa Bay area by a licensed Florida contractor. Walk-in showers, tub-to-shower conversions, custom vanities. Projects from $10,000. Free consultation.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: business.name,
  description: `Licensed Florida general contractor specializing in custom bathroom remodeling and renovations, serving ${business.bathroomServiceAreaDetail}.`,
  areaServed: business.serviceArea,
  telephone: business.bathroomPhone,
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ana Silva" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We had Nik and his team handle several updates in our home, including the bathrooms and flooring, and they did a fantastic job. The work was clean, professional, and finished on time. They were also very fair with their pricing. We're extremely happy with the results and would definitely use them again!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Christo Motska" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Sunshine Custom Builders may be new to Google, but they are definitely not new to the business. Their years of experience really show in the quality of their work. The craftsmanship was impeccable, they were professional and trustworthy, and the finished work was amazing. I would absolutely recommend them to anyone looking for a contractor they can trust!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "enkeleda mira" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We were very impressed with Sunshine Custom Builders. From start to finish, they were professional, responsive, and took pride in their work. Their attention to detail really stood out, and the finished project turned out better than we expected. It's clear they have a lot of experience in the construction business. Highly recommend!",
    },
  ],
};

const trustBarItems: TrustBarItem[] = [
  { label: business.name, sub: "Licensed General Contractor" },
  { label: business.license, sub: "Florida Contractor License" },
  { label: "Pinellas, Hillsborough & Pasco", sub: "Tampa Bay Service Area" },
];

const whyPoints: WhyPoint[] = [
  {
    title: "Licensed Florida Contractor",
    description: "Work is performed under Florida Contractor License CRC1335865.",
  },
  {
    title: "A Custom Approach",
    description: "Every bathroom is scoped and designed around your home — not a fixed package.",
  },
  {
    title: "High-Quality Finishes",
    description: "Custom cabinetry, stone countertops, and finish work built to last.",
  },
  {
    title: "One Company, Start to Finish",
    description: "A single point of contact managing your renovation, start to finish.",
  },
];

const processSteps: ProcessStep[] = [
  { number: "01", title: "Request a Consultation", description: "Call or text us to get started." },
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

      <LandingHeader
        ctaHref={business.bathroomSmsHref}
        ctaLabel="Text Us"
        ctaEvent="text_click"
        phone={business.bathroomPhone}
        phoneHref={business.bathroomPhoneHref}
      />

      <main className="pb-24 md:pb-0">
        <BathroomHero />
        <TrustBar items={trustBarItems} />
        <BathroomServices />
        <WhySunshine noun="bathroom" points={whyPoints} />
        <BathroomFeaturedProject />
        <BathroomOurWork />
        <WhoThisIsFor
          noun="bathroom"
          body="Built for homeowners planning a complete bathroom renovation — not small handyman repairs."
        />
        <Process noun="bathroom" headingNoun="Bathroom" steps={processSteps} />
        <BathroomQualifier />
        <ServiceArea noun="bathroom" compact areaDetail={business.bathroomServiceAreaDetail} />
        <BathroomFAQ />
        <BathroomReviews />
        <BathroomFinalCTA heading="Ready to Remodel Your Bathroom?" />
      </main>

      <Footer
        phone={business.bathroomPhone}
        phoneHref={business.bathroomPhoneHref}
        areaDetail={business.bathroomServiceAreaDetail}
      />
      <BathroomStickyCTA />
    </>
  );
}
