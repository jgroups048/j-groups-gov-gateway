
import { GraduationCap, School, BookOpen, FileCheck2, Search } from "lucide-react";
import { Service } from "../serviceTypes";

export const studentServices: Service[] = [
  {
    id: "ofss-bihar",
    title: "OFSS Bihar (11th Admission)",
    description: "Online Facilitation System for Students - Bihar",
    url: "http://www.ofssbihar.in/",
    icon: GraduationCap,
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
    icon: GraduationCap,
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
  }
];
