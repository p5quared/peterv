<script>
	export let src;
	const base = "https://embed.music.apple.com/us/album/" 
	src = base + src
</script>
<iframe 
	class="min-w-fit shadow-encore"
	height="175"
	width="100%" 
	title="Media player" 
	src={src}
	id="embedPlayer" 
	style="border:0;border-radius:12px;width:100%;height:175px;max-width:660px" 
	sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
	allow="autoplay *; encrypted-media *; clipboard-write">
</iframe>
