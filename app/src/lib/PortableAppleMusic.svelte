<script lang="ts">
    import type { CustomBlockComponentProps } from '@portabletext/svelte';
    export let portableText: CustomBlockComponentProps;

    // Get the src URL directly from the block value
    const src = portableText.value.src;
</script>

<div class="apple-music-embed">
<iframe 
	class="min-w-fit shadow-encore"
	height="175"
	width="100%" 
	title="Media player" 
	{src}
	id="embedPlayer" 
	style="border:0;border-radius:12px;width:100%;height:175px;max-width:660px" 
	sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
	allow="autoplay *; encrypted-media *; clipboard-write">
</iframe>
</div>

<style>
    .apple-music-embed {
        margin: 1rem 0;
    }
</style>
