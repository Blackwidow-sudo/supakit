<script lang="ts">
	import { goto } from '$app/navigation'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import db from '$lib/db'

	/**
	 * State
	 */
	const credentials = {
		email: '',
		password: ''
	}

	/**
	 * Methods
	 */
	async function onLogin() {
		const { error } = await db.auth.signInWithPassword(credentials)
		if (error) throw error

		goto('/')
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<PageTransition>
	<form
		class="flex flex-col gap-1 max-w-sm mx-auto"
		on:submit|preventDefault={onLogin}>
		<h1 class="text-3xl text-center my-4">Login</h1>
		<input
			class="form-input"
			placeholder="Email"
			type="email"
			name="email"
			id="email"
			bind:value={credentials.email} />
		<input
			class="form-input"
			placeholder="Password"
			type="password"
			name="password"
			id="password"
			bind:value={credentials.password} />
		<input
			class="border rounded px-4 py-2 hover:bg-black/10 cursor-pointer"
			type="submit"
			value="Sign in" />
	</form>
</PageTransition>
