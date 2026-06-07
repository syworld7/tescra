export interface JobItem {
  title: string;
  dept: "Engineering" | "Testing" | "Consulting" | "Other";
  location: string;
  mustHave: string;
  desc: string;
}
