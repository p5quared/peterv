<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData
const { post } = data

import {PortableText} from '@portabletext/svelte'
import PortableImage from "$lib/PortableImage.svelte";
</script>

<h1 class="h1">{post.title}</h1>
<article class="prose [&>p]:leading-relaxed">
	<PortableText value={post.body}
	components={{
		types: {
		image: PortableImage,
		}
	}}
	/>
	<p>-Peter V.</p>
</article>
