<script lang="ts">
	import type { PageData } from "./$types";
	import PortableRenderer from "$lib/PortableRenderer.svelte";
	import  { descriptionLimiter }  from "$lib/utils";



	export let data: PageData
	const { post } = data

	let body_text = ""
	for (let i = 0; i < post.body.length; i++) {
		let children = post.body[i].children
		for (let j = 0; j < children.length; j++) {
			body_text += children[j].text
			body_text += " "
		}
	}

	const desc = descriptionLimiter(body_text)
</script>


<svelte:head>
	<meta property="description" content={desc} />
	<meta property="og:description" content={desc} />
	<meta property="og:title" content={post.title} />
	<meta property="og:type" content="article" />
</svelte:head>


<h1 class="h1 pb-2">{post.title}</h1>
<article class="prose [&>p]:leading-relaxed text-inherit [&>h2]:text-inherit [&>h3]:text-inherit [&>h4]:text-inherit">
	<PortableRenderer value={post.body} />
	<p>-Peter V.</p>
</article>
