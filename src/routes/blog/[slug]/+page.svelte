<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData

import {PortableText} from '@portabletext/svelte'

const { post } = data
console.log(post)
console.log("Title: " + post.title)
</script>

<h1 class="h1">{post.title}</h1>
<article class="prose mb-24">
	<PortableText value={post.body} />
	<p>-Peter V.</p>
</article>
