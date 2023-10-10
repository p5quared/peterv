<script lang="ts">
import { Avatar } from '@skeletonlabs/skeleton';

import { browser } from '$app/environment';

import  resume  from '$lib/assets/resume.pdf';
import headshot from '$lib/assets/headshot2.jpg';

</script>



<article class="prose [&>p]:leading-relaxed text-inherit">
	<h1 class="prose h1 text-inherit">A Little About Me</h1>
	<a href={resume} target="_blank" class="anchor text-tertiary-600 italic">(click for resume)</a>
	<Avatar src={headshot}
	class="float-left m-4"
	width="w-32"
	rounded="rounded-full"/>
	<p>Howdy, Peter here. I'm a full time student studying computer science and math.
	I love programming because I love the freedom of tinkering and going down the rabbit
	hole on things many would consider a waste of time.
	I could probably be happy with VSCode out of the box--I'd rather
	spend 20 hours configuring Neovim. The better Apple Music player 'Cider' has stopped
	supporting Mac--why don't I just create my own player? To me, learning to program feels
	like practicing self-reliance which is enlightening and fulfilling.
	</p>
	<p>
	Born and raised in a tiny town (re: no traffic lights, gas, or groceries) in the
	Adirondack mountains of upstate New York, I found wilderness first and computers second.
	</p>
	<p>Perhaps my earliest memory of programming was in high-school when I started
	messing around with bash scripts. One day I found that I could access the remote-control
	software for controlling the school's computer's on the network via CMD. Immediately, I began
	slowly gathering the network ID's of every computer I could. After about a week of cataloging,
	I now had the ability to shut down anybody's computer at will, and even attach messages ranging
	from the miscellaneous 'Required updates must be installed: computer will restart in 8 seconds',
	to the mischevious 'This is the FBI, your data has been compromised: beginning complete system
	wipe. If you tell anyone we will arrest you'.
	</p>
	<p>
	Over the past few years I have worn many hats. After dropping out of RPI to pursue a startup idea
	I decided to launch a boat rental business, boatADK. I ran this, renting pontoon boats to people on
	lake placid for a few years before selling it in 2023.
	I also had a stint working at one of the most exclusive boutique hotels in the country where, as
	Property Host, I was responsible for the guest experience and trained towards sommoliere-ship.
	I've decided I love programming more than wine, so I'm back in school planning to graduate with a degree
	in computer science and pure math in Spring '25.
	</p>
	
	{#if browser}
		<p>
		If you are not a robot and want to get in touch you can reach me here:
		<a class="hover:text-primary-500 transition transition-color" href="mailto:petervaiciulis@gmail.com">petervaiciulis@gmail.com</a>.
		</p>
	{:else}
		<noscript>
			No email for you!!
		</noscript>
	{/if}
</article>
