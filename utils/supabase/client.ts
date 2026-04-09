import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABABSE_PUBLISHABLE_KEY;

export const createClient = () =>
    createBrowserClient(
        supabaseUrl!,
        supabaseKey!,
    )