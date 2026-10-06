import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { audiences, company, images, process, serviceNav, services } from "@/data/site";
import cogentLogo from "@/assets/cogent-logo.png";

const mainNav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Industries", "/industries"],
  ["Logistics", "/logistics"], ["Case Studies", "/case-studies"], ["Contact", "/contact"],
] as const;

export function Logo() {
  return <Link to="/" className="brand-logo" aria-label="Cogent Distributing home"><img src={cogentLogo} alt="Cogent Distributing LLC" /></Link>;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="site-container flex h-20 items-center justify-between lg:h-24">
      <Logo />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
        {mainNav.map(([label, to]) => label === "Services" ? <div key={to} className="group relative"><Link to={to} className={`nav-link flex items-center gap-1 ${pathname.startsWith("/services") ? "is-active" : ""}`}>{label}<ChevronDown className="size-3" /></Link><div className="service-menu">{serviceNav.map(([name, href]) => <Link key={href} to={href} className="service-menu-link">{name}<ArrowRight /></Link>)}</div></div> : <Link key={to} to={to} className={`nav-link ${pathname === to ? "is-active" : ""}`}>{label}</Link>)}
      </nav>
      <Button asChild variant="brand" size="lg" className="hidden lg:inline-flex"><Link to="/contact">Request a quote<ArrowRight /></Link></Button>
      <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="mobile-menu lg:hidden"><nav className="site-container py-8" aria-label="Mobile navigation">{mainNav.map(([label, to]) => label === "Services" ? <div key={to}><button className="mobile-link w-full" onClick={() => setServicesOpen(!servicesOpen)}><span>{label}</span><ChevronDown className={`size-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} /></button>{servicesOpen && <div className="border-l border-brand-soft pl-4">{serviceNav.map(([name, href]) => <Link key={href} to={href} className="mobile-sub-link">{name}</Link>)}</div>}</div> : <Link key={to} to={to} className="mobile-link">{label}<ArrowRight className="size-4" /></Link>)}<Button asChild variant="brand" size="xl" className="mt-8 w-full"><Link to="/contact">Request a quote<ArrowRight /></Link></Button></nav></div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-navy text-on-dark"><div className="route-stripe" /><div className="site-container py-16 lg:py-24"><div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"><div><Logo/><p className="mt-8 max-w-xs text-2xl font-semibold leading-tight">{company.tagline}</p><p className="mt-5 max-w-sm text-sm leading-7 text-on-dark-muted">A connected supply-chain partner linking U.S. procurement and logistics with West African demand.</p></div><FooterLinks title="Company" links={[["About", "/about"], ["Industries", "/industries"], ["Logistics", "/logistics"], ["Case Studies", "/case-studies"]]} /><FooterLinks title="Services" links={serviceNav} /><div><p className="footer-title">Contact</p><address className="space-y-4 not-italic text-sm leading-6 text-on-dark-muted"><p>{company.address.join(", ")}</p><p>{company.phones.map((phone) => <a key={phone} className="block hover:text-on-dark" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>)}</p><a className="block hover:text-on-dark" href={`mailto:${company.email}`}>{company.email}</a></address></div></div><div className="mt-16 flex flex-col gap-4 border-t border-on-dark/15 pt-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} COGENT DISTRIBUTING LLC</p><div className="flex gap-6"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div></div></div></footer>;
}

function FooterLinks({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) { return <div><p className="footer-title">{title}</p><div className="space-y-3">{links.map(([label, to]) => <Link key={to} to={to} className="block text-sm text-on-dark-muted transition-colors hover:text-on-dark">{label}</Link>)}</div></div>; }

export function PageHero({ eyebrow, title, text, image = images.portHero }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className="page-hero"><img src={image} alt="International logistics infrastructure" width={1920} height={1080} /><div className="page-hero-overlay"/><div className="site-container relative z-10 flex min-h-[64vh] items-end pb-16 pt-36 lg:pb-24"><div className="max-w-4xl"><p className="eyebrow light">{eyebrow}</p><h1 className="display-title mt-5 text-on-dark">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-on-dark-muted">{text}</p><div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-on-dark-muted"><span>North America</span><span className="h-px w-10 bg-brand"/><span className="size-1.5 rounded-full bg-signal"/><span className="h-px w-10 bg-brand-soft"/><span>West Africa</span></div></div></div></section>;
}

export function SectionHeader({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) { return <div className="max-w-3xl"><p className={`eyebrow ${light ? "light" : ""}`}>{eyebrow}</p><h2 className={`section-title mt-5 ${light ? "text-on-dark" : "text-navy"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-on-dark-muted" : "text-muted-foreground"}`}>{text}</p>}</div>; }

export function CtaSection() { return <section className="bg-navy text-on-dark"><div className="site-container grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24"><SectionHeader light eyebrow="Start a conversation" title="Ready to move your requirement?" text="Whether you're sourcing commercial goods, purchasing a vehicle, shipping personal cargo or coordinating a larger supply-chain requirement, Cogent is ready to help."/><div className="flex flex-wrap gap-3"><Button asChild variant="brand" size="xl"><Link to="/contact">Request a quote<ArrowRight /></Link></Button><Button asChild variant="outlineLight" size="xl"><Link to="/contact">Contact Cogent</Link></Button></div></div></section>; }

export function ServiceGrid({ limit }: { limit?: number }) { return <div className="service-grid">{services.slice(0, limit ?? services.length).map((service) => <Link key={`${service.index}-${service.title}`} to={`/services/${service.slug}` as "/services/procurement"} className="service-card group"><div className="service-image"><img src={service.image} alt={`${service.title} logistics`} loading="lazy" width={800} height={534}/></div><div className="p-6 lg:p-8"><span className="service-index">{service.index}</span><h3 className="mt-4 text-xl font-bold uppercase text-navy">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">Explore service<ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></span></div></Link>)}</div>; }

export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) { return <div className="process-timeline">{process.map((step) => <article key={step.index} className="process-step"><div className="process-marker"><span>{step.index}</span></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{step.service}</p><h3 className="mt-3 text-2xl font-bold uppercase text-navy">{step.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{step.text}</p>{detailed && <p className="mt-5 border-l-2 border-signal pl-4 text-sm leading-6 text-foreground">A coordinated stage with clear communication and professional oversight.</p>}</div></article>)}</div>; }

export function RouteVisualization() { return <div className="route-visual" role="img" aria-label="A conceptual connection between North America and West Africa"><span>North America</span><div className="route-line"><i/><i/><i/></div><span>West Africa</span></div>; }

export function Breadcrumbs({ current }: { current: string }) { return <div className="site-container py-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"><Link to="/">Home</Link><span className="mx-3 text-signal">/</span><span>{current}</span></div>; }

export function ContactForm() {
  const [complete, setComplete] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setComplete(true); };
  if (complete) return <div className="border-t-4 border-brand bg-card p-8 lg:p-12"><span className="service-index">Received locally</span><h2 className="mt-5 text-3xl font-bold uppercase text-navy">Your request is prepared.</h2><p className="mt-4 leading-7 text-muted-foreground">This website is not yet connected to an email delivery service, so your information has not been transmitted. Please email <a className="font-bold text-brand" href={`mailto:${company.email}`}>{company.email}</a> or call Cogent to continue.</p><Button className="mt-8" variant="brand" onClick={() => setComplete(false)}>Prepare another request</Button></div>;
  return <form onSubmit={submit} className="quote-form"><div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" name="fullName" required/><Field label="Company Name" name="company"/><Field label="Email" name="email" type="email" required/><Field label="Phone / WhatsApp" name="phone" type="tel" required/><SelectField label="Customer Type" name="customerType" options={["Individual","Retailer","Wholesaler","Corporation","Government Agency"]}/><SelectField label="Service" name="service" options={["Procurement","Automobile Logistics","Shipping & Freight","Warehousing","Distribution","Parts & Equipment"]}/><Field label="Origin" name="origin" required/><Field label="Destination" name="destination" required/><div className="sm:col-span-2"><Field label="Cargo / Product Description" name="cargo" required textarea/></div><Field label="Estimated Quantity" name="quantity"/><SelectField label="Preferred Freight" name="freight" options={["Ocean","Air","Unsure"]}/><div className="sm:col-span-2"><Field label="Additional Requirements" name="requirements" textarea/></div><label className="form-field sm:col-span-2"><span>File Upload</span><input name="file" type="file" className="file-input" /></label></div><p className="mt-5 text-xs leading-5 text-muted-foreground">Submission delivery is not connected yet. After validation, we will show the direct contact options needed to continue.</p><Button type="submit" variant="brand" size="xl" className="mt-7 w-full sm:w-auto">Submit request<ArrowRight /></Button></form>;
}

function Field({ label, textarea, ...props }: { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) { return <label className="form-field"><span>{label}{props.required && " *"}</span>{textarea ? <textarea name={props.name} required={props.required} rows={5}/> : <input {...props}/>}</label>; }
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) { return <label className="form-field"><span>{label} *</span><select name={name} required defaultValue=""><option value="" disabled>Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }

export function ContactDetails() { return <div className="space-y-8"><ContactLine icon={<MapPin/>} label="Address">{company.address.map((line) => <span key={line} className="block">{line}</span>)}</ContactLine><ContactLine icon={<Phone/>} label="Phone">{company.phones.map((phone) => <a key={phone} className="block hover:text-brand" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>)}</ContactLine><ContactLine icon={<Mail/>} label="Email"><a href={`mailto:${company.email}`} className="hover:text-brand">{company.email}</a></ContactLine><div className="border-t border-border pt-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Business hours</p><p className="mt-2 text-sm text-muted-foreground">Not currently published. Please call or email to arrange contact.</p></div></div>; }
function ContactLine({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) { return <div className="grid grid-cols-[2.5rem_1fr] gap-4"><span className="text-brand">{icon}</span><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p><div className="mt-2 leading-7 text-foreground">{children}</div></div></div>; }

export { audiences, company, images, process, services };