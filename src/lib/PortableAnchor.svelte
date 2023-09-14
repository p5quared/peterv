<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";
export let portableText: MarkComponentProps;

console.log("Props: ",portableText)

</script>

<a class="anchor" href={portableText.value.href}><slot /> </a>
