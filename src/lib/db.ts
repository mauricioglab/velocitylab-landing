// Cliente de datos: Supabase self-hosted (https://api.velocitylab.com.ar). Solo lectura en el build.
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.PUBLIC_SUPABASE_URL as string | undefined) || 'https://api.velocitylab.com.ar';
// Clave `anon`: es pública por diseño. La seguridad real está en las políticas RLS de la base.
const supabaseAnonKey = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined) || '';

export const db = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
});
