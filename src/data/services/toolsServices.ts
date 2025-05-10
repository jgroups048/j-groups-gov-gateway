
import { FileCheck, FileText, Receipt } from "lucide-react";
import { Service } from "../serviceTypes";

export const toolsServices: Service[] = [
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
    url: "https://bharatbillpay.com/",
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
