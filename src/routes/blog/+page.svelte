<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { page } from '$app/stores';
	const { posts } = data;
</script>

<svelte:head>
	<title>peterv! | Blog</title>
</svelte:head>

<div>
	{#if posts && posts.length}
		<ul class="space-y-16">
			{#each posts as post}
				<li>
					<a class="anchor h2" href={`${$page.url.pathname}/${post.slug.current}`}>
						{post.title}
					</a>
					<div class="lg:flex gap-8">
					<p class="text-secondary-500-400-token">{post._createdAt}</p>
					<ul>
						{#each post.tags as tag}
							<li class="inline-block mr-2 text-tertiary-600-300-token">
								{tag}
							</li>
						{/each}
					</ul>
					</div>
					{#if post.ogDescription}
						<p class="text-secondary-900-50-token">{post.ogDescription}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found</p>
	{/if}
</div>
