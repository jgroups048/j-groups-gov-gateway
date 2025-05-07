
interface StateInfo {
  name: string;
  url: string;
  isUT?: boolean;
}

export const states: StateInfo[] = [
  { name: "Andhra Pradesh", url: "https://ap.meeseva.gov.in" },
  { name: "Arunachal Pradesh", url: "https://arunachal.nic.in/eform/" },
  { name: "Assam", url: "https://edistrict.assam.gov.in" },
  { name: "Bihar", url: "https://serviceonline.bihar.gov.in" },
  { name: "Chhattisgarh", url: "https://edistrict.cgstate.gov.in" },
  { name: "Goa", url: "https://www.goaonline.gov.in" },
  { name: "Gujarat", url: "https://www.digitalgujarat.gov.in" },
  { name: "Haryana", url: "https://saralharyana.gov.in" },
  { name: "Himachal Pradesh", url: "https://edistrict.hp.gov.in" },
  { name: "Jharkhand", url: "https://jharsewa.jharkhand.gov.in" },
  { name: "Karnataka", url: "https://sevasindhu.karnataka.gov.in" },
  { name: "Kerala", url: "https://edistrict.kerala.gov.in" },
  { name: "Madhya Pradesh", url: "https://mpedistrict.gov.in" },
  { name: "Maharashtra", url: "https://aaplesarkar.mahaonline.gov.in" },
  { name: "Manipur", url: "https://www.manipur.gov.in/e-district/" },
  { name: "Meghalaya", url: "https://megedistrict.gov.in" },
  { name: "Mizoram", url: "https://edistrict.mizoram.gov.in" },
  { name: "Nagaland", url: "https://edistrict.nagaland.gov.in" },
  { name: "Odisha", url: "https://edistrict.odisha.gov.in" },
  { name: "Punjab", url: "https://connect.punjab.gov.in" },
  { name: "Rajasthan", url: "https://sso.rajasthan.gov.in" },
  { name: "Sikkim", url: "https://edistrict.sikkim.gov.in" },
  { name: "Tamil Nadu", url: "https://tnedistrict.tn.gov.in" },
  { name: "Telangana", url: "https://ts.meeseva.telangana.gov.in" },
  { name: "Tripura", url: "https://edistrict.tripura.gov.in" },
  { name: "Uttar Pradesh", url: "https://edistrict.up.gov.in" },
  { name: "Uttarakhand", url: "https://edistrict.uk.gov.in" },
  { name: "West Bengal", url: "https://edistrict.wb.gov.in" },
  
  // Union Territories
  { name: "Andaman & Nicobar", url: "https://edistrict.andaman.gov.in", isUT: true },
  { name: "Chandigarh", url: "https://edistrict.chandigarh.gov.in", isUT: true },
  { name: "Dadra & Nagar Haveli and Daman & Diu", url: "https://dnhservices.in", isUT: true },
  { name: "Delhi", url: "https://edistrict.delhi.gov.in", isUT: true },
  { name: "Jammu & Kashmir", url: "https://jk.gov.in/jkeservices", isUT: true },
  { name: "Ladakh", url: "https://ladakh.gov.in", isUT: true },
  { name: "Lakshadweep", url: "https://edistrict.lakshadweep.gov.in", isUT: true },
  { name: "Puducherry", url: "https://edistrict.py.gov.in", isUT: true }
];

export const getStateUrl = (stateName: string): string => {
  const state = states.find(s => s.name === stateName);
  return state ? state.url : '';
};
