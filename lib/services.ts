export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: "Personal Finance" | "Business Finance" | "Property & Asset Backed" | "Other Financing";
  summary: string;
  heroText: string;
  whatItIs: string;
  suitableFor: string[];
  keyFeatures: string[];
  documents: string[];
  eligibility: string[];
  process: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "personal-loan",
    name: "Personal Loan",
    shortName: "Personal Loan",
    category: "Personal Finance",
    summary: "Assistance exploring personal loan options for everyday needs, medical expenses, travel, education or other personal requirements.",
    heroText: "Explore personal loan options suited to your requirement, income profile and repayment comfort.",
    whatItIs: "A personal loan is an unsecured or secured facility offered by banks, PSU banks and NBFCs that can generally be used for a range of personal requirements. Bridge Credit helps you understand the options available across our lending network and guides you toward lenders whose products may suit your profile.",
    suitableFor: ["Salaried professionals with a regular income", "Self-employed individuals with documented income", "Applicants who need funds for medical, travel, education or family expenses"],
    keyFeatures: ["Assistance across multiple lenders", "Guidance on suitable loan structures", "Support in understanding documentation", "Clear communication throughout the process"],
    documents: ["Identity proof (e.g. PAN, Aadhaar)", "Address proof", "Income proof (salary slips or ITR)", "Bank statements", "Passport-size photographs"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile.", "Factors typically considered include income, credit history, employment type and existing obligations."],
    process: ["Share your requirement with our team", "We help you understand your profile", "We identify lenders whose products may suit you", "You proceed with the application directly with the chosen lender"],
    faqs: [
      { q: "Does Bridge Credit lend money directly?", a: "No. Bridge Credit is a loan assistance firm that helps you explore options across banks, PSU banks and NBFCs. Lending decisions are made by the respective institution." },
      { q: "How long does the process take?", a: "Timelines vary by lender and applicant profile, and depend on documentation and internal approval processes at the lending institution." },
      { q: "Can self-employed individuals apply?", a: "Yes, self-employed individuals can be considered, subject to the specific lender's documentation and eligibility requirements." },
    ],
    related: ["business-loan", "gold-loan", "unsecured-loans"],
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    shortName: "Business Loan",
    category: "Business Finance",
    summary: "Guidance on business financing options for working capital, expansion, equipment or other operational requirements.",
    heroText: "Understand suitable financing routes for growing or running your business.",
    whatItIs: "Business loans are offered by banks, PSU banks and NBFCs to support working capital, expansion, equipment purchase and other operational needs. Bridge Credit helps business owners understand which lending channels and structures may be relevant to their situation.",
    suitableFor: ["Small and medium business owners", "Proprietorships, partnerships and companies", "Businesses seeking working capital or expansion funding"],
    keyFeatures: ["Access to multiple lending channels", "Guidance across loan structures (term loan, OD, working capital)", "Support in organising business documentation", "Solution-focused approach based on business profile"],
    documents: ["Business registration proof", "KYC of proprietor/partners/directors", "Bank statements (business account)", "Financial statements / ITR", "GST returns, where applicable"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile.", "Lenders typically evaluate business vintage, turnover, cash flow and credit history."],
    process: ["Tell us about your business requirement", "We understand your business profile and documentation", "We help you explore suitable lender options", "You proceed with your chosen lender's application process"],
    faqs: [
      { q: "What types of business loans are available?", a: "Options can include term loans, working capital finance, and overdraft/OD limits, depending on the lender and your business profile." },
      { q: "Is collateral always required?", a: "Not always — this depends on the loan amount, lender policy and business profile. Secured and unsecured options may both be available." },
    ],
    related: ["od-working-capital", "secured-loans", "loan-against-property"],
  },
  {
    slug: "car-loan",
    name: "Car Loan",
    shortName: "Car Loan",
    category: "Personal Finance",
    summary: "Assistance with vehicle financing for new or used cars through our banking and NBFC network.",
    heroText: "Explore vehicle financing options for your next car purchase.",
    whatItIs: "Car loans help finance the purchase of a new or used vehicle, typically secured against the vehicle itself. Bridge Credit helps you compare available routes across banks, PSU banks and NBFCs.",
    suitableFor: ["Individuals purchasing a new or used car", "Salaried and self-employed applicants"],
    keyFeatures: ["Assistance for new and used vehicle financing", "Guidance across multiple lenders", "Support with documentation"],
    documents: ["Identity and address proof", "Income proof", "Bank statements", "Vehicle quotation/invoice (for new vehicles)"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile."],
    process: ["Share your vehicle financing requirement", "We understand your profile", "We help identify suitable lenders", "You proceed with your chosen lender"],
    faqs: [
      { q: "Can used cars be financed?", a: "Many lenders offer used-car financing, though terms and eligibility differ from new-vehicle loans." },
    ],
    related: ["personal-loan", "secured-loans"],
  },
  {
    slug: "agricultural-loan",
    name: "Agricultural Loan",
    shortName: "Agri Loan",
    category: "Other Financing",
    summary: "Guidance on financing options for farmers and agricultural applicants through banks and PSU banks.",
    heroText: "Financing routes designed around agricultural and farming requirements.",
    whatItIs: "Agricultural loans support farming-related needs such as crop production, equipment or land-related requirements. These are typically offered through banks and PSU banks with agriculture-focused lending programmes.",
    suitableFor: ["Farmers and agricultural applicants", "Individuals with agricultural land or allied activity"],
    keyFeatures: ["Guidance across bank and PSU bank agri-lending programmes", "Support in understanding documentation specific to agricultural finance"],
    documents: ["Identity and address proof", "Land ownership/records, where applicable", "Income or crop-related documentation"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile."],
    process: ["Share your requirement", "We understand your agricultural profile", "We help identify suitable lenders", "You proceed with your chosen lender"],
    faqs: [
      { q: "Are agricultural loans only for crop production?", a: "Programmes can vary by lender and may cover equipment, allied activities or land-related needs — availability depends on the specific institution." },
    ],
    related: ["gold-loan", "secured-loans"],
  },
  {
    slug: "gold-loan",
    name: "Gold Loan",
    shortName: "Gold Loan",
    category: "Personal Finance",
    summary: "Assistance exploring loans secured against gold ornaments or jewellery.",
    heroText: "Explore financing secured against your gold assets.",
    whatItIs: "A gold loan is a secured facility offered against gold ornaments or jewellery. It is generally used where a quicker route to funds is needed, subject to the lender's valuation and policies.",
    suitableFor: ["Individuals holding gold ornaments/jewellery", "Applicants seeking secured, asset-backed financing"],
    keyFeatures: ["Guidance on lenders offering gold-backed financing", "Support in understanding valuation and documentation process"],
    documents: ["Identity and address proof", "Gold ornaments/jewellery for valuation"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile.", "Loan amount is typically linked to the lender's valuation of the gold."],
    process: ["Share your requirement", "Lender evaluates the gold and your profile", "We help you understand the offered terms", "You proceed with the chosen lender"],
    faqs: [
      { q: "Is my gold safe with the lender?", a: "Reputed lenders follow secure storage and handling processes; specific procedures vary by institution." },
    ],
    related: ["secured-loans", "personal-loan"],
  },
  {
    slug: "loan-against-property",
    name: "Loan Against Property",
    shortName: "LAP",
    category: "Property & Asset Backed",
    summary: "Financing options secured against residential or commercial property for larger requirements.",
    heroText: "Unlock financing against your property for larger personal or business needs.",
    whatItIs: "A loan against property (LAP) is a secured facility where residential or commercial property is pledged as collateral, generally used for larger financing requirements including business expansion or major expenses.",
    suitableFor: ["Property owners seeking larger loan amounts", "Business owners requiring growth capital", "Individuals with high-value personal requirements"],
    keyFeatures: ["Guidance on lenders offering LAP", "Support in understanding property-related documentation", "Assistance comparing structures across lenders"],
    documents: ["Identity and address proof", "Property title documents", "Income proof", "Bank statements"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile.", "Property valuation and clear title are typically required."],
    process: ["Share your requirement and property details", "We help assess suitability", "We connect you to relevant lenders", "You proceed with the chosen lender's process"],
    faqs: [
      { q: "Can commercial property be used as collateral?", a: "Many lenders accept both residential and commercial property, subject to their specific policies." },
    ],
    related: ["secured-loans", "business-loan"],
  },
  {
    slug: "od-working-capital",
    name: "OD / Working Capital",
    shortName: "OD / Working Capital",
    category: "Business Finance",
    summary: "Overdraft and working capital limits to help manage day-to-day business cash flow.",
    heroText: "Manage business cash flow with the right working capital structure.",
    whatItIs: "Overdraft (OD) and working capital facilities help businesses manage short-term cash flow needs, offering flexible access to funds up to a sanctioned limit.",
    suitableFor: ["Businesses with fluctuating cash flow needs", "Business owners seeking flexible short-term credit"],
    keyFeatures: ["Guidance across OD and working capital structures", "Support comparing lender-specific terms", "Assistance with documentation"],
    documents: ["Business KYC and registration", "Bank statements", "Financial statements", "GST returns, where applicable"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile."],
    process: ["Share your working capital requirement", "We understand your cash flow profile", "We help identify suitable lenders", "You proceed with the chosen lender"],
    faqs: [
      { q: "How is OD different from a term loan?", a: "An OD limit offers flexible access to funds up to a sanctioned limit and interest is generally charged on the utilised amount, unlike a term loan with a fixed repayment schedule. Exact structures vary by lender." },
    ],
    related: ["business-loan", "secured-loans"],
  },
  {
    slug: "secured-loans",
    name: "Secured Loans",
    shortName: "Secured Loans",
    category: "Property & Asset Backed",
    summary: "Loans backed by collateral such as property or gold, generally suited for larger amounts.",
    heroText: "Asset-backed financing options across our lending network.",
    whatItIs: "Secured loans are backed by collateral such as property, gold or other assets. Because they carry lower risk for the lender, they can offer access to larger loan amounts, depending on the lender's policy.",
    suitableFor: ["Applicants with property, gold or other qualifying assets", "Those seeking larger loan amounts"],
    keyFeatures: ["Guidance across secured lending options", "Assistance understanding collateral requirements"],
    documents: ["Identity and address proof", "Collateral-related documents", "Income proof"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile."],
    process: ["Share your requirement and available collateral", "We assess suitable structures", "We connect you with relevant lenders", "You proceed with the chosen lender"],
    faqs: [
      { q: "What is a secured loan?", a: "A secured loan is backed by collateral, such as property or gold, which the lender can claim if the loan is not repaid as agreed." },
    ],
    related: ["loan-against-property", "gold-loan", "unsecured-loans"],
  },
  {
    slug: "unsecured-loans",
    name: "Unsecured Loans",
    shortName: "Unsecured Loans",
    category: "Other Financing",
    summary: "Financing options that do not require collateral, based primarily on income and credit profile.",
    heroText: "Explore financing options that don't require you to pledge an asset.",
    whatItIs: "Unsecured loans do not require collateral and are typically sanctioned based on income, credit history and repayment capacity. Personal loans are a common example.",
    suitableFor: ["Applicants without collateral to pledge", "Salaried and self-employed individuals with steady income"],
    keyFeatures: ["No collateral requirement", "Guidance across lenders offering unsecured products"],
    documents: ["Identity and address proof", "Income proof", "Bank statements"],
    eligibility: ["Eligibility, documentation, interest rates, loan amount and other terms may vary by lender and applicant profile.", "Credit history is typically a key factor for unsecured loans."],
    process: ["Share your requirement", "We assess your profile", "We identify suitable lenders", "You proceed with the chosen lender"],
    faqs: [
      { q: "What is the difference between secured and unsecured loans?", a: "Secured loans require collateral, such as property or gold, while unsecured loans are sanctioned based on income and credit profile without pledging an asset." },
    ],
    related: ["personal-loan", "secured-loans"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const categories = [
  "Personal Finance",
  "Business Finance",
  "Property & Asset Backed",
  "Other Financing",
] as const;
