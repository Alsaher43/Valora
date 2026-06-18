import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nkcytprsuoldgiajzfqg.supabase.co'

const supabaseKey = 'sb_publishable_HtpuYp-RsiCB-cpMy1007A__8Kp0N1o'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
