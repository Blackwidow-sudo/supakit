import type { LayoutLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

// Disable SSR for SPA mode
export const ssr = false

export const load: LayoutLoad = async event => {
	const { session } = await getSupabase(event)
	return { session }
}
