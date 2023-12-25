<script lang="ts">
	export let modal: HTMLDialogElement;
</script>

<dialog class="modal" bind:this={modal} on:close>
	<div class="modal-box max-w-5xl">
		<form method="dialog">
			<button
				class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
				>✕</button
			>
		</form>
		<slot />
	</div>
</dialog>
