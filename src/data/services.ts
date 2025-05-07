
import { 
  FileText, 
  User, 
  FileCheck, 
  UserCheck, 
  Car, 
  Award, 
  Baby, 
  GraduationCap, 
  Users, 
  Briefcase, 
  Receipt, 
  Search,
  Building,
  Landmark
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  color: string;
  requiresState?: boolean;
}

export const services: Service[] = [
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    description: "Update, download, or check Aadhaar status",
    url: "https://uidai.gov.in",
    icon: User,
    color: "bg-blue-500"
  },
  {
    id: "pan",
    title: "PAN Card",
    description: "Apply for new PAN or correct existing PAN",
    url: "https://www.pan.utiitsl.com",
    icon: FileText,
    color: "bg-yellow-500"
  },
  {
    id: "passport",
    title: "Passport Services",
    description: "Apply for passport or check application status",
    url: "https://www.passportindia.gov.in",
    icon: FileCheck,
    color: "bg-indigo-600"
  },
  {
    id: "voter",
    title: "Voter ID",
    description: "Registration, correction, and download of voter ID",
    url: "https://voters.eci.gov.in",
    icon: UserCheck,
    color: "bg-pink-500"
  },
  {
    id: "driving",
    title: "Driving License & Vehicle",
    description: "Apply for license, RC, and other vehicle services",
    url: "https://parivahan.gov.in",
    icon: Car,
    color: "bg-green-600"
  },
  {
    id: "certificate",
    title: "Income/Caste/Domicile Certificate",
    description: "Apply for various government certificates",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Award,
    color: "bg-purple-500",
    requiresState: true
  },
  {
    id: "birth-death",
    title: "Birth/Death Certificate",
    description: "Apply for birth or death certificates",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Baby,
    color: "bg-red-500",
    requiresState: true
  },
  {
    id: "domicile",
    title: "Domicile Certificate",
    description: "Apply for state domicile certificate",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Landmark,
    color: "bg-amber-600",
    requiresState: true
  },
  {
    id: "land-records",
    title: "Land Records & Property",
    description: "View land records, mutation, and property details",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Building,
    color: "bg-lime-700",
    requiresState: true
  },
  {
    id: "exams",
    title: "Government Exam Forms",
    description: "Various government exam applications",
    url: "https://ssc.nic.in",
    icon: GraduationCap,
    color: "bg-orange-500"
  },
  {
    id: "eshram",
    title: "E-Shram Card",
    description: "Registration for unorganized workers",
    url: "https://eshram.gov.in",
    icon: Users,
    color: "bg-teal-500"
  },
  {
    id: "epfo",
    title: "EPFO/ESIC",
    description: "Manage PF and social security benefits",
    url: "https://unifiedportal-epfo.epfindia.gov.in",
    icon: Briefcase,
    color: "bg-blue-700"
  },
  {
    id: "gst",
    title: "GST Services",
    description: "Registration, returns, and payments",
    url: "https://www.gst.gov.in",
    icon: Receipt,
    color: "bg-emerald-600"
  },
  {
    id: "jobs",
    title: "Latest Government Job Updates",
    description: "Current government job opportunities",
    url: "https://www.ncs.gov.in",
    icon: Search,
    color: "bg-cyan-600"
  }
];
