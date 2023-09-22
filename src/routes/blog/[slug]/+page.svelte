<script lang="ts">
	import type { PageData } from "./$types";
	import PortableRenderer from "$lib/PortableRenderer.svelte";



	export let data: PageData
	const { post } = data

// console.log(post.body)
</script>

<h1 class="h1">{post.title}</h1>
<article class="prose [&>p]:leading-relaxed [&>*]:text-black">
	<PortableRenderer value={post.body} />
	<p>-Peter V.</p>
</article>
