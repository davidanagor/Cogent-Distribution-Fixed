import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
import { seo } from "@/lib/seo";

export const Route=createFileRoute("/services/")({
  head:()=>seo("Supply Chain Services | Cogent Distributing LLC","Explore procurement, automobile logistics, freight, warehousing, packing and distribution services."),
  component:ServicesPage,
});