import type { PageLoad } from './$types'
import { sanityClient } from '$lib/sanityClient'

export const load = (async ({ params }) => {
	return {
		post: await sanityClient.fetch(`*[slug.current == "${params.slug}"]`).then(p => p[0])
	};
}) satisfies PageLoad
