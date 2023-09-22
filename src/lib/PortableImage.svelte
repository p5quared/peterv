<script lang="ts">
import type { BlockComponentProps } from '@portabletext/svelte'
export let portableText: BlockComponentProps

let img_src = portableText.value.asset._ref.slice(6)
img_src = img_src.split('-')
const img_src_type = img_src.pop()
img_src = img_src.join('-')
img_src += "." + img_src_type

const full_img_src = `https://cdn.sanity.io/images/x4wuwagv/production/${img_src}`
</script>

<a href={full_img_src} target="_blank">
	<img src={`https://cdn.sanity.io/images/x4wuwagv/production/${img_src}`} alt="">
</a>
