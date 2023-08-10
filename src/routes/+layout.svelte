<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/styles/partials/typography-prose.css'
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'

	import { page } from '$app/stores';

	import faviconPNG from '$lib/assets/faviconXL.png';
</script>

<svelte:head>
	<meta property="og:site_name" content="petervaiciulis.com" />
	<meta property="og:title" content="petervaiciulis.com" />
	<meta property="og:description" content="Web territory of the infamous, Peter V." />
	<meta property="og:locale" content="en" />

	

	  <meta property="og:image:type" content="image/png" />
	  <meta property="og:image" content={faviconPNG} />
	  <meta property="og:image:width" content="1200" />
	  <meta property="og:image:height" content="630" />
</svelte:head>

<AppShell
regionPage="container mx-auto max-w-screen-lg px-8"
slotHeader="container mx-auto max-w-screen-lg"
>
	<svelte:fragment slot='header'>
		<AppBar 
		background="bg-surface-100-900-token"
		padding="p-8"
		gap="gap-6 md:gap-12"
		slotDefault="flex gap-6 md:gap-12"
		>
			<svelte:fragment slot='lead'>
			<a href='/' class="h1 flex" aria-current={$page.url.pathname === "/"}>
				P<div class="rotate-6">!</div>
			</a>
			</svelte:fragment>
			<a href='/work' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all" aria-current={$page.url.pathname === "/work"}>work</a>
			<a href='/blog' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all" aria-current={$page.url.pathname === "/blog"}>blog</a>
			<a href='/about' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all" aria-current={$page.url.pathname === "/about"}>about</a>
		<svelte:fragment slot='trail'>
			<LightSwitch />
		</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
