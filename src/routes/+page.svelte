<script lang="ts">
	import github_mark from '$lib/assets/github-mark/github-mark.svg';
	import type { PageData } from './$types';

	import formatDate from '$lib/utils';

	export let data: PageData;
	const { projects } = data;
</script>

<svelte:head>
	<title>peterv!</title>
	<meta property="og:title" content="peterv.net" />
	<meta name="description" content="This is my little slice of the web." />
	<meta name="theme-color" content="black" />
</svelte:head>

<div class="grid grid-flow-row md:grid-flow-col gap-24">
	<div class="prose prose-gray lg:prose-xl">
		<h1 class="w-fit !mb-0">Hi, I'm<br />Peter Vaiciulis</h1>
		<p class="leading-normal">
			I'm from NY, USA and among other things, I enjoy writing code. Lately I've found myself
			writing code for the web; my primary interests lie in distributed systems, developer tooling,
			and full-stack development.
		</p>
		<p class="leading-normal">
			When I'm not writing code you'll probably find me sailing, playing poker or piano, or still
			trying to finish Crime & Punishment after all these years.
		</p>
		<a href="http://github.com/p5quared" target="_blank">
			<div class="flex gap-2 items-center">
				<img src={github_mark} alt="github-mark" class="w-6 !m-0" />
				<span>github.com/p5quared</span>
			</div>
		</a>
	</div>

	<div class="flex flex-col gap-6">
<div class="prose prose-gray lg:prose-xl">
		<h2 class="!mb-2">Work</h2>
		<p class="leading-normal">Here are a couple things I've been working on recently:</p>
</div>
		<ul class="space-y-6">
			{#await projects}
				<p>Loading projects...</p>
			{:then projects}
				{#each projects as project}
					<li class="border-2 p-4 border-black shadow-encore">
				<div class="flex justify-between items-center">
						<h3>{project.title}</h3>
						<p class="pb-2 text-sm">{formatDate(project._createdAt)}</p>
				</div>
						<p class="prose prose-gray lg:prose-xl !leading-snug">{project.description}
						</p>
						<a class="text-lg" href={`/work/${project.slug.current}`}>Read more</a>
					</li>
					<li />
				{/each}
{:catch error}
	<p class="text-error-500">Error fetching data!!</p>
	 {error}
{/await}
		</ul>
	</div>
</div>
