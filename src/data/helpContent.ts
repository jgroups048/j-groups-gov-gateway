
export interface DocumentRequirement {
  service: string;
  documents: string[];
}

export interface HelpContent {
  serviceId: string;
  title: string;
  instructions: string[];
  requiredDocuments: string[];
}

export const helpContent: HelpContent[] = [
  {
    serviceId: "aadhaar",
    title: "Aadhaar Services Help",
    instructions: [
      "Visit the official UIDAI website",
      "Choose the required service (update, download, etc.)",
      "Enter your Aadhaar number and other details",
      "Complete the verification process",
      "Submit your request and follow the instructions"
    ],
    requiredDocuments: [
      "Existing Aadhaar number (for updates)",
      "Proof of Identity (Passport, PAN, Voter ID, etc.)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of Date of Birth (if updating)",
      "Mobile number linked to Aadhaar"
    ]
  },
  {
    serviceId: "pan",
    title: "PAN Card Services Help",
    instructions: [
      "Visit the official PAN service provider website",
      "Select 'Apply for New PAN' or 'Correction in PAN'",
      "Fill in the required personal details",
      "Upload necessary documents",
      "Pay the application fee and submit"
    ],
    requiredDocuments: [
      "Proof of Identity (Passport, Aadhaar, Voter ID)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of Date of Birth",
      "Recent passport size photograph",
      "Digital signature (if applicable)"
    ]
  },
  {
    serviceId: "passport",
    title: "Passport Services Help",
    instructions: [
      "Register on the Passport Seva Online Portal",
      "Fill the application form and schedule an appointment",
      "Pay the fee online",
      "Visit the Passport Seva Kendra on the appointment date",
      "Complete the verification process"
    ],
    requiredDocuments: [
      "Proof of Identity (Aadhaar, PAN, Voter ID)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of Date of Birth",
      "Recent passport size photographs",
      "Previous passport (for renewal)"
    ]
  },
  {
    serviceId: "voter",
    title: "Voter ID Services Help",
    instructions: [
      "Visit the National Voter Service Portal",
      "Select the desired service (registration, correction)",
      "Fill the appropriate form (Form 6, 7, 8)",
      "Upload required documents",
      "Submit and track your application"
    ],
    requiredDocuments: [
      "Proof of Identity (Aadhaar, PAN, Passport)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of Age",
      "Recent passport size photograph",
      "Mobile number for OTP verification"
    ]
  },
  {
    serviceId: "driving",
    title: "Driving License Services Help",
    instructions: [
      "Visit the Parivahan Sewa Portal",
      "Apply for Learner's License or Driving License",
      "Schedule appointment for test/verification",
      "Pay fees online",
      "Complete driving test if required"
    ],
    requiredDocuments: [
      "Proof of Identity (Aadhaar, PAN, Passport)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of Age",
      "Recent passport size photographs",
      "Medical Certificate (Form 1A)"
    ]
  },
  {
    serviceId: "certificate",
    title: "Various Certificate Services Help",
    instructions: [
      "Visit your state's e-district portal",
      "Select the required certificate type",
      "Fill in the application form",
      "Upload supporting documents",
      "Submit and track your application"
    ],
    requiredDocuments: [
      "Proof of Identity (Aadhaar, PAN, Voter ID)",
      "Proof of Address (Utility bills, Bank statement)",
      "Proof of income (for income certificate)",
      "Caste certificate of parents (for caste certificate)",
      "Residence proof for domicile"
    ]
  },
  {
    serviceId: "birth-death",
    title: "Birth/Death Certificate Services Help",
    instructions: [
      "Visit your state's e-district portal",
      "Select Birth or Death certificate service",
      "Fill in the application form with correct details",
      "Upload required documents",
      "Pay the fee online and submit"
    ],
    requiredDocuments: [
      "Hospital discharge summary/letter",
      "Local body registration proof",
      "ID proof of applicant",
      "Address proof",
      "Affidavit (if applicable)"
    ]
  },
  {
    serviceId: "exams",
    title: "Government Exam Forms Help",
    instructions: [
      "Visit the specific exam portal (SSC, UPSC, etc.)",
      "Register or login to your account",
      "Fill in the application form carefully",
      "Upload required documents",
      "Pay the application fee and submit"
    ],
    requiredDocuments: [
      "ID proof",
      "Educational certificates",
      "Category certificates (if applicable)",
      "Recent passport size photographs",
      "Signature in prescribed format"
    ]
  },
  {
    serviceId: "eshram",
    title: "E-Shram Card Services Help",
    instructions: [
      "Visit the E-Shram portal",
      "Register using mobile number",
      "Fill in personal and work details",
      "Verify using Aadhaar-linked mobile OTP",
      "Download your E-Shram card"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Mobile number linked to Aadhaar",
      "Bank account details",
      "Occupation details",
      "Nominee details"
    ]
  },
  {
    serviceId: "epfo",
    title: "EPFO/ESIC Services Help",
    instructions: [
      "Visit the EPFO Unified Portal",
      "Register or login to your account",
      "Select the required service (claim, withdrawal, etc.)",
      "Fill in the required details",
      "Submit and track your application"
    ],
    requiredDocuments: [
      "UAN (Universal Account Number)",
      "Aadhaar Card",
      "PAN Card",
      "Bank account details",
      "Mobile number linked to UAN"
    ]
  },
  {
    serviceId: "gst",
    title: "GST Services Help",
    instructions: [
      "Visit the GST Portal",
      "Login with your credentials",
      "Select the required service (registration, return filing)",
      "Fill in the required details and forms",
      "Submit and pay any applicable fees"
    ],
    requiredDocuments: [
      "PAN of Business or Individual",
      "Aadhaar Card",
      "Business Registration documents",
      "Bank account details",
      "Digital Signature Certificate (if applicable)"
    ]
  },
  {
    serviceId: "jobs",
    title: "Government Jobs Help",
    instructions: [
      "Visit official job portals like NCS or Employment News",
      "Search for relevant job opportunities",
      "Check eligibility criteria carefully",
      "Follow application procedure for each job",
      "Track your application status"
    ],
    requiredDocuments: [
      "Educational certificates",
      "ID proof",
      "Address proof",
      "Experience certificates (if applicable)",
      "Category certificates (if applicable)"
    ]
  }
];
