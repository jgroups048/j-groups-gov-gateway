
import { Landmark, FileText } from "lucide-react";
import { Service } from "../serviceTypes";

export const certificateServices: Service[] = [
  {
    id: "income-certificate",
    title: "Income Certificate",
    description: "Apply for state income certificate",
    url: "#",
    icon: FileText,
    color: "bg-indigo-600",
    category: "certificates",
    requiresState: true
  },
  {
    id: "domicile-certificate",
    title: "Domicile Certificate",
    description: "Apply for state domicile/residence proof",
    url: "#",
    icon: FileText,
    color: "bg-purple-600",
    category: "certificates",
    requiresState: true
  },
  {
    id: "caste-certificate",
    title: "Caste Certificate",
    description: "Apply for state caste certificate",
    url: "#",
    icon: FileText,
    color: "bg-amber-600",
    category: "certificates",
    requiresState: true
  },
  {
    id: "bihar-rtps",
    title: "Bihar RTPS",
    description: "Right to Public Services for Bihar residents",
    url: "https://rtps.bihar.gov.in",
    icon: Landmark,
    color: "bg-blue-600",
    category: "certificates"
  },
  {
    id: "jharkhand",
    title: "Jharkhand Services",
    description: "e-Services portal for Jharkhand state",
    url: "https://jharsewa.jharkhand.gov.in",
    icon: Landmark,
    color: "bg-green-600",
    category: "certificates"
  },
  {
    id: "up-edistrict",
    title: "UP e-District",
    description: "Online services for Uttar Pradesh residents",
    url: "https://edistrict.up.gov.in",
    icon: Landmark,
    color: "bg-yellow-600",
    category: "certificates"
  },
  {
    id: "mp-edistrict",
    title: "MP e-District",
    description: "Online services for Madhya Pradesh residents",
    url: "https://mpedistrict.gov.in",
    icon: Landmark,
    color: "bg-purple-600",
    category: "certificates"
  },
  {
    id: "punjab-edistrict",
    title: "Punjab e-District",
    description: "Online services for Punjab residents",
    url: "https://punjabedistrict.gov.in",
    icon: Landmark,
    color: "bg-red-600",
    category: "certificates"
  }
];
