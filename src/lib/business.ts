/**
 * Verified business facts used across the site. Only add claims here that are
 * confirmed — this file is the single source of truth so unverified marketing
 * copy (years in business, project counts, awards, financing) never sneaks in.
 */
export const business = {
  name: "Sunshine Custom Builders",
  licenseLabel: "Florida Contractor License",
  license: "CRC1335865",
  landingPhone: "(586) 322-3320",
  landingPhoneHref: "tel:+15863223320",
  landingSmsHref: "sms:+15863223320",
  serviceArea: "Tampa Bay, Florida",
  serviceAreaDetail: "Pinellas County and surrounding Tampa Bay communities",
  // Bathroom landing page only — a different tracking number/service-area framing than the
  // rest of the site. Do not use these on the Kitchen page.
  bathroomPhone: "727-460-6100",
  bathroomPhoneHref: "tel:+17274606100",
  bathroomSmsHref: "sms:+17274606100",
  bathroomServiceAreaDetail: "the Tampa Bay area, including Pinellas, Hillsborough, and Pasco counties",
  minProject: 10000,
  minProjectLabel: "$10,000",
  siteUrl: "https://sunshinecustom.homes",
  landingPath: "/kitchen-remodeling",
};
