<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData

import { page } from "$app/stores";

const { posts } = data
</script>


<div>
{#if posts && posts.length}
<ul>
	{#each posts as post}
	<li>
	<a class="anchor h3"
	href={`${$page.url.pathname}/${post.slug.current}`}>{post.title}</a>
	</li>
	{/each}
</ul>
{:else}
	<p>No posts found</p>
{/if}
</div>
