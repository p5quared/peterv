<script>
// TODO: Types?
export let portableText

</script>

{#if portableText?.value?.href}
<a href={portableText.value.href}>
	<slot />
</a>
{:else}
<span class="text-red">
		ERROR: No href found in PortableAnchor
</span>
{/if}

