<script lang="ts">
	let name = $state();
	const invalid = $derived(!name);
</script>

<label for="name">名前</label>
<input
	id="name"
	type="text"
	required
	bind:value={name}
	aria-invalid={invalid}
	aria-errormessage="error1"
/>
<p id="error1" class="error-message">この入力欄は必須です。</p>

<style>
	.error-message {
		display: none;
	}
	:user-invalid + .error-message {
		display: block;
	}
</style>
