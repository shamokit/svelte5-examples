<script lang="ts">
	let {
		count = $bindable(0),
	}: {
		count: number;
	} = $props();

	export const execute = () => {
		count += 1;
	};
</script>

<button type="button" onclick={() => execute()}
	>{count}からカウントを+1する</button
>
