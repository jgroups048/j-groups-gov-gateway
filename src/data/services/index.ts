
import { Service, categories } from "../serviceTypes";
import { identityServices } from "./identityServices";
import { certificateServices } from "./certificateServices";
import { studentServices } from "./studentServices";
import { financialServices } from "./financialServices";
import { jobsServices } from "./jobsServices";
import { toolsServices } from "./toolsServices";

// Combine all services into a single array
const services: Service[] = [
  ...identityServices,
  ...certificateServices,
  ...studentServices,
  ...financialServices,
  ...jobsServices,
  ...toolsServices
];

export { services, categories, Service };
