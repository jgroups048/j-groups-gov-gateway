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
  Landmark,
  GraduationCap as Education,
  BookOpen,
  FileCheck2,
  School
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
  category?: string;
}

// Service categories
export const categories = [
  { id: "gov", name: "Government Services" },
  { id: "education", name: "Results & Admissions" },
  { id: "admit", name: "Admit Cards" }
];

export const services: Service[] = [
  // Government Services
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    description: "Update, download, or check Aadhaar status",
    url: "https://uidai.gov.in",
    icon: User,
    color: "bg-blue-500",
    category: "gov"
  },
  {
    id: "pan",
    title: "PAN Card",
    description: "Apply for new PAN or correct existing PAN",
    url: "https://www.pan.utiitsl.com",
    icon: FileText,
    color: "bg-yellow-500",
    category: "gov"
  },
  {
    id: "passport",
    title: "Passport Services",
    description: "Apply for passport or check application status",
    url: "https://www.passportindia.gov.in",
    icon: FileCheck,
    color: "bg-indigo-600",
    category: "gov"
  },
  {
    id: "voter",
    title: "Voter ID",
    description: "Registration, correction, and download of voter ID",
    url: "https://voters.eci.gov.in",
    icon: UserCheck,
    color: "bg-pink-500",
    category: "gov"
  },
  {
    id: "driving",
    title: "Driving License & Vehicle",
    description: "Apply for license, RC, and other vehicle services",
    url: "https://parivahan.gov.in",
    icon: Car,
    color: "bg-green-600",
    category: "gov"
  },
  {
    id: "certificate",
    title: "Income/Caste/Domicile Certificate",
    description: "Apply for various government certificates",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Award,
    color: "bg-purple-500",
    requiresState: true,
    category: "gov"
  },
  {
    id: "birth-death",
    title: "Birth/Death Certificate",
    description: "Apply for birth or death certificates",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Baby,
    color: "bg-red-500",
    requiresState: true,
    category: "gov"
  },
  {
    id: "domicile",
    title: "Domicile Certificate",
    description: "Apply for state domicile certificate",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Landmark,
    color: "bg-amber-600",
    requiresState: true,
    category: "gov"
  },
  {
    id: "land-records",
    title: "Land Records & Property",
    description: "View land records, mutation, and property details",
    url: "https://serviceonline.gov.in", // Default URL, will use state-specific URL
    icon: Building,
    color: "bg-lime-700",
    requiresState: true,
    category: "gov"
  },
  {
    id: "exams",
    title: "Government Exam Forms",
    description: "Various government exam applications",
    url: "https://ssc.nic.in",
    icon: GraduationCap,
    color: "bg-orange-500",
    category: "gov"
  },
  {
    id: "eshram",
    title: "E-Shram Card",
    description: "Registration for unorganized workers",
    url: "https://eshram.gov.in",
    icon: Users,
    color: "bg-teal-500",
    category: "gov"
  },
  {
    id: "epfo",
    title: "EPFO/ESIC",
    description: "Manage PF and social security benefits",
    url: "https://unifiedportal-epfo.epfindia.gov.in",
    icon: Briefcase,
    color: "bg-blue-700",
    category: "gov"
  },
  {
    id: "gst",
    title: "GST Services",
    description: "Registration, returns, and payments",
    url: "https://www.gst.gov.in",
    icon: Receipt,
    color: "bg-emerald-600",
    category: "gov"
  },
  {
    id: "jobs",
    title: "Latest Government Job Updates",
    description: "Current government job opportunities",
    url: "https://www.ncs.gov.in",
    icon: Search,
    color: "bg-cyan-600",
    category: "gov"
  },
  
  // Education & Results
  {
    id: "bihar-10th",
    title: "Bihar 10th Result",
    description: "View Bihar Matriculation results",
    url: "https://matricbseb.com",
    icon: School,
    color: "bg-blue-600",
    category: "education"
  },
  {
    id: "bihar-12th",
    title: "Bihar 12th Result",
    description: "View Bihar Intermediate results",
    url: "https://interbseb.com",
    icon: School,
    color: "bg-green-600",
    category: "education"
  },
  {
    id: "bihar-ofss",
    title: "Bihar OFSS (11th Admission)",
    description: "Apply for 11th admission in Bihar",
    url: "https://www.ofssbihar.in",
    icon: BookOpen,
    color: "bg-purple-600",
    category: "education"
  },
  {
    id: "bihar-board",
    title: "Bihar Board Portal",
    description: "Official Bihar Board website",
    url: "https://biharboardonline.bihar.gov.in",
    icon: Education,
    color: "bg-red-600",
    category: "education"
  },
  // Bihar Universities
  {
    id: "patliputra-university",
    title: "Patliputra University",
    description: "Admission, results & exam forms",
    url: "https://ppup.ac.in",
    icon: Education,
    color: "bg-blue-800",
    category: "education"
  },
  {
    id: "magadh-university",
    title: "Magadh University",
    description: "Admission, results & exam forms",
    url: "https://magadhuniversity.ac.in",
    icon: Education,
    color: "bg-green-800",
    category: "education"
  },
  {
    id: "lnmu",
    title: "LNMU",
    description: "Admission, results & exam forms",
    url: "https://lnmu.ac.in",
    icon: Education,
    color: "bg-purple-800",
    category: "education"
  },
  {
    id: "brabu",
    title: "BRABU",
    description: "Admission, results & exam forms",
    url: "https://brabu.net",
    icon: Education,
    color: "bg-indigo-800",
    category: "education"
  },
  {
    id: "tmbu",
    title: "TMBU",
    description: "Admission, results & exam forms",
    url: "https://tmbuniv.ac.in",
    icon: Education,
    color: "bg-pink-800",
    category: "education"
  },
  {
    id: "bnmu",
    title: "BNMU",
    description: "Admission, results & exam forms",
    url: "https://bnmu.ac.in",
    icon: Education,
    color: "bg-yellow-700",
    category: "education"
  },
  // Other State Results
  {
    id: "up-results",
    title: "UP Board Results",
    description: "10th & 12th results for UP Board",
    url: "https://upresults.nic.in",
    icon: School,
    color: "bg-orange-600",
    category: "education"
  },
  {
    id: "cbse-results",
    title: "CBSE Results",
    description: "10th & 12th CBSE board results",
    url: "https://cbseresults.nic.in",
    icon: School,
    color: "bg-red-600",
    category: "education"
  },
  {
    id: "maharashtra-results",
    title: "Maharashtra Board Results",
    description: "10th & 12th Maharashtra board results",
    url: "https://mahresult.nic.in",
    icon: School,
    color: "bg-yellow-600",
    category: "education"
  },
  {
    id: "wb-results",
    title: "West Bengal Results",
    description: "10th & 12th West Bengal board results",
    url: "https://wbresults.nic.in",
    icon: School,
    color: "bg-green-600",
    category: "education"
  },
  {
    id: "tn-results",
    title: "Tamil Nadu Results",
    description: "10th & 12th Tamil Nadu board results",
    url: "https://tnresults.nic.in",
    icon: School,
    color: "bg-blue-600",
    category: "education"
  },
  
  // Admit Cards
  {
    id: "ssc-admit",
    title: "SSC Admit Cards",
    description: "Download SSC exam admit cards",
    url: "https://ssc.nic.in/Portal/AdmitCard",
    icon: FileCheck2,
    color: "bg-blue-600",
    category: "admit"
  },
  {
    id: "upsc-admit",
    title: "UPSC Admit Cards",
    description: "Download UPSC exam admit cards",
    url: "https://upsconline.nic.in",
    icon: FileCheck2,
    color: "bg-green-600",
    category: "admit"
  },
  {
    id: "railway-admit",
    title: "Railway Exam Admits",
    description: "Download Railway exam admit cards",
    url: "https://rrbcdg.gov.in",
    icon: FileCheck2,
    color: "bg-red-600",
    category: "admit"
  },
  {
    id: "bpsc-admit",
    title: "BPSC Admit Cards",
    description: "Download BPSC exam admit cards",
    url: "https://bpsc.bih.nic.in",
    icon: FileCheck2,
    color: "bg-purple-600",
    category: "admit"
  },
  {
    id: "cuet-admit",
    title: "CUET Admit Cards",
    description: "Download CUET exam admit cards",
    url: "https://cuet.samarth.ac.in",
    icon: FileCheck2,
    color: "bg-yellow-600",
    category: "admit"
  }
];
