import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { business } from "@/lib/business";

/**
 * Placeholder homepage. This repo currently exists to ship the
 * /kitchen-remodeling ad landing page; the full marketing site (this route)
 * still needs to be built out separately.
 */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>{business.name} | Tampa Bay General Contractor</title>
        <meta
          name="description"
          content={`${business.name} is a licensed Florida general contractor (${business.license}) serving ${business.serviceArea}.`}
        />
      </Helmet>
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-navy px-6 text-center text-white">
        <p className="font-display text-3xl md:text-4xl">{business.name}</p>
        <p className="mt-3 text-white/60">
          Licensed Florida Contractor &middot; {business.license} &middot; {business.serviceArea}
        </p>
        <Link
          to="/kitchen-remodeling"
          className="mt-8 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy-dark hover:bg-gold-dark"
        >
          View Kitchen Remodeling
        </Link>
      </main>
      <Footer />
    </>
  );
}
