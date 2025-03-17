<script lang="ts">
	import { browser } from '$app/environment';

	import resume from '$lib/assets/resume.pdf';
	import headshot from '$lib/assets/headshot2.jpg';
</script>

<svelte:head>
	<title>peterv! | About</title>
</svelte:head>

<h1 class="text-inherit">A Little About Me</h1>
<a href={resume} target="_blank" class="italic">(click for resume)</a>
<article>
	<h1 class="hidden">A Little About Me</h1>
	<img src={headshot} alt="selfie of me" class="float-left m-4 w-64 rounded-full" />
	<p>
		I am, in the most succinct form possible, a J/24 sailor, a loose poker player, a closeted music
		major, a wannabe math major, and a programmer.
	</p>
	<p>
		Over the past few years I have worn many hats. After dropping out of RPI to pursue a startup
		idea I launched a boat rental business which I ran to a surprising amount of success. I have
		also had the opportunity to serve as the Property Host at one of the most exclusive boutique
		hotels in the country. Here I was responsible for personalizing the guest experience and would
		host the dinners and cocktail hours. Here I learned a lot about etiquette and high-society while
		rubbing shoulders with some of the world's elite, and was even trained towards sommoliere-ship.
	</p>
	<p>
		I've since decided I like programming more than wine, so I'm back in school and planning to
		graduate with a degree in mathematics and computer science in Spring 2025.
	</p>
	<p>
		I've contributed to a number of open source projects used by thousands, and since returning to
		school I've been lucky to join a couple research projects in the fields of web-accessibility and
		applying machine learning to solve combinatorial (mathematical counting) problems. My research
		was chosen as 1 of 12 in the nation to presented in Washington DC to legislators the heads of
		the NSF in 2023. It has also been presented at the Joint Mathematics Meetings in San Francisco
		2024.
	</p>
	<p>
		In summer '24, I interned  at Trusted Nurse Staffing doing a mix of data engineering and
		fullstack web development. In other words, I tried to move around big spreadsheets without
		breaking things and helped make the website look pretty.
	</p>
	<p>
	In fall '24' I interned at Amazon in Seattle, working on <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>.
	I worked on the Amplify Data team, designing and implementing support for auto-increment SQL fields. 
	I wish there were a simpler analogy I could think of...
  </p>
  <p>
	This summer (2025) I will be returning to Amazon as a full-time Software Development Engineer (SDE).
  </p>
	<p>
		When I'm not programming, you'll probably find me sailing on Lake Champlain or attending the
		Buffalo Philharmonic Orchestra.
	</p>

	{#if browser}
		<p>
			If you are not a robot and want to get in touch you can reach me here:
			<a
				class="hover:text-primary-500 transition transition-color"
				href="mailto:petervaiciulis@gmail.com">petervaiciulis@gmail.com</a
			>.
		</p>
	{:else}
		<noscript> No email for you!! </noscript>
	{/if}
</article>
