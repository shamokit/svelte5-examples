<script lang="ts">
	import Posts from './_components/Posts.svelte';

	let { data } = $props();
	const { posts } = $derived(data);
</script>

<h1>
	このページでだけ使うコンポーネント「Posts」のpropsの型に+page.svelteの型を使用する
</h1>
<Posts {posts} />
