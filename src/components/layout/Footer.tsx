import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-white">{business.name}</p>
            <p className="mt-2 text-sm">
              {business.licenseLabel}: {business.license}
            </p>
            <p className="text-sm">Serving {business.serviceAreaDetail}</p>
          </div>
          <div className="text-sm">
            <a
              href={business.landingPhoneHref}
              onClick={() => track("phone_click", { surface: "footer" })}
              className="text-gold-light hover:text-gold"
            >
              {business.landingPhone}
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. Licensed Florida General
            Contractor, {business.license}. All information is provided for general reference;
            project scope, pricing, and timelines are determined during consultation.
          </p>
        </div>
      </div>
    </footer>
  );
}
