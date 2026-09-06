import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/ui/ContactForm";
import { site, phoneHref, whatsappHref, mailHref } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bridge Credit for loan assistance across personal, business, vehicle and property-backed financing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <div className="mt-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-navy leading-tight">Contact Bridge Credit</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          Share your requirement below, or reach us directly — our team is happy to help.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <a href={phoneHref()} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 hover:border-royal">
            <Phone className="h-5 w-5 shrink-0 text-royal" />
            <div>
              <p className="font-semibold text-navy">Call us</p>
              <p className="mt-1 text-[14.5px] text-ink/60">{site.phone || "[Phone number placeholder]"}</p>
            </div>
          </a>
          <a href={whatsappHref()} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 hover:border-royal">
            <MessageCircle className="h-5 w-5 shrink-0 text-royal" />
            <div>
              <p className="font-semibold text-navy">WhatsApp</p>
              <p className="mt-1 text-[14.5px] text-ink/60">{site.whatsapp || "[WhatsApp number placeholder]"}</p>
            </div>
          </a>
          <a href={mailHref()} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 hover:border-royal">
            <Mail className="h-5 w-5 shrink-0 text-royal" />
            <div>
              <p className="font-semibold text-navy">Email</p>
              <p className="mt-1 text-[14.5px] text-ink/60">{site.email || "[Email placeholder]"}</p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
            <MapPin className="h-5 w-5 shrink-0 text-royal" />
            <div>
              <p className="font-semibold text-navy">Office</p>
              <p className="mt-1 text-[14.5px] text-ink/60">{site.address || "[Office address placeholder]"}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
            <Clock className="h-5 w-5 shrink-0 text-royal" />
            <div>
              <p className="font-semibold text-navy">Business hours</p>
              <p className="mt-1 text-[14.5px] text-ink/60">10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </Container>
  );
}
