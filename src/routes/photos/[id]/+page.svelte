<script lang="ts">
	export let data;
</script>

<!-- Material Card -->

<img
	src={"https://still-team.pockethost.io/api/files/posts/" +
		data.image.id +
		"/" +
		data.image.img}
	alt="post"
	class="object-cover w-full h-full"
/>

<div class="p-6">
	<div class="flex items-center justify-between mb-2">
		<p
			class="block font-sans text-base antialiased font-medium leading-relaxed"
		>
			Apple AirPods
		</p>
		<p
			class="block font-sans text-base antialiased font-medium leading-relaxed"
		>
			$95.00
		</p>
	</div>
	<p
		class="block font-sans text-sm antialiased font-normal leading-normalopacity-75"
	>
		With plenty of talk and listen time, voice-activated Siri access, and an
		available wireless charging case.
	</p>
</div>
<div class="p-6 pt-0">
	<button
		class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
		type="button"
	>
		Agregar a favoritos
	</button>
</div>
