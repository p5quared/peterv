import { sanityClient } from '$lib/sanityClient';
import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async () => {
	const posts = await sanityClient.fetch(`*[_type =="post"] | order(_createdAt desc)`);

	if (posts) {
		return { posts };
	}
	throw error(500, 'Internal Server Error')
}) satisfies PageLoad
