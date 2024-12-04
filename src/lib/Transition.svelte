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
	<h2>transition:flyにundefinedが渡る例</h2>
	<div transition:fly={transition?.fly}>
		<p>{@render children()}</p>
	</div>
</section>
<section>
	<h2>transition:flyを出し分ける例</h2>
	<div transition:fly={transition?.fly}>
		<p>{@render children()}</p>
	</div>
</section>
