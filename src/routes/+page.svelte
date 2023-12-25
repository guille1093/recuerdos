<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation'
	import { page } from '$app/stores'
	import Modal from './modal.svelte'
	import Image from './photos/[id]/+page.svelte'
	import CreateForm from '$lib/components/CreateForm.svelte';

	export let data

	let modal: HTMLDialogElement

	async function showModal(e: MouseEvent) {
		// get URL
		const { href } = e.currentTarget as HTMLAnchorElement

		// get result of `load` function
		const result = await preloadData(href)
		console.log(result)

		// create new history entry
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data })
			modal.showModal()
		} else {
			goto(href)
		}
	}

	function closeModal() {
		history.back()
	}
</script>

<Modal bind:modal on:close={closeModal}>
	{#if $page.state.selected}
		<Image data={$page.state.selected} />
	{/if}
</Modal>

<div class="feed">

	<h1>Recuerdos</h1>
	<!-- Total de recuerdos -->
<h2>{data.thumbnails.length}</h2>

<CreateForm />

	{#each data.thumbnails as thumbnail}
		<a on:click|preventDefault={showModal} href="/photos/{thumbnail.id}">
			<img alt={thumbnail.alt} src={"https://still-team.pockethost.io/api/files/posts/" + thumbnail.id + "/" + thumbnail.img} />
		</a>
	{/each}
</div>

<style>
	.feed {
		max-inline-size: 600px;
		display: grid;
		gap: 2rem;
		margin-inline: auto;
		padding-block: 2rem;
	}
</style>
