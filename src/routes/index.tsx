import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Cogent Distributing LLC | Connecting Supply. Moving Business.",
      "End-to-end procurement, logistics, warehousing and distribution solutions connecting the United States with West Africa.",
    ),
  component: HomePage,
});
