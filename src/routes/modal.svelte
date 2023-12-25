<script lang="ts">
	export let modal: HTMLDialogElement;
</script>

<dialog bind:this={modal} class="rounded-xl" on:close>
	<form method="dialog">
		<button
			class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2 z-30"
			>✕</button
		>
	</form>
	<slot />
</dialog>
