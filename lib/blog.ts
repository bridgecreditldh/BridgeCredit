export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  relatedServices: string[];
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "personal-loan-what-you-should-know",
    title: "Personal Loan: What You Should Know Before Applying",
    excerpt: "A practical look at what to consider before applying for a personal loan, from documentation to repayment planning.",
    category: "Personal Loans",
    readTime: "5 min read",
    relatedServices: ["personal-loan", "unsecured-loans"],
    body: [
      { paragraphs: ["A personal loan can be a useful way to cover expenses ranging from medical bills to travel or home improvements. Because it is typically unsecured, lenders assess your income, credit history and existing obligations before deciding on eligibility and terms."] },
      { heading: "Understand your actual requirement", paragraphs: ["Before applying, it helps to be clear about how much you need and why. Borrowing more than necessary adds to your repayment burden, while borrowing too little may leave your requirement unmet."] },
      { heading: "Check your credit profile", paragraphs: ["Your credit history plays a significant role in the interest rate and amount a lender may offer. Reviewing your credit report beforehand can help you understand where you stand."] },
      { heading: "Keep documentation ready", paragraphs: ["Most lenders will ask for identity proof, address proof, income proof and bank statements. Having these organised in advance can make the process smoother."], list: ["Identity and address proof", "Recent salary slips or income tax returns", "Bank statements for the last few months"] },
      { heading: "Compare structures, not just headline rates", paragraphs: ["Processing fees, prepayment terms and tenure flexibility can matter as much as the interest rate itself. It helps to look at the complete picture before deciding."] },
      { heading: "FAQ", paragraphs: ["Does a personal loan require collateral? Generally no — personal loans are usually unsecured, though this can vary by lender and loan amount."] },
    ],
  },
  {
    slug: "business-loan-guide-small-business-owners",
    title: "Business Loan Guide for Small Business Owners",
    excerpt: "How small business owners can think about financing options for working capital, expansion and equipment needs.",
    category: "Business Loans",
    readTime: "6 min read",
    relatedServices: ["business-loan", "od-working-capital"],
    body: [
      { paragraphs: ["Small businesses often need external financing at different stages — to manage cash flow, buy equipment or fund expansion. Understanding the available structures can help you choose the right fit."] },
      { heading: "Term loans vs working capital", paragraphs: ["A term loan is generally used for a specific purpose with a fixed repayment schedule, while working capital or OD facilities offer more flexible, ongoing access to funds for day-to-day operations."] },
      { heading: "What lenders typically look at", paragraphs: ["Business vintage, turnover, bank statement patterns and existing liabilities are commonly assessed. Having organised financial records can support a smoother evaluation."], list: ["Business registration and KYC documents", "Bank statements", "Financial statements or tax filings", "GST returns, where applicable"] },
      { heading: "Matching the loan to the need", paragraphs: ["Equipment purchases, seasonal inventory and long-term expansion each suit different financing structures. It's worth discussing your specific need before choosing a product."] },
    ],
  },
  {
    slug: "documents-commonly-required-loan-application",
    title: "Documents Commonly Required for a Loan Application",
    excerpt: "A general overview of the documentation typically requested across personal and business loan applications.",
    category: "Documentation",
    readTime: "4 min read",
    relatedServices: ["personal-loan", "business-loan"],
    body: [
      { paragraphs: ["While exact requirements vary by lender and loan type, most applications ask for a similar core set of documents."] },
      { heading: "For individuals", paragraphs: [""], list: ["Identity proof (PAN, Aadhaar, passport)", "Address proof", "Income proof (salary slips or ITR)", "Bank statements", "Passport-size photographs"] },
      { heading: "For businesses", paragraphs: [""], list: ["Business registration documents", "KYC of proprietors/partners/directors", "Bank statements", "Financial statements or tax filings"] },
      { heading: "A note on accuracy", paragraphs: ["Providing accurate, complete documentation upfront generally helps avoid delays later in the process."] },
    ],
  },
  {
    slug: "secured-vs-unsecured-loans",
    title: "Secured vs Unsecured Loans: What's the Difference?",
    excerpt: "Understanding the key differences between secured and unsecured financing to help you evaluate your options.",
    category: "Secured Loans",
    readTime: "4 min read",
    relatedServices: ["secured-loans", "unsecured-loans"],
    body: [
      { paragraphs: ["The core difference between secured and unsecured loans is collateral. Secured loans are backed by an asset such as property or gold, while unsecured loans rely on your income and credit profile."] },
      { heading: "Secured loans", paragraphs: ["Because the lender has recourse to collateral, secured loans can offer access to larger amounts, and may come with different terms depending on the asset pledged."] },
      { heading: "Unsecured loans", paragraphs: ["Without collateral, lenders rely more heavily on credit history and income stability, which can affect the loan amount and terms offered."] },
      { heading: "Which is right for you?", paragraphs: ["The right choice depends on your requirement, whether you have a qualifying asset, and how you weigh flexibility against loan amount. Speaking with our team can help clarify which route may suit your situation."] },
    ],
  },
  {
    slug: "what-is-loan-against-property",
    title: "What Is a Loan Against Property?",
    excerpt: "An overview of how loan against property works, who it may suit, and what to keep in mind.",
    category: "Secured Loans",
    readTime: "5 min read",
    relatedServices: ["loan-against-property", "secured-loans"],
    body: [
      { paragraphs: ["A loan against property (LAP) allows you to raise funds by pledging residential or commercial property as collateral, without selling it."] },
      { heading: "Common uses", paragraphs: ["LAP is often used for business expansion, education, medical expenses or consolidating other debts, given the typically larger loan amounts available."] },
      { heading: "What lenders evaluate", paragraphs: ["Property valuation, clear title, and the applicant's income and repayment capacity are typically assessed."] },
      { heading: "Things to consider", paragraphs: ["Since the property is pledged as security, it's important to be confident in your repayment plan before proceeding."] },
    ],
  },
  {
    slug: "understanding-working-capital-od-limits",
    title: "Understanding Working Capital and OD Limits",
    excerpt: "How overdraft and working capital facilities help businesses manage short-term cash flow.",
    category: "Business Loans",
    readTime: "4 min read",
    relatedServices: ["od-working-capital", "business-loan"],
    body: [
      { paragraphs: ["Working capital and overdraft (OD) facilities are designed to help businesses bridge short-term cash flow gaps rather than fund long-term investments."] },
      { heading: "How OD limits typically work", paragraphs: ["An OD limit allows a business to withdraw funds up to a sanctioned amount as needed, with interest generally charged on the amount utilised rather than the full limit."] },
      { heading: "When it's useful", paragraphs: ["Seasonal businesses, or those with fluctuating receivables and payables, often find flexible working capital facilities helpful for smoothing out cash flow."] },
    ],
  },
  {
    slug: "how-to-compare-different-loan-options",
    title: "How to Compare Different Loan Options",
    excerpt: "A framework for evaluating loan options beyond just the interest rate.",
    category: "General",
    readTime: "5 min read",
    relatedServices: ["personal-loan", "secured-loans", "unsecured-loans"],
    body: [
      { paragraphs: ["It's tempting to compare loans purely on interest rate, but a fuller picture includes several other factors."] },
      { heading: "Factors worth comparing", paragraphs: [""], list: ["Interest rate and whether it's fixed or floating", "Processing fees and other charges", "Prepayment and foreclosure terms", "Loan tenure and repayment flexibility", "Documentation requirements"] },
      { heading: "Matching the loan to your goal", paragraphs: ["A short-term personal need and a long-term business investment may call for very different loan structures — it helps to start from your actual goal rather than the lowest rate alone."] },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
