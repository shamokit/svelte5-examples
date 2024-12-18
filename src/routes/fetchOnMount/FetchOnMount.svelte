<script
	lang="ts"
	generics="Params, Function extends (args: Params) => Promise<any>"
>
	import type { Snippet } from 'svelte';

	let {
		fetch,
		loadingRenderer,
		resultRenderer,
		fallbackRenderer,
	}: {
		fetch: {
			function: Function;
			params: Params;
		};
		loadingRenderer: Snippet;
		fallbackRenderer: Snippet<[{ errorMessage: string }]>;
		resultRenderer: Snippet<
			[
				{
					result: Function extends (args: Params) => Promise<infer Result>
						? Result
						: never;
				},
			]
		>;
	} = $props();
	let { function: fetchFunction, params: fetchFunctionParams } =
		$derived(fetch);
</script>

{#await fetchFunction(fetchFunctionParams)}
	{@render loadingRenderer()}
{:then result}
	<svelte:boundary>
		{@render resultRenderer({ result })}
		{#snippet failed(error, reset)}
			<p>resultRendererがエラーになりました。</p>
			<p>エラーメッセージ：{error}</p>
			<button type="button" onclick={reset}>リセットする</button>
		{/snippet}
	</svelte:boundary>
{:catch error}
	{#if error instanceof Error}
		{@render fallbackRenderer({ errorMessage: error.message })}
	{/if}
{/await}
