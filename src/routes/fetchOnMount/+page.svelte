<script lang="ts">
	import FetchOnMount from './FetchOnMount.svelte';
	import Error from './Error.svelte';

	const fetchFunction = async ({ message }: { message: string }) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return message;
	};
</script>

<FetchOnMount
	fetch={{
		function: fetchFunction,
		params: {
			message: 'Hello, world!',
		},
	}}
>
	{#snippet loadingRenderer()}
		<p>loading…</p>
	{/snippet}

	{#snippet resultRenderer({ result })}
		<p>{result}</p>
		<Error />
	{/snippet}

	{#snippet fallbackRenderer({ errorMessage })}
		<p style="color: red;">{errorMessage}</p>
	{/snippet}
</FetchOnMount>
