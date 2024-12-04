<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import type Page from '../+page.svelte';

	type PageDataPosts = ComponentProps<typeof Page>['data']['posts'];
	let { posts }: { posts: PageDataPosts } = $props();
</script>

<ul>
	{#each posts as { title, id, userId, body } (id)}
		<li>
			<table>
				<caption>Post: {title}</caption>
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">userId</th>
						<th scope="col">body</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{userId}</td>
						<td>{body}</td>
					</tr>
				</tbody>
			</table>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		gap: 1rem;
		padding: 0;
	}

	caption {
		padding: 0.5rem;
		font-weight: bold;
		background: #333;
		color: #fff;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th {
		background-color: #f0f0f0;
	}

	th,
	td {
		border: 1px solid #ccc;
		padding: 0.5rem;
	}

	th:not(:last-child) {
		width: 10%;
	}
</style>
