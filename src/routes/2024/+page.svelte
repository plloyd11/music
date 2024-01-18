<script>
	import Hero from '$lib/components/Hero.svelte';
	export let data;

	let albums;
	$: if (data && data.albums && data.albums.records) {
		albums = data.albums.records;

		// filter by abc order of Band
		albums.sort((a, b) => {
			if (a.fields.Band < b.fields.Band) {
				return -1;
			}
			if (a.fields.Band > b.fields.Band) {
				return 1;
			}
			return 0;
		});
	}

	let filterActive = false;
</script>

<Hero title="Riffs of 2024" />
<section class="px-4 mx-auto lg:px-6 max-w-7xl">
	<button
		class="relative block px-4 py-2 mx-auto font-medium group"
		on:click={() => (filterActive = !filterActive)}
	>
		<span
			class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-riffs-text group-hover:-translate-x-0 group-hover:-translate-y-0"
		/>
		<span
			class="absolute inset-0 w-full h-full border-2 border-black bg-riffs-accent group-hover:bg-riffs-text"
		/>
		<span class="relative text-xl text-black group-hover:text-white"
			>{filterActive ? 'Gimme ALL the riffs' : "Hit me with the fuckin' best shit 🔥"}</span
		>
	</button>
	<div class="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
		{#if albums}
			{#each albums.filter((album) => album.fields && album.fields.Artwork && album.fields.Artwork.length > 0 && album.fields['Album Title'] && album.fields.Band && (!filterActive || (filterActive && album.fields.Rating >= 9))) as album}
				<div class="relative flex flex-col gap-2 card card-hover bg-riffs-card">
					<a href={album.fields['Music Link']} target="_blank" rel="">
						<img
							src={album.fields.Artwork.length > 0 ? album.fields.Artwork[0].url : 'default.jpg'}
							alt={album.fields['Album Title']}
							class="rounded-tl-container-token rounded-tr-container-token"
						/>
					</a>
					<div class="p-5 space-y-6">
						{#if album.fields.Rating}
							<span class="text-lg text-riffs-accent">⚔️ {album.fields.Rating} out of 10 ⚔️</span>
						{:else}
							<span class="italic text-riffs-accent">Not yet rated</span>
						{/if}
						<div>
							<span class="block text-2xl font-semibold text-riffs-text"
								>{album.fields['Album Title']}</span
							>
							<span class="text-lg font-light text-riffs-text/70">{album.fields.Band}</span>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
