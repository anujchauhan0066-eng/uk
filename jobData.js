// Job data generator - deterministically generates 100,000 jobs for the UK
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aerospace Engineer", "Pilot", "Cabin Crew", "Airport Manager",
  "NHS Administrator", "GP", "Consultant", "Surgeon", "Dentist"
];

// UK-based companies + global companies with UK presence
const companies = [
  // UK-based giants
  "BBC", "Sky UK", "ITV", "Channel 4", "BT Group", "Vodafone UK", "EE",
  "Lloyds Banking Group", "Barclays", "HSBC UK", "NatWest", "Santander UK",
  "Tesco", "Sainsbury's", "Asda", "Morrisons", "Marks & Spencer", "John Lewis",
  "Unilever UK", "Reckitt Benckiser", "Diageo", "British American Tobacco",
  "BP", "Shell UK", "Centrica", "National Grid", "SSE",
  "Rolls-Royce", "BAE Systems", "Boeing UK", "Airbus UK",
  "GSK (GlaxoSmithKline)", "AstraZeneca", "Pfizer UK", "Novartis UK",
  "HSBC", "Standard Chartered", "JPMorgan UK", "Goldman Sachs UK",
  "Accenture UK", "Deloitte UK", "PwC UK", "KPMG UK", "EY UK",
  "McKinsey UK", "Boston Consulting Group UK",
  "WPP", "Publicis UK", "Omnicom UK",
  "Dyson", "Jaguar Land Rover", "Aston Martin", "Bentley",
  "Virgin Group", "Virgin Media", "Virgin Atlantic",
  "EasyJet", "British Airways", "Ryanair UK", "Jet2",
  "NHS England", "NHS Scotland", "NHS Wales", "NHS Northern Ireland",
  "University of Oxford", "University of Cambridge", "Imperial College London",
  "King's College London", "University of Edinburgh", "University of Manchester",
  
  // Tech & Digital
  "Google UK", "Amazon UK", "Microsoft UK", "Apple UK", "Meta UK", "Netflix UK",
  "IBM UK", "Oracle UK", "Cisco UK", "Dell UK", "HP UK", "SAP UK", "Salesforce UK",
  "Spotify UK", "Uber UK", "Deliveroo", "Just Eat", "TransferWise (Wise)",
  "Monzo", "Revolut", "Starling Bank", "OakNorth Bank",
  
  // Retail & E-commerce
  "ASOS", "Boohoo", "THG (The Hut Group)", "Shopify UK", "eBay UK",
  "Ocado", "Waitrose", "Co-op", "Aldi UK", "Lidl UK",
  
  // Media & Entertainment
  "The Guardian", "The Times", "Daily Mail", "Telegraph", "News UK",
  "Warner Bros UK", "Disney UK", "NBC Universal UK", "Sky Studios",
  
  // Professional Services
  "Allen & Overy", "Clifford Chance", "Linklaters", "Slaughter and May",
  "Freshfields Bruckhaus Deringer", "Pinsent Masons",
  
  // Real Estate
  "Taylor Wimpey", "Persimmon Homes", "Barratt Developments", "Berkeley Group",
  "Savills", "Knight Frank", "CBRE UK", "JLL UK",
  
  // Hospitality
  "Premier Inn", "Holiday Inn UK", "Marriott UK", "Hilton UK",
  "Gordon Ramsay Restaurants", "The Ritz", "The Savoy",
  
  // Government & Public Sector
  "Civil Service UK", "HM Revenue & Customs", "Ministry of Defence",
  "Department for Education", "Department of Health and Social Care"
];

