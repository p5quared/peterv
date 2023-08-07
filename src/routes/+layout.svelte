<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/styles/partials/typography-prose.css'
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';


	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'

</script>


<AppShell
regionPage="container mx-auto"
slotHeader="container mx-auto"
>
	<svelte:fragment slot='header'>
		<AppBar 
		background="bg-surface-100-900-token"
		padding="p-8"
		gap="gap-12"
		slotDefault="flex gap-12"
		>
			<svelte:fragment slot='lead'>
			<a href='/' class="h1 flex">
				PV<div class="rotate-12">!</div>
			</a>
			</svelte:fragment>
			<a href='/work' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all">work</a>
			<a href='/blog' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all">blog</a>
			<a href='/about' class="border-primary-500 hover:border-b-4 hover:pb-[0px] pb-[4px] transition-all">about</a>
		<svelte:fragment slot='trail'>
			<LightSwitch />
		</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />

</AppShell>
