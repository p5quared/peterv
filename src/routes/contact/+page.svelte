<script lang="ts">
const SITE_KEY="6Leu4ysnAAAAACeILeX18A6t5Q2wVk1LqQKvEmvB"
let notARobot = false;

</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<div class="container h-full mx-auto flex flex-col space-y-5 px-12 pt-24">
<h1 class="h1">Contact</h1>
<p>I don't really use much social media, but here are some places you can find me anyway:</p>
<ul class="list-none flex px-12 gap-24 lg:list-disc lg:block">
<li><a class="anchor" href="https://www.github.com/p5quared">GitHub</a></li>
<li><a class="anchor" href="https://www.linkedin.com/in/peter-vaiciulis-053ab51b7/">LinkedIn</a></li>
</ul>
<p>Or, if you're not a bot you can send me an email:</p>
<form action="javascript:alert(grecaptcha.getResponse(grecaptcha1)" method="POST">
<div class="grecaptcha1" data-sitekey={SITE_KEY}></div>
<br/>
<input type="submit" value="Submit" />
</form>
</div>
