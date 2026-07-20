import { createServerFn } from "@tanstack/react-start";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseClient) return supabaseClient;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("SUPABASE_KEYS_MISSING");
  }

  supabaseClient = createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });

  return supabaseClient;
}

interface WaitlistInput {
  email: string;
  position: string;
}

export const submitToWaitlist = createServerFn({ method: "POST" })
  .validator((data: WaitlistInput) => data)
  .handler(async ({ data }) => {
    try {
      const supabase = getSupabaseClient();

      const { error } = await supabase.from("waitlist").insert({
        email: data.email.toLowerCase().trim(),
        position: data.position || "Não especificado",
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Supabase insert error:", error);

        if (error.code === "23505" || error.message?.includes("duplicate")) {
          return {
            success: false,
            error: "duplicate",
            message: "Este email já está na convocatória!",
          };
        }

        if (error.code === "42P01" || error.message?.includes("does not exist")) {
          return {
            success: false,
            error: "table_not_found",
            message:
              "A tabela 'waitlist' não existe no seu Supabase. Crie-a no SQL Editor com:\n\ncreate table public.waitlist (\n  id uuid default gen_random_uuid() primary key,\n  email text not null unique,\n  position text,\n  created_at timestamp with time zone default timezone('utc'::text, now()) not null\n);\nalter table public.waitlist enable row level security;\ncreate policy \"Allow public inserts\" on public.waitlist for insert with check (true);",
          };
        }

        if (error.message?.includes("row-level security") || error.message?.includes("policy")) {
          return {
            success: false,
            error: "rls_error",
            message:
              "Acesso bloqueado por RLS (Row Level Security). Por favor, crie uma política para permitir inserções públicas na tabela 'waitlist' no painel do Supabase:\n\ncreate policy \"Allow public inserts\" on public.waitlist for insert with check (true);",
          };
        }

        return {
          success: false,
          error: "db_error",
          message: error.message,
        };
      }

      return { success: true };
    } catch (error: unknown) {
      console.error("Error in submitToWaitlist server function:", error);
      const err = error instanceof Error ? error : new Error(String(error));

      if (err.message === "SUPABASE_KEYS_MISSING") {
        return {
          success: false,
          error: "not_configured",
          message: "Supabase não está configurado. Configure SUPABASE_URL e SUPABASE_ANON_KEY.",
        };
      }

      return {
        success: false,
        error: "internal_error",
        message: err.message || "Erro interno do servidor.",
      };
    }
  });

export const getWaitlistEntries = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const supabase = getSupabaseClient();

    const { data, error } = await supabase
      .from("waitlist")
      .select("email, position, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return {
        success: false,
        error: "db_error",
        message: error.message,
      };
    }

    return {
      success: true,
      data: (data || []).map((item) => ({
        email: String(item.email),
        position: String(item.position || "Não especificado"),
        date: String(item.created_at || new Date().toISOString()),
      })),
    };
  } catch (error: unknown) {
    console.error("Error in getWaitlistEntries:", error);
    const err = error instanceof Error ? error : new Error(String(error));

    if (err.message === "SUPABASE_KEYS_MISSING") {
      return {
        success: false,
        error: "not_configured",
        message: "Supabase não está configurado.",
      };
    }
    return {
      success: false,
      error: "internal_error",
      message: err.message,
    };
  }
});

export const checkSupabaseStatus = createServerFn({ method: "GET" }).handler(async () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  return {
    configured: !!(url && key),
    url: url ? url.substring(0, 15) + "..." : null,
  };
});
