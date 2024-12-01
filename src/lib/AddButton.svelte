<script lang="ts">
	let {
		count = $bindable(0),
	}: {
		count: number;
	} = $props();

	export const execute = () => {
		console.log({ count });
		count += 1;
		console.log({ count });
	};
</script>

<button type="button" onclick={() => execute()}
	>{count}からカウントを+1する</button
>
