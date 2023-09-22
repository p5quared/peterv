<script lang="ts">
import type { MarkComponentProps } from "@portabletext/svelte";
export let portableText: MarkComponentProps;

</script>

<a class="anchor" href={portableText.value.href}><slot /> </a>
