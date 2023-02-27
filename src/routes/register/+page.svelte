<script lang="ts">
	import { goto } from '$app/navigation'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import db from '$lib/db'

	/**
	 * State
	 */
	const credentials = {
		username: 'Merlin',
		email: 'mcornehl@mkw.eu',
		password: 'password'
	}
	let pw_confirm = 'password'

	/**
	 * Methods
	 */
	async function onRegister() {
		if (credentials.password !== pw_confirm) {
			return alert('Passwords do not match')
		}

		const { error } = await db.auth.signUp(credentials)
		if (error) throw error

		goto('/login')
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<PageTransition>
	<form
		class="flex flex-col gap-1 max-w-sm mx-auto"
		on:submit|preventDefault={onRegister}>
		<h1 class="text-3xl text-center my-4">Register</h1>
		<input
			class="form-input"
			type="text"
			placeholder="Username"
			name="username"
			id="username"
			bind:value={credentials.username} />
		<input
			class="form-input"
			type="email"
			placeholder="Email"
			name="email"
			id="email"
			bind:value={credentials.email} />
		<input
			class="form-input"
			type="password"
			placeholder="Password"
			name="password"
			id="password"
			bind:value={credentials.password} />
		<input
			class="form-input"
			type="password"
			placeholder="Confirm password"
			name="pw_confirm"
			id="pw_confirm"
			bind:value={pw_confirm} />
		<input
			class="border rounded px-4 py-2 hover:bg-black/10 cursor-pointer"
			type="submit"
			value="Sign up" />
	</form>
</PageTransition>
