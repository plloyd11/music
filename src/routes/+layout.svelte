<script>
	import '../app.css';
    import Footer from '../lib/components/Footer.svelte';
</script>

<nav class="bg-riffs-bg/90">
	<div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
				<a href="/" class="flex items-center flex-shrink-0 text-2xl">⚔️</a>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="/2023"
							class="px-3 py-2 text-sm font-medium text-white rounded-md"
							aria-current="page">2023</a
						>
						<a
							href="/2024"
							class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
							>2024</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<main class="pb-16 bg-riffs-bg sm:pb-32">
	<slot />
</main>

<Footer />
