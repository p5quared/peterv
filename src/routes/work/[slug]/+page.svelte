<script lang="ts">
	import type { PageData } from './$types';
	import PortableRenderer from '$lib/PortableRenderer.svelte';

	export let data: PageData;
	const { work } = data;
</script>

<h1 class="h1 pb-2">{work.title}</h1>
<article
	class="prose [&>p]:leading-relaxed text-inherit [&>h2]:text-inherit [&>h3]:text-inherit [&>h4]:text-inherit"
>
	<PortableRenderer value={work.body} />
	<p>-Peter V.</p>
</article>
