<script lang="ts">
	import type { InputValue } from '@portabletext/svelte';

	import { PortableText } from '@portabletext/svelte';

	import PortableImage from './PortableImage.svelte';
	import PortableAnchor from './PortableAnchor.svelte';
	import PortableBlockQuote from './PortableBlockQuote.svelte';
	import PortableAudioPlayer from './PortableAudioPlayer.svelte';

	export let value: InputValue;
	console.log(value)
</script>

<PortableText
	{value}
	components={{
		types: {
			image: PortableImage,
			audioPlayer: PortableAudioPlayer
		},
		marks: {
			link: PortableAnchor
		},
		block: {
			blockquote: PortableBlockQuote
		}
	}}
/>