const ukLocations = [
  // London
  "London (Central)", "City of London", "Canary Wharf, London", "Westminster, London",
  "Camden, London", "Islington, London", "Southwark, London", "Tower Hamlets, London",
  "Kensington, London", "Chelsea, London", "Hackney, London", "Brixton, London",
  "Ealing, London", "Richmond, London", "Greenwich, London", "Stratford, London",
  "Wembley, London", "Croydon, London", "Uxbridge, London", "Romford, London",
  
  // Greater London suburbs
  "Slough", "Reading", "Watford", "Luton", "Basildon", "Southend-on-Sea",
  
  // South East
  "Brighton", "Southampton", "Portsmouth", "Bournemouth", "Oxford",
  "Cambridge", "Milton Keynes", "Guildford", "Maidstone", "Canterbury",
  
  // South West
  "Bristol", "Plymouth", "Exeter", "Bath", "Swindon", "Gloucester",
  "Bournemouth", "Poole", "Torquay", "St Austell",
  
  // West Midlands
  "Birmingham", "Coventry", "Wolverhampton", "Stoke-on-Trent", "Worcester",
  "Hereford", "Telford", "Shrewsbury", "Redditch", "Bromsgrove",
  
  // North West
  "Manchester", "Liverpool", "Leeds", "Sheffield", "Bradford", "Huddersfield",
  "Blackpool", "Preston", "Burnley", "Bolton", "Wigan", "Oldham",
  "Rochdale", "Bury", "Stockport", "Salford",
  
  // Yorkshire and the Humber
  "York", "Hull", "Harrogate", "Scarborough", "Wakefield", "Doncaster",
  "Rotherham", "Halifax", "Dewsbury", "Barnsley",
  
  // North East
  "Newcastle upon Tyne", "Sunderland", "Durham", "Middlesbrough",
  "Darlington", "Hartlepool", "Stockton-on-Tees",
  
  // East Midlands
  "Nottingham", "Leicester", "Derby", "Northampton", "Lincoln",
  "Leamington Spa", "Warwick", "Rugby", "Corby",
  
  // East of England
  "Ipswich", "Norwich", "Colchester", "Chelmsford", "Peterborough",
  "Stevenage", "Harlow", "Bishop's Stortford",
  
  // Wales
  "Cardiff", "Swansea", "Newport", "Bangor", "Llandudno",
  "Wrexham", "Carmarthen", "Aberystwyth",
  
  // Scotland
  "Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness",
  "Stirling", "Perth", "Ayr", "Falkirk", "Livingston",
  "Dunfermline", "Motherwell", "Hamilton", "Kilmarnock",
  
  // Northern Ireland
  "Belfast", "Derry/Londonderry", "Lisburn", "Newry", "Coleraine",
  "Omagh", "Enniskillen", "Armagh",
  
  // Remote
  "Remote — UK", "Remote — London, UK", "Remote — England", "Remote — Scotland",
  "Remote — Wales", "Remote — Northern Ireland",
  
  // Rural/Islands
  "Isle of Wight", "Isle of Man", "Channel Islands", "Orkney Islands",
  "Shetland Islands", "Outer Hebrides"
];

const salaryRanges = [
  // Entry Level / Graduate (£18k-£25k)
  { display: "£18,000 – 22,000 per annum", min: 18000, max: 22000 },
  { display: "£22,000 – 26,000 per annum", min: 22000, max: 26000 },
  { display: "£24,000 – 28,000 per annum", min: 24000, max: 28000 },
  // Mid Level (£28k-£45k)
  { display: "£28,000 – 32,000 per annum", min: 28000, max: 32000 },
  { display: "£32,000 – 38,000 per annum", min: 32000, max: 38000 },
  { display: "£38,000 – 45,000 per annum", min: 38000, max: 45000 },
  // Senior Level (£45k-£75k)
  { display: "£45,000 – 55,000 per annum", min: 45000, max: 55000 },
  { display: "£55,000 – 65,000 per annum", min: 55000, max: 65000 },
  { display: "£65,000 – 75,000 per annum", min: 65000, max: 75000 },
  // Executive (£75k-£150k+)
  { display: "£75,000 – 90,000 per annum", min: 75000, max: 90000 },
  { display: "£90,000 – 110,000 per annum", min: 90000, max: 110000 },
  { display: "£110,000 – 150,000 per annum", min: 110000, max: 150000 },
  // Hourly rates (part-time/temp)
  { display: "£11.50 – 14.00 per hour", min: 11.50, max: 14.00 },
  { display: "£14.00 – 18.00 per hour", min: 14.00, max: 18.00 },
  { display: "£18.00 – 25.00 per hour", min: 18.00, max: 25.00 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Junior", schema: "1 year experience" },
  { display: "Mid Level",   schema: "2-3 years experience" },
  { display: "Senior Level",schema: "5+ years experience" },
  { display: "Lead",        schema: "7+ years experience" },
  { display: "Manager",     schema: "5+ years experience" },
  { display: "Director",    schema: "8+ years experience" },
  { display: "Executive",   schema: "10+ years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government & Public Sector",
  "Pharmaceuticals", "Biotechnology", "Defense", "Creative Arts", "Charity & Non-Profit"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in the UK. ${isRemote ? "This is a fully remote role open to qualified candidates across the United Kingdom." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in the UK and Europe.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field (or equivalent experience)
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary (GBP)
• Private health insurance
• 25-30 days annual leave + bank holidays
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Generous pension scheme
• Employee assistance program`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading UK-based company looking for experienced professionals to scale our impact across the country.

${isRemote ? "This remote-first position allows you to work from anywhere in the UK with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of the world's fastest-growing economies.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in the UK
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive UK salary • Private medical insurance • 25 days annual leave + bank holidays • Pension scheme with employer contribution • Life assurance • Employee discounts • Wellbeing benefits`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of the UK's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in the United Kingdom" : `📍 ${location}`}

We're building the future of business in the UK and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the vibrant UK lifestyle.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the UK.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Private healthcare | 25-30 days holiday + bank holidays | Pension contribution | Life insurance | Discount schemes | Learning budget | Hybrid/remote options`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * ukLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — UK" : ukLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, ukLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-UK-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "London" : job.location.split(',')[0],
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, ukLocations, industries };
