import { browser } from '$app/environment';
import { sanityClient } from '$lib/sanityClient';
import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async () => {
	const posts = await sanityClient.fetch(`*[_type =="post"] | order(_createdAt desc)`);

	if (browser)
		console.log("BROWSER")

	if (posts) {
		return { posts };
	}

	throw error(500, 'Internal Server Error')
}) satisfies PageLoad
