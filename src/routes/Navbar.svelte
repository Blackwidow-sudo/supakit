<script lang="ts">
	import type { Route } from '../types/app'

	/**
	 * Props
	 */
	export let routes: Route[]
</script>

<nav class="bg-gradient-to-r from-violet-500 to-fuchsia-500">
	<ul class="flex flex-row gap-1 items-center justify-center">
		{#each routes as route (route.name)}
			<li>
				<slot {route}>
					<a
						class="inline-block text-white px-4 py-2 hover:bg-black/10"
						href={route.href}>{route.name}</a>
				</slot>
			</li>
		{/each}
	</ul>
</nav>
