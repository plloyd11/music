<script>
	import Hero from '$lib/components/Hero.svelte';
</script>

<main class="h-screen bg-riffs-bg">
	<Hero title="Pete's Riff Database" />
	<h2 class="text-4xl text-center text-gray-100">⚔️ Pick a year, coward! ⚔️</h2>
	<div class="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
		<div
			class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<article
				class="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-riffs-card isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80"
			>
				<img src="/2023.png" alt="" class="absolute inset-0 object-cover w-full h-full -z-10" />
				<div class="absolute inset-0 -z-10 bg-gradient-to-t from-riffs-card via-riffs-card/40" />
				<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-riffs-card/10" />
				<h3 class="mt-3 text-2xl font-semibold leading-6 text-white">
					<a href="/2023">
						<span class="absolute inset-0" />
						2023
					</a>
				</h3>
			</article>
			<article
				class="relative flex flex-col justify-end px-8 pb-8 overflow-hidden bg-riffs-card isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80"
			>
				<img
					src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
					alt=""
					class="absolute inset-0 object-cover w-full h-full -z-10"
				/>
				<div class="absolute inset-0 -z-10 bg-gradient-to-t from-riffs-card via-riffs-card/40" />
				<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-riffs-card/10" />
				<h3 class="mt-3 text-2xl font-semibold leading-6 text-white">
					<a href="/2024">
						<span class="absolute inset-0" />
						2024
					</a>
				</h3>
			</article>
		</div>
	</div>
</main>
