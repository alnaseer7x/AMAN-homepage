import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

function isHttpUrl(value: string | undefined): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export const supabaseConfigurationMessage =
  !supabaseUrl || !supabaseAnonKey
    ? 'أضف رابط Supabase ومفتاح anon إلى Replit Secrets.'
    : !isHttpUrl(supabaseUrl)
      ? 'رابط Supabase غير صالح؛ استخدم رابط المشروع الذي يبدأ بـ https://.'
      : null;
export const isSupabaseConfigured = supabaseConfigurationMessage === null;

const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

const sample = {
  id: 'wethaq-first-hour',
  marker: 'WETHAQ_FIRST_HOUR',
};

type SampleRow = {
  id: string;
  marker: string;
  created_at: string;
};

async function readSample(client: NonNullable<typeof supabase>) {
  const { data, error } = await client
    .from('wethaq_demo_records')
    .select('id, marker, created_at')
    .eq('id', sample.id)
    .maybeSingle();

  if (error) throw error;
  return data as SampleRow | null;
}

export async function saveOrReadWethaqSample() {
  if (!supabase) {
    throw new Error('إعدادات Supabase غير مكتملة في Replit Secrets.');
  }

  const existing = await readSample(supabase);
  if (existing) return { record: existing, alreadySaved: true };

  const { data, error } = await supabase
    .from('wethaq_demo_records')
    .insert(sample)
    .select('id, marker, created_at')
    .single();

  if (!error && data) {
    return { record: data as SampleRow, alreadySaved: false };
  }

  // Another test may have inserted the fixed sample between the read and insert.
  if (error?.code === '23505') {
    const afterConflict = await readSample(supabase);
    if (afterConflict) return { record: afterConflict, alreadySaved: true };
  }

  throw error ?? new Error('لم يرجع Supabase سجل WETHAQ التجريبي.');
}
