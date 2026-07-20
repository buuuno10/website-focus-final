import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* diagonal stripes background */}
      <div className="pointer-events-none absolute inset-0 diagonal-stripes opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              90 MINUTOS.
              <br />
              UMA <span className="text-brand">MENTALIDADE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              O 90focus prepara a tua cabeça antes do apito inicial, mantém-te presente em campo e
              ajuda-te a fechar o jogo com clareza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-md scroll-mt-28"
              id="waitlist"
            >
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-brand">
                Waitlist
              </h2>
              <WaitlistForm />
            </motion.div>

            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
              <div>
                <div className="font-display text-3xl text-foreground">4.9</div>
                <div>Avaliação</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">1 min</div>
                <div>Por protocolo</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">PT</div>
                <div>Em português</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative mx-auto flex w-full max-w-sm items-center justify-center py-6"
          >
            {/* 3D-effect outer phone container */}
            <div className="relative w-[280px] sm:w-[310px] aspect-[9/19.5] rounded-[52px] bg-neutral-900 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-neutral-800 border-2 border-neutral-800">
              {/* Outer metal bezel border */}
              <div className="absolute inset-[-4px] rounded-[56px] border border-neutral-700/30 pointer-events-none" />

              {/* Side Buttons Left (Action, Volume Up, Volume Down) */}
              <div className="absolute left-[-4px] top-[18%] h-6 w-[3px] rounded-l bg-neutral-800 border-l border-neutral-700/50" />
              <div className="absolute left-[-4px] top-[25%] h-12 w-[3px] rounded-l bg-neutral-800 border-l border-neutral-700/50" />
              <div className="absolute left-[-4px] top-[34%] h-12 w-[3px] rounded-l bg-neutral-800 border-l border-neutral-700/50" />

              {/* Side Button Right (Power/Sleep) */}
              <div className="absolute right-[-4px] top-[29%] h-16 w-[3px] rounded-r bg-neutral-800 border-r border-neutral-700/50" />

              {/* Screen Bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-neutral-950 p-[6px] shadow-inner ring-1 ring-black">
                {/* The Screen Content - App Screenshot */}
                <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-neutral-950 shadow-inner">
                  <img
                    src="https://i.imgur.com/AXKyM1v.png"
                    alt="90focus App Screen"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glass Reflection Glare */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.15]" />
                  <div className="pointer-events-none absolute -left-1/2 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transform -skew-x-12" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
