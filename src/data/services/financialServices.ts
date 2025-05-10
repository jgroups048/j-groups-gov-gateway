
import { Receipt, Briefcase, Building } from "lucide-react";
import { Service } from "../serviceTypes";

export const financialServices: Service[] = [
  {
    id: "gst-portal",
    title: "GST Portal",
    description: "Goods and Services Tax registration and filing",
    url: "https://www.gst.gov.in/",
    icon: Receipt,
    color: "bg-blue-600",
    category: "financial"
  },
  {
    id: "income-tax",
    title: "Income Tax",
    description: "e-Filing of income tax returns and more",
    url: "https://www.incometax.gov.in/iec/foportal/",
    icon: Receipt,
    color: "bg-green-600",
    category: "financial"
  },
  {
    id: "epfo",
    title: "PF (EPFO)",
    description: "Employee Provident Fund services",
    url: "https://www.epfindia.gov.in/",
    icon: Briefcase,
    color: "bg-indigo-600",
    category: "financial"
  },
  {
    id: "esi-portal",
    title: "ESI Portal",
    description: "Employee State Insurance services",
    url: "https://www.esic.in/",
    icon: Briefcase,
    color: "bg-purple-600",
    category: "financial"
  },
  {
    id: "udyam-registration",
    title: "UDYAM Registration",
    description: "Register your MSME/small business",
    url: "https://udyamregistration.gov.in/",
    icon: Building,
    color: "bg-amber-600",
    category: "financial"
  }
];
