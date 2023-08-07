<script lang="ts">
	import { page } from '$app/stores';
import github_mark from '$lib/assets/github-mark/github-mark.svg';
import type { PageData } from './$types';

export let data: PageData
const { projects } = data;

</script>

<div class="grid grid-flow-row md:grid-flow-col gap-24">
	<div class="flex flex-col gap-6">
		<h1 class="h1 leading-tight">Hi, I'm<br>Peter Vaiciulis.</h1>
		<p class="leading-relaxed">I'm from NY, USA and among other things, I enjoy writing code.
		Mostly I find myself writing code for the web but I am also interested in DevOps and ML.
		</p>
		<p class="leading-relaxed">When I'm not writing code you'll probably find me sailing, playing poker or piano, or
		still trying to finish Crime & Punishment after all these years.</p>
		<hr class="w-1/6">
		<a href="http://github.com/p5quared"
		target="_blank"
		class="anchor w-min">
			<div class="flex gap-2">
				<img src={github_mark} alt="github-mark" class="w-6">
				<span>github.com/p5quared</span>
			</div>
		</a>
	</div>
	<div class="flex flex-col gap-6">
		<h2 class="h2">Work</h2>
		<p>Here are some of the things I've been working on recently:</p>
		<ul>
		{#each projects as project}
			<li class="border-2 p-4 border-primary-900-50-token">
				<h3 class="h3">{project.title}</h3>
				<p class="pb-2 text-sm text-gray-200">project date</p>
				<p class="pb-2">{project.description}</p>
				<a class="anchor"
				href={`/work/${project.slug.current}`}>Read more</a>
			<li>
		{/each}
		</ul>
	</div>
</div>
