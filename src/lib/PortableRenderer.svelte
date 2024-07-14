<script lang="ts">
	import type { InputValue } from "@portabletext/svelte";

	import { PortableText } from "@portabletext/svelte";

	import PortableImage from "./PortableImage.svelte";
	import PortableAnchor from "./PortableAnchor.svelte";
	import PortableBlockQuote from "./PortableBlockQuote.svelte";

	export let value: InputValue;
</script>

<PortableText {value}
	components={{
		types: {
		image: PortableImage,
		},
		marks: {
		link: PortableAnchor,
		},
		block: {
		blockquote: PortableBlockQuote,
		},
	}}
/>
