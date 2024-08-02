<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { readings } = data;
</script>

<svelte:head>
	<title>peterv! | Reading</title>
</svelte:head>

<p class="prose-xl italic">This page has some of the things I've been reading recently or plan to read, and I think are worth sharing.
	This section is pretty new; I swear I read more than this!
</p>

<hr>

{#if readings && readings.length}
	<ul class="space-y-16 mt-8">
		{#each readings as reading}
			<li class="border-2 border-black p-4 bg-stone-50 lg:flex lg:gap-6">
				{#if reading.image}
					<img src={reading.image} alt={reading.title} class="h-32 lg:h-64 rounded-xl">
				{/if}
			<div>
				<ul>
					{#each reading.tags as tag}
						<li class="inline-block mr-3 text-orange-600">
							{tag}
						</li>
					{/each}
				</ul>
				<div class="sm:flex justify-between">
					<a href={reading.link} class="no-underline">
						<h2>
							{reading.title}
						</h2>
					</a>
				</div>
				{#if reading.description}
					<p class="prose prose-gray lg:prose-xl !leading-snug mt-2">{reading.description}</p>
				{/if}
		</div>
			</li>
		{/each}
	</ul>
{:else}
	<p>No readings found</p>
{/if}
