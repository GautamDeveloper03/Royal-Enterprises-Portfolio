import { Phone, MessageCircle } from "lucide-react";
import { business } from "../data/business";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-700 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${business.phone}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-bold text-white"
        >
          <Phone size={17} />
          Call
        </a>

        <a
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-sm font-bold text-white"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}