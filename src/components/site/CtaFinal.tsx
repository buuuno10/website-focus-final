import { WaitlistForm } from "./WaitlistForm";
import { motion } from "framer-motion";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 diagonal-stripes opacity-60" />
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl px-6 text-center flex flex-col items-center"
      >
        <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          A CABEÇA
          <br />É <span className="text-brand">O PRIMEIRO</span>
          <br />
          TITULAR.
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-muted-foreground md:text-lg">
          Garante o teu lugar na convocatória oficial do 90focus e treina o que os outros não
          treinam.
        </p>
        <div className="mt-10 w-full max-w-md flex justify-center">
          <WaitlistForm compact={true} />
        </div>
      </motion.div>
    </section>
  );
}
