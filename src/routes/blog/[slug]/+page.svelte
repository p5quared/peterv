<script lang="ts">
	import type { PageData } from "./$types";
	import PortableRenderer from "$lib/PortableRenderer.svelte";

	export let data: PageData
	const { post } = data

	const ogDescription = post.ogDescription
</script>


<svelte:head>
	{#if ogDescription}
		<meta property="og:description" content={ogDescription} />
		<meta name="description" content={ogDescription} />
	{/if}
	<title>{`peterv! | ${post.title}`}</title>
	<meta property="og:title" content={post.title} />
	<meta property="og:type" content="article" />
</svelte:head>


<h1 class="h1 pb-2">{post.title}</h1>
<article class="prose [&>p]:leading-relaxed text-inherit [&>h2]:text-inherit [&>h3]:text-inherit [&>h4]:text-inherit">
	<PortableRenderer value={post.body} />
	<p>-Peter V.</p>
</article>
