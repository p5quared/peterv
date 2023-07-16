<script lang="ts">

import type { PageData } from './$types'
export let data: PageData
const {post} = data

</script>

<div class="container px-12">
<a href="/home" class="anchor">home</a>
<a href="/blog" class="anchor">return</a>
	<h1 class="h1">{post.title}</h1>
	{@html post.content}
</div>
