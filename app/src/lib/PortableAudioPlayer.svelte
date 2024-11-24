<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps;

	console.log(portableText);

	const getImageSrc = () => {
		let img_src = portableText.value.asset._ref.slice(5);
		img_src = img_src.split('-');
		const img_src_type = img_src.pop();
		img_src = img_src.join('-');
		img_src += '.' + img_src_type;
		img_src = `https://cdn.sanity.io/files/x4wuwagv/production/${img_src}`;
		return img_src;
	};
</script>

<h1>{portableText.value.title}</h1>
<h2>{portableText.value.artist}</h2>
<audio controls src={getImageSrc()} />

