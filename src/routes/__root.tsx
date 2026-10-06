import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteFooter, SiteHeader } from "@/components/site";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cogent Distributing LLC | Connecting Supply. Moving Business." },
      {
        name: "description",
        content:
          "End-to-end procurement, logistics, warehousing and distribution solutions connecting the United States with West Africa.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootLayout() {
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

function NotFound() {
  return (
    <section className="site-container flex min-h-[70vh] flex-col items-start justify-center py-40">
      <p className="eyebrow">404</p>
      <h1 className="display-title mt-5 text-navy">Page not found.</h1>
      <p className="mt-5 max-w-md leading-8 text-muted-foreground">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-brand">
        Back to home
      </Link>
    </section>
  );
}
