<script lang="ts">
import type { BlockComponentProps } from "@portabletext/svelte";
export let portableText: BlockComponentProps;

console.log("Props: ",portableText)

</script>

<blockquote class="blockquote m-3 py-4 bg-secondary-50-900-token">
	<slot />
</blockquote>
