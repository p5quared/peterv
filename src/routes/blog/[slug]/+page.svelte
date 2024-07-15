<script lang="ts">
	import type { PageData } from './$types';
	import PortableRenderer from '$lib/PortableRenderer.svelte';

	export let data: PageData;
	const { post } = data;

	const ogDescription = post.ogDescription;
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

<h1>{post.title}</h1>
<article>
	<h1 class="hidden">{post.title}</h1>
	<PortableRenderer value={post.body} />
	<p>-Peter V.</p>
</article>
