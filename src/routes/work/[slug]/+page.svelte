<script lang="ts">
import type { PageData } from "./$types";
import PortableRenderer from "$lib/PortableRenderer.svelte";


	export let data: PageData
	const { work } = data
</script>

<h1 class="h1">{work.title}</h1>
<article class="prose [&>p]:leading-relaxed [&>*]:text-black">
	<PortableRenderer value={work.body} />
	<p>-Peter V.</p>
</article>
