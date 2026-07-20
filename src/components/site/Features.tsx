import { Activity, BookOpen, Wind, Users, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "Registe as suas estatísticas",
    body: "Acompanha o teu progresso mental, nível de foco e clareza jogo após jogo.",
    size: "md:col-span-2 md:row-span-2",
  },
  { icon: CheckSquare, title: "Protocolo C.A.L.M.A", body: "Construído à tua medida em 1 minuto." },
  { icon: Wind, title: "Respiração 4-7-8", body: "Baixa o BPM antes do apito." },
  { icon: BookOpen, title: "Diário mental", body: "Regista o que sentiste em campo." },
  { icon: Users, title: "Por posição", body: "Guarda-redes, defesa, meio, avançado." },
];

export function Features() {
  return (
    <section id="app" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 text-xs uppercase tracking-widest text-brand">01 / A app</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Ferramentas para cada minuto do teu jogo.
          </h2>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-3 md:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface-1 p-6 transition hover:border-brand/40 hover:bg-surface-2 ${
                  f.size ?? ""
                }`}
              >
                <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl tracking-wide">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/0 blur-2xl transition group-hover:bg-brand/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
