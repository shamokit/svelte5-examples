<script lang="ts">
	import type { Component } from 'svelte';
	import AddButton from '../lib/AddButton.svelte';
	import MinusButton from '../lib/MinusButton.svelte';

	let count = $state(0);
	let componentName = $state<'AddButton' | 'MinusButton'>('AddButton');
	let ButtonComponent = $derived<
		Component<
			{
				count: number;
			},
			{
				execute: () => void;
			}
		>
	>(componentName === 'AddButton' ? AddButton : MinusButton);

	let bindButton = $state<ReturnType<typeof ButtonComponent>>();
</script>

<h1>Examples</h1>

<h2>bindされたコンポーネントのexecuteを実行する</h2>
<label for="component-name">コンポーネント</label>
<select id="component-name" bind:value={componentName}>
	<option value="AddButton">AddButton</option>
	<option value="MinusButton">MinusButton</option>
</select>
<ul>
	<li><ButtonComponent bind:count bind:this={bindButton}></ButtonComponent></li>
	<li>
		<button type="button" onclick={() => bindButton?.execute()}
			>コンポーネントのexecuteを実行</button
		>
	</li>
</ul>

<p>count： {count}</p>

<style>
	h1 {
		/* sr-only */
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
