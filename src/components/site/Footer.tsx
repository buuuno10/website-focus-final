import { useState } from "react";
import { TermsModal } from "./TermsModal";

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <div className="flex items-center gap-3">
          <span className="font-display tracking-widest">90FOCUS</span>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="hover:text-foreground">
            TikTok
          </a>
          <a href="#" className="hover:text-foreground">
            Privacidade
          </a>
          <button
            onClick={() => setIsTermsOpen(true)}
            className="hover:text-foreground cursor-pointer transition-colors"
          >
            Termos
          </button>
          <a href="mailto:hello@90focus.app" className="hover:text-foreground">
            Contacto
          </a>
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} 90focus</span>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onOpenChange={setIsTermsOpen} />
    </footer>
  );
}
