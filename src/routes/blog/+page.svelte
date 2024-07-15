<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import formatDate from '$lib/utils';

	const { posts } = data;
</script>

<svelte:head>
	<title>peterv! | Blog</title>
</svelte:head>
{#await posts then posts}
	{#if posts && posts.length}
		<ul class="space-y-16">
			{#each posts as post}
				<li
					class="max-w-screen-sm p-4 mb-6 space-y-2 shadow-encore border-2 border-primary-900-50-token
				transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1
				"
				>
					<div class="lg:flex justify-between">
						<a class="anchor h2" href={`/blog/${post.slug.current}`}>
							{post.title}
						</a>
						<p class="min-w-fit pl-16 text-secondary-500-400-token">
							{formatDate(post._createdAt)}
						</p>
					</div>
					<ul>
						{#each post.tags as tag}
							<li class="inline-block mr-2 text-tertiary-600-300-token">
								{tag}
							</li>
						{/each}
					</ul>
					{#if post.ogDescription}
						<p class="text-secondary-900-50-token">{post.ogDescription}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found</p>
	{/if}
{:catch error}
	<p class="text-error-500">Error fetching posts!!</p>
	{error}
{/await}
