<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	export let portableText: BlockComponentProps;

	// Sanity portableText blocks are weird
	const getImageSrc = () => {
		let img_src = portableText.value.asset._ref.slice(6);
		img_src = img_src.split('-');
		const img_src_type = img_src.pop();
		img_src = img_src.join('-');
		img_src += '.' + img_src_type;
		img_src = `https://cdn.sanity.io/images/x4wuwagv/production/${img_src}`;
		return img_src;
	};

	const imgSrc = getImageSrc();
</script>

<a href={imgSrc} target="_blank">
	<img src={imgSrc} alt="TBD" />
</a>
