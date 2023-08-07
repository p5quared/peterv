<script lang="ts">
import { Avatar } from '@skeletonlabs/skeleton';

import { browser } from '$app/environment';

import  resume  from '$lib/assets/resume.pdf';
import headshot from '$lib/assets/headshot2.jpg';

</script>



<div class="container">
<a href={resume} target="_blank" class="anchor mb-12 text-tertiary-600 italic">Click here for a more formal (professional) description of me.</a>
<article class="prose">
	<h1 class="h1">About</h1>
	<Avatar src={headshot}
	class="float-left mr-8 mb-4"
	width="w-32"
	rounded="rounded-full"/>
	<p>Howdy, Peter here. I'm a full time student studying computer science and math.
	What I enjoy most about programming perhaps is the idea of simplicity--not
	that programming is simple, but I love taking complex ideas and breaking them
	into digestible pieces.
	</p>
	<p>
	Born and raised in a tiny town (re: no traffic lights, gas, or groceries) in the
	Adirondack mountains of upstate New York, I found wilderness first and computers second.
	One of my earliest excitements with computers was in middle school when I figured out
	you could access an app called "Remote Desktop" through Command Prompt and use it to shutdown
	any computer on the network at will. I was hooked.
	</p>
	<p>
	Over the past few years I have worn many hats, after dropping out of RPI to pursue a startup idea
	I decided to launch a boat rental business, boatADK, which I ran for a few years before
	selling it in 2023. I also had a stint working at one of the most exclusive boutique hotels
	in the country, The Point, where, as Property Host, I was responsible for the guest experience
	and trained towards sommoliere-ship. I've decided I love programming more than wine, so I'm back
	in school planning to graduate with a degree in computer science and pure math in Spring '25.
	</p>
	
	{#if browser}
		<p>
		If you are not a robot and want to get in touch you can reach me here:
		petervaiciulis@gmail.com.
		</p>
	{:else}
		<noscript>
			No email for you!!
		</noscript>
	{/if}
</article>
</div>
