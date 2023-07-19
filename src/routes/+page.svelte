<script lang="ts">
import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="container mx-auto lg:p-40">
	<div class="space-y-1 text-center my-40">
		<h1 class="h1">Peter Vaiciulis</h1>
		<p class="italic">Welcome.</p>
	</div>
	<div class="mx-auto space-y-5 p-12">
		<h1 class="h1">About Me.</h1>
		<p>Short: I like computers, math, sailing, and finance.</p>
		<p>Medium: <a class="anchor" href="/resume.pdf">resume as pdf.</a></p>
		<p>More: If you want to know more, <a class="anchor" href="contact">get in touch.</a></p>
	</div>
	<div class="mx-auto space-y-5 p-12">
		<h1 class="h1">Contact</h1>
		<p>I don't really use much social media, but here are some places you can find me anyway:</p>
		<ul class="list-none flex px-12 gap-24 lg:list-disc lg:block">
			<li><a class="anchor" href="https://www.github.com/p5quared">GitHub</a></li>
			<li><a class="anchor" href="https://www.linkedin.com/in/peter-vaiciulis-053ab51b7/">LinkedIn</a></li>
		</ul>
		<p>Or, if you're not a bot you can send me an email:</p>
		<a href="mailto:petervaiciulis@gmail.com" class="anchor text-center lg:text-left">petervaiciulis@gmail.com</a>
		<p>(I'm serious about the no bots policy)</p>
	</div>
	<div class="flex gap-8">
		<h1 class="h1 m-8">Ramblings</h1>
		<ul class="m-8">
			{#each data.resultList as post}
			<hr>
				<li class="pb-6">
					<h4 class="h4">Uploaded: {post.created}</h4>
					<div class="flex gap-4 text-secondary-500">
						{#each post.tags as tag}
						<div>
							{tag}
						</div>
						{/each}
					</div>
					<a class="anchor" href="blog/{post.id}"><h3 class="h2">{post.title}</h3></a>
				</li>
			{/each}
		<hr>
		</ul>
	</div>
</div>

