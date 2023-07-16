<script lang="ts">
import type { PageData } from './$types'
	export let data: PageData
</script>


<div class="flex gap-8">
<h1 class="h1 m-8">Blog</h1>
<a href="/" class="m-8">return</a>
</div>
<ul class="m-8">
{#each data.resultList as post}
<hr>
	<li class="pb-6">
		<h4 class="h4">Uploaded: {post.created}</h4>
		<div class="flex gap-4 text-secondary-500">
			{#each post.tags as tag}
			<div>
				{tag}
			</div>
			{/each}
		</div>
		<a class="anchor" href="blog/{post.id}"><h3 class="h2">{post.title}</h3></a>
	</li>
{/each}
<hr>
</ul>
