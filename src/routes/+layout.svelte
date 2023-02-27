<script lang="ts">
	import '../app.css'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { routes } from '$lib/globals'
	import db from '$lib/db'
	import Navbar from './Navbar.svelte'

	onMount(() => {
		const {
			data: { subscription }
		} = db.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})
</script>

<Navbar {routes} />
<div class="container mx-auto">
	<slot />
</div>
