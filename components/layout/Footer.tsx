import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";
import { site, disclaimerLong } from "@/lib/site";
import { services } from "@/lib/services";
import Image from "next/image";

function Instagram(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
// function Facebook(props: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden="true">
//       <path d="M15 8h-2a2 2 0 0 0-2 2v3H9v3h2v6h3v-6h2.2l.8-3H14v-2c0-.55.45-1 1-1h2V8Z" />
//     </svg>
//   );
// }
// function Linkedin(props: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden="true">
//       <rect x="3" y="3" width="18" height="18" rx="3" />
//       <path d="M7.5 10.5v6M7.5 7.75v.01M11.5 16.5v-3.5c0-1.1.9-2 2-2s2 .9 2 2v3.5M11.5 10.5v6" />
//     </svg>
//   );
// }

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-20 w-20 items-center justify-center rounded-lg bg-white">
               <Image src={"/logo.png"} alt="logo" width={100} height={100}/>
              </span>
              <span className="font-display font-bold text-lg">Bridge Credit</span>
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/60">
              Bridge Credit is an authorized banking channel partner helping customers explore suitable
              financing options through banks, PSU banks and NBFCs.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.instagram || "#"} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40">
                <Instagram className="h-4 w-4" />
              </a>
              {/* <a href={site.social.facebook || "#"} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.social.linkedin || "#"} aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40">
                <Linkedin className="h-4 w-4" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[14px] text-white/60 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/about" className="text-[14px] text-white/60 hover:text-white">About Us</Link></li>
              <li><Link href="/banking-partners" className="text-[14px] text-white/60 hover:text-white">Banking Partners</Link></li>
              <li><Link href="/faq" className="text-[14px] text-white/60 hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="text-[14px] text-white/60 hover:text-white">Resources / Blog</Link></li>
              <li><Link href="/contact" className="text-[14px] text-white/60 hover:text-white">Contact</Link></li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-white/90">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/privacy-policy" className="text-[14px] text-white/60 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-[14px] text-white/60 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-[14px] text-white/60 hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3 text-[14px] text-white/60">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {site.phone || "[Phone number placeholder]"}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {site.email || "[Email placeholder]"}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                {site.address || "[Office address placeholder]"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[12.5px] leading-relaxed text-white/45 max-w-4xl">{disclaimerLong}</p>
          <p className="mt-4 text-[12.5px] text-white/35">© {new Date().getFullYear()} Bridge Credit. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
