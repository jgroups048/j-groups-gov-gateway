
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
  { id: "identity", name: "Identity & Documents" },
  { id: "certificates", name: "Certificates & State Services" },
  { id: "student", name: "Student & Exam Services" },
  { id: "financial", name: "Financial & Tax Services" },
  { id: "jobs", name: "Jobs & Labour Services" },
  { id: "tools", name: "All-in-One Government Tools" }
];

export const services: Service[] = [
  // Identity & Documents
  {
    id: "aadhaar",
    title: "Aadhaar Portal",
    description: "Update, download, or check Aadhaar status",
    url: "https://myaadhaar.uidai.gov.in/",
    icon: User,
    color: "bg-blue-500",
    category: "identity"
  },
  {
    id: "pan",
    title: "PAN Card Apply",
    description: "Apply for new PAN or correct existing PAN",
    url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    icon: FileText,
    color: "bg-yellow-500",
    category: "identity"
  },
  {
    id: "voter",
    title: "Voter ID Registration",
    description: "Registration, correction, and download of voter ID",
    url: "https://voters.eci.gov.in/",
    icon: UserCheck,
    color: "bg-pink-500",
    category: "identity"
  },
  {
    id: "passport",
    title: "Passport Services",
    description: "Apply for passport or check application status",
    url: "https://www.passportindia.gov.in/",
    icon: FileCheck,
    color: "bg-indigo-600",
    category: "identity"
  },
  {
    id: "driving",
    title: "Driving License",
    description: "Apply for license, RC, and other vehicle services",
    url: "https://parivahan.gov.in/",
    icon: Car,
    color: "bg-green-600",
    category: "identity"
  },
  
  // Certificates & State Services
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
  },
  
  // Student & Exam Services
  {
    id: "ofss-bihar",
    title: "OFSS Bihar (11th Admission)",
    description: "Online Facilitation System for Students - Bihar",
    url: "http://www.ofssbihar.in/",
    icon: Education,
    color: "bg-blue-600",
    category: "student"
  },
  {
    id: "bseb-results",
    title: "BSEB Bihar Results",
    description: "Bihar School Examination Board Results",
    url: "http://biharboardonline.bihar.gov.in/",
    icon: School,
    color: "bg-green-600",
    category: "student"
  },
  {
    id: "cuet-ug",
    title: "CUET UG",
    description: "Common University Entrance Test for Undergraduate",
    url: "https://cuet.samarth.ac.in/",
    icon: BookOpen,
    color: "bg-purple-600",
    category: "student"
  },
  {
    id: "ugc-net",
    title: "UGC NET",
    description: "National Eligibility Test for Lectureship",
    url: "https://ugcnet.nta.nic.in/",
    icon: Education,
    color: "bg-indigo-600",
    category: "student"
  },
  {
    id: "nta-exams",
    title: "NTA Exams",
    description: "National Testing Agency Examination Portal",
    url: "https://nta.ac.in/",
    icon: FileCheck2,
    color: "bg-red-600",
    category: "student"
  },
  {
    id: "sarkari-result",
    title: "Sarkari Result",
    description: "Latest government job results and notifications",
    url: "https://www.sarkariresult.com",
    icon: Search,
    color: "bg-amber-600",
    category: "student"
  },
  
  // Financial & Tax Services
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
  },
  
  // Jobs & Labour Services
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
    icon: Education,
    color: "bg-amber-600",
    category: "jobs"
  },
  
  // All-in-One Government Tools
  {
    id: "umang",
    title: "UMANG",
    description: "Unified Mobile Application for New-age Governance",
    url: "https://web.umang.gov.in/",
    icon: FileCheck,
    color: "bg-blue-600",
    category: "tools"
  },
  {
    id: "digilocker",
    title: "DigiLocker",
    description: "Online document storage and verification platform",
    url: "https://www.digilocker.gov.in/",
    icon: FileText,
    color: "bg-green-600",
    category: "tools"
  },
  {
    id: "bharat-billpay",
    title: "Bharat BillPay",
    description: "One-stop destination for bill payments",
    url: "https://www.bharatbillpay.com/",
    icon: Receipt,
    color: "bg-purple-600",
    category: "tools"
  },
  {
    id: "bhim-upi",
    title: "BHIM UPI",
    description: "Unified Payments Interface for instant transfers",
    url: "https://www.bhimupi.org.in/",
    icon: Receipt,
    color: "bg-red-600",
    category: "tools"
  }
];
