<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly, type FlyParams } from 'svelte/transition';

	let {
		transition = undefined,
		children,
	}: {
		transition?: {
			fly?: FlyParams;
		};
		children: Snippet;
	} = $props();
</script>

<h1>transition:flyにundefinedが渡る例</h1>
<div transition:fly={transition?.fly}>
	{@render children()}
</div>
