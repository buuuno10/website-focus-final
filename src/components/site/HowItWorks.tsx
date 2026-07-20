import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Escolhe o momento",
    body: "Antes do jogo, ao intervalo, no fim ou num dia de treino.",
  },
  {
    n: "02",
    title: "Inicia o protocolo",
    body: "Faz o protocolo C.A.L.M.A configurado por ti mesmo em 1 minuto.",
  },
  {
    n: "03",
    title: "Entra em campo",
    body: "Com a cabeça pronta. Acompanha a tua evolução e consistência.",
  },
];

export function HowItWorks() {
  return (
    <section id="treino" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-brand">
              02 / Como funciona
            </div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Três passos.
              <br />
              Zero desculpas.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-7xl text-chrome leading-none">{s.n}</span>
                {i < steps.length - 1 && (
                  <div className="hidden h-px flex-1 translate-y-[-14px] bg-border md:block" />
                )}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
