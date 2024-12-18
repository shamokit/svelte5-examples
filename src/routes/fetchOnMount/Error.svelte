<script lang="ts">
	let user = $state<{ message: string }>({ message: '' });
	const setMessageNull = () => {
		user = null as unknown as { message: string };
	};
</script>

<p>{user.message}</p>

<button type="button" onclick={setMessageNull}>
	絶対にクリックしないで！
</button>
