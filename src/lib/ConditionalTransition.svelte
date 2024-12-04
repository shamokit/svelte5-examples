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

<h1>transition:flyを出し分ける例</h1>
{#if transition?.fly}
	<div transition:fly={transition.fly}>
		{@render children()}
	</div>
{:else}
	<div>
		{@render children()}
	</div>
{/if}
