<script lang="ts">
	import { goto, preloadData, pushState } from "$app/navigation";
	import { page } from "$app/stores";
	import Modal from "./modal.svelte";
	import Image from "./photos/[id]/+page.svelte";
	import CreateForm from "$lib/components/CreateForm.svelte";
	import NavBar from "$lib/components/NavBar.svelte";

	export let data;

	let modal: HTMLDialogElement;

	async function showModal(e: MouseEvent) {
		const { href } = e.currentTarget as HTMLAnchorElement;
		const result = await preloadData(href);
		if (result.type === "loaded" && result.status === 200) {
			pushState(href, { selected: result.data });
			modal.showModal();
		} else {
			goto(href);
		}
	}

	function closeModal() {
		history.back();
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Image data={$page.state.selected} />
	{/if}
</Modal>

<NavBar />

<!-- Total de recuerdos -->
<h2>{data.thumbnails.length}</h2>

<CreateForm />
<div class="grid grid-cols-3 -mx-1">
	{#each data.thumbnails as thumbnail}
		<a
			class="p-1"
			on:click|preventDefault={showModal}
			href="/photos/{thumbnail.id}"
		>
			<div class="aspect-square w-full overflow-hidden">
				<img
					class="object-cover w-full h-full rounded-lg"
					alt={thumbnail.alt}
					src={"https://still-team.pockethost.io/api/files/posts/" +
						thumbnail.id +
						"/" +
						thumbnail.img}
				/>
			</div>
		</a>
	{/each}
</div>

<label class="swap swap-flip text-5xl z-30">
	<!-- this hidden checkbox controls the state -->
	<input type="checkbox" />

	<div class="swap-on">🤍</div>
	<div class="swap-off">💜</div>
</label>
