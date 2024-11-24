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
				<li>
					<div class="sm:flex justify-between">
						<p class="order-2">
							{formatDate(post._createdAt)}
						</p>
						<a href={`/blog/${post.slug.current}`}>
							<h2>
								{post.title}
							</h2>
						</a>
					</div>
					<ul>
						{#each post.tags as tag}
							<li class="inline-block mr-3 text-orange-600">
								{tag}
							</li>
						{/each}
					</ul>
					{#if post.ogDescription}
						<p class="prose prose-gray lg:prose-xl !leading-snug">{post.ogDescription}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts found</p>
	{/if}
{:catch error}
	<p class="text-red-500">Error fetching posts!!</p>
	{error}
{/await}
