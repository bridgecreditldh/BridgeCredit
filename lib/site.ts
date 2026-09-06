export const site = {
  name: "Bridge Credit",
  tagline: "Authorized Banking Channel Partner",
  description:
    "Bridge Credit helps you explore suitable financing options through a trusted network of banks, PSU banks and NBFCs — personal, business, vehicle, gold and property-backed loans.",
  url: "https://www.bridgecredit.example",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  city: process.env.NEXT_PUBLIC_CITY || "",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
  },
};

export function phoneHref() {
  return site.phone ? `tel:${site.phone}` : "#contact";
}
export function whatsappHref() {
  return site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`
    : "#contact";
}
export function mailHref() {
  return site.email ? `mailto:${site.email}` : "#contact";
}

export const disclaimerShort =
  "Bridge Credit provides loan assistance and facilitates access to financial products from lending institutions. Final approval, interest rates, loan amount, eligibility and terms are determined by the respective lender based on its policies and the applicant's profile.";

export const disclaimerLong =
  "Bridge Credit is a loan assistance and financial services firm. We facilitate access to loan products offered by various lending institutions, including banks, PSU banks and NBFCs. We do not guarantee loan approval. Loan approval, interest rates, fees, tenure, amount and other terms are subject to the policies, eligibility criteria and discretion of the respective lender, and may vary by applicant profile.";
