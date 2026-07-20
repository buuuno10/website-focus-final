import { motion } from "framer-motion";

const personas = [
  {
    tag: "Amador",
    title: "Joga aos fins de semana",
    body: "Chega ao jogo depois de uma semana de trabalho. O 90focus ajuda a desligar de tudo e a entrar em modo jogo.",
  },
  {
    tag: "Formação",
    title: "Sub-15 a sub-19",
    body: "A cabeça pesa mais do que as pernas. Aprende a gerir pressão, comparação e erros logo cedo.",
  },
  {
    tag: "Semi-pro",
    title: "Vive do jogo",
    body: "Rotinas mentais consistentes para manter o nível quando os resultados apertam.",
  },
];

export function Personas() {
  return (
    <section id="para-quem" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 text-xs uppercase tracking-widest text-brand">03 / Para quem</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Feito para quem entra em campo.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <motion.article
              key={p.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="relative overflow-hidden rounded-lg border border-border bg-surface-1 p-8"
            >
              <div className="mb-6 inline-block rounded-sm border border-brand/40 bg-brand/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                {p.tag}
              </div>
              <h3 className="font-display text-2xl tracking-wide">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
