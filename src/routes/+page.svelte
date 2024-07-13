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
	<div class="flex flex-col gap-6">
		<h1 class="h1 leading-tight">Hi, I'm<br />Peter Vaiciulis.</h1>
		<p class="leading-relaxed">
			I'm from NY, USA and among other things, I enjoy writing code. Lately I've found myself
			writing code for the web; my primary interests lie in distributed systems, developer tooling,
			and full-stack development.
		</p>
		<p class="leading-relaxed">
			When I'm not writing code you'll probably find me sailing, playing poker or piano, or still
			trying to finish Crime & Punishment after all these years.
		</p>
		<hr class="w-1/6" />
		<a href="http://github.com/p5quared" target="_blank" class="anchor w-min">
			<div class="flex gap-2">
				<img src={github_mark} alt="github-mark" class="w-6" />
				<span>github.com/p5quared</span>
			</div>
		</a>
	</div>
	<div class="flex flex-col gap-6">
		<h2 class="h2">Work</h2>
		<p>Here are a couple things I've been working on recently:</p>
		<ul>
			{#await projects}
				<p>Loading projects...</p>
			{:then projects}
				{#each projects as project}
					<li class="border-2 p-4 mb-6 border-primary-900-50-token shadow-encore">
						<h3 class="h3">{project.title}</h3>
						<p class="pb-2 text-sm text-gray-300">{formatDate(project._createdAt)}</p>
						<p class="pb-2">{project.description}</p>
						<a class="anchor" href={`/work/${project.slug.current}`}>Read more</a>
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
