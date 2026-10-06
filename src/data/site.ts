import portHero from "@/assets/cogent-port-hero-clouds-logo.jpg";
import warehouseImage from "@/assets/cogent-warehouse.jpg";
import automotiveImage from "@/assets/cogent-automotive.jpg";
import freightImage from "@/assets/cogent-freight.jpg";

export const images = { portHero, warehouseImage, automotiveImage, freightImage };

export const company = {
  name: "COGENT DISTRIBUTING LLC",
  tagline: "CONNECTING SUPPLY. MOVING BUSINESS.",
  address: ["4000 Coolidge Ave, Suite K", "Baltimore, MD 21229", "USA"],
  phones: ["+1 (443) 953-2619", "+1 (443) 943-7401"],
  email: "info@cogentdis.com",
  website: "www.cogentdis.com",
};

export const services = [
  { index: "01", slug: "procurement", title: "Sourcing & Procurement", summary: "Expert acquisition of commercial goods, industrial tools and retail items.", image: freightImage },
  { index: "02", slug: "automobile-logistics", title: "Automobile Logistics", summary: "Vehicle procurement and international shipping coordination.", image: automotiveImage },
  { index: "03", slug: "procurement", title: "Parts & Equipment", summary: "Specialized sourcing and handling of mechanical tools and automotive components.", image: warehouseImage },
  { index: "04", slug: "shipping-freight", title: "Shipping & Freight", summary: "Ocean, air, bulk and consolidated shipping solutions.", image: portHero },
  { index: "05", slug: "warehousing", title: "Packing & Crating", summary: "Professional boxing, secure packaging and heavy-duty crating.", image: warehouseImage },
  { index: "06", slug: "warehousing", title: "Warehousing & Consolidation", summary: "Storage, cargo preparation and consolidation services.", image: freightImage },
] as const;

export const process = [
  { index: "01", title: "Consult", text: "Understand the requirement and define the right path forward.", service: "Requirement planning" },
  { index: "02", title: "Source", text: "Acquire the required goods, vehicles or equipment.", service: "Procurement & sourcing" },
  { index: "03", title: "Prepare", text: "Pack, crate, consolidate and prepare cargo.", service: "Warehousing & packing" },
  { index: "04", title: "Move", text: "Coordinate the appropriate freight solution.", service: "Shipping & freight" },
  { index: "05", title: "Deliver", text: "Coordinate the final logistics stage.", service: "Distribution & logistics" },
] as const;

export const audiences = [
  ["Individuals", "Personal cargo, vehicle sourcing and international shipping requirements."],
  ["Retailers", "Commercial product sourcing and logistics."],
  ["Wholesalers", "Larger procurement and distribution requirements."],
  ["Corporations", "Commercial supply-chain and logistics coordination."],
  ["Government Agencies", "Procurement and logistics support."],
] as const;

export const serviceNav = [
  ["Procurement & Sourcing", "/services/procurement"],
  ["Automobile Logistics", "/services/automobile-logistics"],
  ["Shipping & Freight", "/services/shipping-freight"],
  ["Warehousing & Packing", "/services/warehousing"],
  ["Distribution & Logistics", "/services/distribution"],
] as const;