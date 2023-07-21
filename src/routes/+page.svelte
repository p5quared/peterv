<script lang="ts">
import type { PageData } from './$types'
	export let data: PageData

	// TODO: Make blog-post date prettier
</script>

<div class="container mx-auto lg:p-40 flex flex-col gap-24 p-12">
	<div class="space-y-1 text-center my-40">
		<h1 class="h1">Peter S. Vaiciulis</h1>
		<p class="italic text-primary-400">'Welcome.'</p>
	</div>
	<div class="space-y-5">
		<h1 class="h1">About Me.</h1>
		<p><span class="text-tertiary-300">Short:</span> I like computers, math, sailing, and finance.</p>
		<p><span class="text-tertiary-400">Medium:</span> <a class="anchor" href="/resume.pdf">resume as pdf.</a></p>
		<p><span class="text-tertiary-500">More:</span> If you want to know more, just keep reading.</p>
	</div>
	<div class="space-y-5">
		<h1 class="h1">Contact</h1>
		<p>I don't really use much social media, but here are some places you can find me anyway:</p>
		<ul class="list-none flex px-12 gap-24 lg:list-disc lg:block">
			<li><a class="anchor" href="https://www.github.com/p5quared">GitHub</a></li>
			<li><a class="anchor" href="https://www.linkedin.com/in/peter-vaiciulis-053ab51b7/">LinkedIn</a></li>
		</ul>
		<p>Or, if you're <span class="underline underline-offset-4 text-tertiary-700"><span class="underline underline-offset-1 text-tertiary-400"><span class="italic text-white">not a bot</span></span></span> you can send me an email:</p>
		<a href="mailto:petervaiciulis@gmail.com" class="anchor text-center lg:text-left">petervaiciulis@gmail.com</a>
		<p>(I'm serious about the <span class="underline underline-offset-4 text-tertiary-700"><span class="underline underline-offset-1 text-tertiary-400"><span class="italic font-semibold text-white">no bots</span></span></span> policy)</p>
	</div>
	<div class="flex flex-col lg:flex-row gap-8">
		<h1 class="h1">Ramblings</h1>
		<ul class="w-full">
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

