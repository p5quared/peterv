<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { page } from '$app/stores';

	import faviconPNG from '$lib/assets/faviconXL.png';

	const navAnchorStyle = `text-xl
	border-links text-text-primary
	hover:border-b-4 hover:pb-[0px] transition-all`;
	// add pb-[4px] to stop them from moving
</script>

<svelte:head>
	<meta property="og:site_name" content="peterv.net" />
	<meta property="og:locale" content="en" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image" content={faviconPNG} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="container max-w-screen-lg mx-auto px-8 pb-12">
	<nav class="flex gap-6 md:gap-12 py-4 md:py-8 items-end">
		<a
			href="/"
			class="text-text-primary flex 
			hover:text-links hover:scale-150 hover:rotate-12 transition-all duration-700"
			aria-current={$page.url.pathname === '/'}
		>
			<h1>P</h1>
			<span class="rotate-6 text-3xl md:text-4xl lg:text-5xl">!</span>
		</a>
		<a href="/reading" class={navAnchorStyle} aria-current={$page.url.pathname === '/reading'}>reading</a>
		<a href="/blog" class={navAnchorStyle} aria-current={$page.url.pathname === '/blog'}>posts</a>
		<a href="/about" class={navAnchorStyle} aria-current={$page.url.pathname === '/about'}>about</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	nav a {
		@apply no-underline;
		color: var(--color-text-primary) !important;
	}

	nav a:hover {
		filter: none !important;
	}
</style>
