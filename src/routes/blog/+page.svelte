<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData

const { pets } = data
</script>


{#if pets && pets.length}
<ul>
	{#each pets as pet}
	<li>{pet.name}</li>
	{/each}
</ul>
{:else}
	<p>No pets found</p>
{/if}
