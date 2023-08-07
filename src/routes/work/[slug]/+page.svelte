<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData
const { work } = data

import {PortableText} from '@portabletext/svelte'

</script>

<h1 class="h1">{work.title}</h1>
<article class="prose">
	<PortableText value={work.body} />
</article>
