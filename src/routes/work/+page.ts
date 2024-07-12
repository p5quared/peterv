import type { PageLoad } from './$types'
import { sanityClient } from '$lib/sanityClient'
import { error } from '@sveltejs/kit'

export const load = (async () => {
	const posts = await sanityClient.fetch(`*[_type =="projects"] | order(_createdAt desc)`);

	if (posts) {
		return { posts };
	}
	throw error(500, 'Internal Server Error')
}) satisfies PageLoad
