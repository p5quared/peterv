<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData
const { work } = data

import {PortableText} from '@portabletext/svelte'
import PortableImage from "$lib/PortableImage.svelte";
	import PortableAnchor from "$lib/PortableAnchor.svelte";
	import PortableBlockQuote from "$lib/PortableBlockQuote.svelte";
</script>

<h1 class="h1">{work.title}</h1>
<article class="prose [&>p]:leading-relaxed">
	<PortableText value={work.body}
	components={{
		types: {
		image: PortableImage,
		},
		marks: {
		link: PortableAnchor,
		},
		block: {
		blockquote: PortableBlockQuote,
		},
	}}
	/>
	<p>-Peter V.</p>
</article>
