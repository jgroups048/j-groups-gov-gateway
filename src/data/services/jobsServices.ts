
import { Users, FileText, Search, GraduationCap } from "lucide-react";
import { Service } from "../serviceTypes";

export const jobsServices: Service[] = [
  {
    id: "eshram",
    title: "E-Shram",
    description: "National Database of Unorganized Workers",
    url: "https://eshram.gov.in/",
    icon: Users,
    color: "bg-blue-600",
    category: "jobs"
  },
  {
    id: "labour-card",
    title: "Labour Card",
    description: "Labour welfare and registration services",
    url: "https://labour.gov.in/",
    icon: FileText,
    color: "bg-green-600",
    category: "jobs"
  },
  {
    id: "ncs",
    title: "National Career Service",
    description: "Job matching and career guidance portal",
    url: "https://www.ncs.gov.in/",
    icon: Search,
    color: "bg-indigo-600",
    category: "jobs"
  },
  {
    id: "apprenticeship",
    title: "Apprenticeship India",
    description: "Find apprenticeship opportunities",
    url: "https://www.apprenticeshipindia.gov.in/",
    icon: GraduationCap,
    color: "bg-amber-600",
    category: "jobs"
  }
];
