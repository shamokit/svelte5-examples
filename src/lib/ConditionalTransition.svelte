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

<h1>transitionの例</h1>
<section>
	<h2>transition:flyを出し分ける例</h2>
	{#snippet content()}
		<p>{@render children()}</p>
	{/snippet}
	{#if transition?.fly}
		<div transition:fly={transition.fly}>
			{@render content()}
		</div>
	{:else}
		<div>
			{@render content()}
		</div>
	{/if}
</section>
