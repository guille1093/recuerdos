<script lang="ts">
	export let data
</script>

<div>
	<button class="bg-blue-600 hover:bg-blue-700 text-white p-2 m-4 rounded-full w-10 h-10" on:click={() => window.history.back()}>X</button>
	<img alt="post" src={"https://still-team.pockethost.io/api/files/posts/" + data.image.id + "/" + data.image.img} />	
</div>

				