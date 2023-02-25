// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Supabase {
			// Use the path to where you generated the types using the Supbase CLI.
			Database: import('../types/supabase').Database
			SchemaName: 'public'
		}
		// interface Error {}
		// interface Locals {}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null
		}
		// interface Platform {}
	}
}

export {}
