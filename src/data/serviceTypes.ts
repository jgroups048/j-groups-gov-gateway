
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
