<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData

	import formatDate from '$lib/utils'
import { page } from "$app/stores";

const { posts } = data
</script>

<svelte:head>
	<title>peterv! | Work</title>
</svelte:head>


<div>
{#if posts && posts.length}
<ul class="space-y-16">
	{#each posts as post}
	<li>
	<p class="text-secondary-800-100-token">{formatDate(post._createdAt)}</p>
	<ul>
		{#each post.tags as tag}
		<li class="inline-block mr-2 text-tertiary-600-300-token">
			{tag}
		</li>
		{/each}
	<ul>
	<a class="anchor h2"
	href={`${$page.url.pathname}/${post.slug.current}`}>{post.title}</a>
	</li>
	{/each}
</ul>
{:else}
	<p>No posts found</p>
{/if}
</div>
