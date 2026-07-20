import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "O 90focus substitui um psicólogo desportivo?",
    a: "Não. É uma ferramenta diária de treino mental. Complementa acompanhamento profissional, não o substitui.",
  },
  {
    q: "Quanto tempo leva cada protocolo?",
    a: "Cerca de 1 minuto. Feito para caber no autocarro da equipa, no balneário ou mesmo antes de entrar em campo.",
  },
  {
    q: "Preciso de internet para usar?",
    a: "Não. Uma vez configurado o teu protocolo, podes aceder e realizá-lo offline no dia de jogo.",
  },
  {
    q: "Serve para qualquer nível?",
    a: "Sim. Do amador ao semi-profissional. Há trilhos por posição e por escalão.",
  },
  {
    q: "A app é em português?",
    a: "Sim, 100%. Desenvolvida em Portugal e totalmente adaptada à realidade e linguagem do balneário português.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 text-xs uppercase tracking-widest text-brand">04 / FAQ</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Perguntas frequentes.</h2>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg tracking-wide md:text-xl">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
