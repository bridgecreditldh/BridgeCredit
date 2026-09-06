import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/site";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3">
        <a href={phoneHref()} className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-ink/70">
          <Phone className="h-4.5 w-4.5 text-royal" />
          Call
        </a>
        <a href={whatsappHref()} className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-ink/70 border-x border-line">
          <MessageCircle className="h-4.5 w-4.5 text-royal" />
          WhatsApp
        </a>
        <a href="/contact" className="flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-royal">
          <ArrowRight className="h-4.5 w-4.5" />
          Get Assistance
        </a>
      </div>
    </div>
  );
}
