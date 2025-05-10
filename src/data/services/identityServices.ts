
import { User, FileText, UserCheck, FileCheck, Car } from "lucide-react";
import { Service } from "../serviceTypes";

export const identityServices: Service[] = [
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
  }
];
