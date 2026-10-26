/** Single source of truth for all portfolio content. Edit here, UI updates everywhere. */

export const profile = {
  name: "Govind Yadav",
  role: "Aspiring Data Analyst",
  roles: ["Data Analyst", "Python · SQL Developer", "Cybersecurity Enthusiast"],
  location: "Jaipur, India",
  email: "govindyadav.dev@gmail.com",
  phone: "+91-8094710777",
  photo: "/govind.png",
  resume: "/Govind_Yadav_Resume.pdf",
  summary:
    "Detail-oriented Computer Science (B.Tech) student and aspiring Data Analyst with hands-on experience in Python, SQL, and relational databases (MS SQL Server) for data cleaning, querying, and analysis. Skilled in transforming raw data into actionable insights through statistical analysis and Excel-based visualization.",
} as const;

/** Leave `href` empty ("") to hide a link until the real URL is added. */
export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/govindyadavofficial", handle: "govindyadavofficial" },
  { id: "github", label: "GitHub", href: "", handle: "" },
  { id: "instagram", label: "Instagram", href: "", handle: "" },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
  { id: "phone", label: "Phone", href: "tel:+918094710777", handle: profile.phone },
] as const;

export const stats = [
  { value: 10000, suffix: "+", label: "Rows analysed" },
  { value: 18, suffix: "%", label: "Revenue swing found" },
  { value: 5, suffix: "", label: "Certifications" },
  { value: 3, suffix: "NF", label: "Normalized schema" },
] as const;

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 92 },
    { name: "Pandas", level: 88 },
    { name: "NumPy", level: 82 },
  ],
  groups: [
    { title: "Databases", items: ["MS SQL Server", "MongoDB (NoSQL)", "DBMS", "Relational Database Design"] },
    {
      title: "Analysis & Tools",
      items: ["Excel (Pivot Tables, VLOOKUP, Charts)", "Data Cleaning", "Data Wrangling", "Data Visualization", "Statistical Analysis", "CRUD Operations"],
    },
    { title: "Concepts", items: ["OOP", "Salesforce CRM", "Access Control & Data Security"] },
    { title: "Soft Skills", items: ["Analytical Thinking", "Problem Solving", "Attention to Detail", "Communication"] },
  ],
} as const;

export const projects = [
  {
    id: "sales-dashboard",
    no: "01",
    title: "Sales Data Analysis & Dashboard",
    stack: ["Python", "Pandas", "Excel"],
    points: [
      "Cleaned and analyzed a ~10,000-row retail Superstore dataset using Python (Pandas, NumPy) to identify trends in revenue, customer segments, and product performance.",
      "Built pivot tables and interactive charts in Excel to visualize KPIs (monthly sales, top products, regional performance), presenting findings in a summary dashboard.",
      "Delivered actionable recommendations that highlighted a 18% revenue swing in the Consumer segment, demonstrating an end-to-end data-analysis workflow from raw data to insight.",
    ],
    visual: "chart",
  },
  {
    id: "records-system",
    no: "02",
    title: "Student/Employee Records Management System",
    stack: ["SQL", "MS SQL Server"],
    points: [
      "Designed a normalized relational database schema (3NF) in MS SQL Server to manage student records, including tables for personal details, attendance, and performance.",
      "Wrote complex SQL queries (JOINs, subqueries, aggregate functions, stored procedures) to generate reports on attendance trends and performance summaries.",
      "Improved data retrieval efficiency by indexing frequently queried columns, reducing query execution time on test datasets.",
    ],
    visual: "schema",
  },
] as const;

export const experience = [
  {
    role: "Advanced Cybersecurity Intern",
    company: "Salesforce",
    period: "May 2025 – Jul 2025",
    points: [
      "Completed an intensive cybersecurity internship on real-world threat detection, vulnerability analysis, and incident mitigation, applying enterprise security frameworks to safeguard sensitive data.",
      "Enforced role-based access control (RBAC) policies across structured data systems, applying Salesforce platform security and data-protection best practices.",
    ],
    tags: ["Threat Detection", "Vulnerability Analysis", "Incident Mitigation", "RBAC"],
  },
] as const;

export const certifications = [
  { title: "Google Cybersecurity Certification", date: "May 2024" },
  { title: "Salesforce Certification", date: "Jul 2024" },
  { title: "MongoDB Certification", date: "Aug 2024" },
  { title: "CISCO Programming Essentials in C", date: "Dec 2023" },
  { title: "Spoken Tutorial C++ Training Certificate", date: "Nov 2023" },
] as const;

export const education = [
  {
    school: "Arya College of Engineering & IT, Jaipur (RTU)",
    degree: "B.Tech – Computer Science Engineering",
    period: "Aug 2022 – May 2026",
    tags: ["Database Management Systems", "OOP", "Statistics & Probability"],
  },
  { school: "Rajasthan International School, Jaipur", degree: "Senior Secondary (XII), CBSE", period: "Jul 2022", tags: [] },
  { school: "Emmanuel Mission School, Jaipur", degree: "Secondary (X), RBSE", period: "Jul 2020", tags: [] },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
