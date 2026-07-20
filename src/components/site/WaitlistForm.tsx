import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitToWaitlist } from "@/lib/supabase";

interface WaitlistEntry {
  email: string;
  position: string;
  date: string;
}

interface WaitlistFormProps {
  compact?: boolean;
}

export function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dbError, setDbError] = useState<{ type: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Por favor, introduz o teu email.");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, introduz um email válido.");
      return;
    }

    setIsLoading(true);

    try {
      // Call server function to submit to Supabase
      const result = await submitToWaitlist({
        data: {
          email,
          position: position || "Não especificado",
        },
      });

      if (result.success) {
        // Also save to localStorage for local synchronization and UI updates
        const existingWaitlist = JSON.parse(
          localStorage.getItem("90focus_waitlist") || "[]",
        ) as WaitlistEntry[];

        const emailExists = existingWaitlist.some(
          (item: WaitlistEntry) => item.email.toLowerCase() === email.toLowerCase(),
        );

        if (!emailExists) {
          existingWaitlist.push({
            email,
            position: position || "Não especificado",
            date: new Date().toISOString(),
          });
          localStorage.setItem("90focus_waitlist", JSON.stringify(existingWaitlist));
          window.dispatchEvent(new Event("90focus_waitlist_updated"));
        }

        toast.success("Inscrição efetuada com sucesso!");
        setIsSuccess(true);
        setDbError(null);
      } else if (result.error === "duplicate") {
        toast.error("Este email já está na convocatória!");
        setIsSuccess(false);
        setDbError({ type: "duplicate", message: "Este email já está na convocatória!" });
      } else if (result.error === "table_not_found" || result.error === "rls_error") {
        setDbError({ type: result.error, message: result.message });
        toast.error("Configuração de base de dados necessária.");
      } else if (result.error === "not_configured") {
        // Fallback to localStorage if Supabase is not yet configured
        console.warn("Supabase not configured, falling back to local storage:", result.message);

        const existingWaitlist = JSON.parse(
          localStorage.getItem("90focus_waitlist") || "[]",
        ) as WaitlistEntry[];

        const emailExists = existingWaitlist.some(
          (item: WaitlistEntry) => item.email.toLowerCase() === email.toLowerCase(),
        );

        if (emailExists) {
          toast.error("Este email já está na convocatória!");
          setIsSuccess(false);
          setDbError({ type: "duplicate", message: "Este email já está na convocatória!" });
          return;
        }

        existingWaitlist.push({
          email,
          position: position || "Não especificado",
          date: new Date().toISOString(),
        });
        localStorage.setItem("90focus_waitlist", JSON.stringify(existingWaitlist));
        window.dispatchEvent(new Event("90focus_waitlist_updated"));

        toast.success("Inscrição efetuada localmente! (Nota: Supabase não está configurado)");
        setIsSuccess(true);
        setDbError(null);
      } else {
        toast.error(`Erro: ${result.message || "Tente novamente."}`);
        console.error("Supabase error detail:", result);
      }
    } catch (err) {
      toast.error("Ocorreu um erro ao comunicar com o servidor. Tenta novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg border border-brand/20 bg-surface-1 p-6 text-center shadow-lg"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl tracking-wide text-foreground">
          ESTÁS NA CONVOCATÓRIA!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Inscrição confirmada para <span className="text-foreground font-medium">{email}</span>
          {position && position !== "Não especificado" && (
            <span>
              {" "}
              como <span className="text-brand font-medium">{position}</span>
            </span>
          )}
          . Vais receber acesso prioritário e novidades em breve.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setEmail("");
            setPosition("");
          }}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-brand underline underline-offset-4 transition"
        >
          Inscrever outro email
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="space-y-2">
          <label htmlFor="email-input" className="sr-only">
            Email
          </label>
          <div className="relative rounded-sm border border-border bg-surface-1 transition-focus-within focus-within:border-brand/50">
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (dbError?.type === "duplicate") {
                  setDbError(null);
                }
              }}
              placeholder="O teu melhor email..."
              disabled={isLoading}
              className="w-full bg-transparent px-4 py-3.5 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-sm bg-brand text-brand-foreground transition hover:brightness-110 disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {!compact && (
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Qual é a tua posição em campo? (Opcional)
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Guarda-redes", "Defesa", "Médio", "Avançado"].map((pos) => (
                <button
                  key={pos}
                  type="button"
                  onClick={() => setPosition(position === pos ? "" : pos)}
                  className={`rounded-sm border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    position === pos
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground hover:text-foreground"
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
          Junta-te a dezenas de atletas que já treinam a mente.
        </p>
      </form>

      {dbError && dbError.type === "duplicate" && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold text-red-500 text-center mt-1 uppercase tracking-wider"
        >
          {dbError.message}
        </motion.p>
      )}

      {dbError && dbError.type !== "duplicate" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-sm border border-destructive/20 bg-destructive/10 p-4 text-left text-xs text-destructive-foreground font-sans leading-relaxed"
        >
          <p className="font-bold uppercase tracking-wider mb-1 text-red-500">
            Ação Necessária no Supabase:
          </p>
          <p className="mb-2 text-[11px] opacity-90">
            O banco de dados precisa ser configurado. Siga as instruções abaixo:
          </p>
          <pre className="mt-2 bg-background p-3 rounded font-mono text-[10px] overflow-x-auto text-foreground whitespace-pre-wrap select-all border border-border/40">
            {dbError.message}
          </pre>
          <p className="mt-2 text-[10px] opacity-80">
            Copie o comando SQL acima e cole no <strong>SQL Editor</strong> do seu painel do
            Supabase, depois clique em <strong>Run</strong>.
          </p>
        </motion.div>
      )}
    </div>
  );
}
