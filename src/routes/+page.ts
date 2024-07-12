import type { PageLoad } from './$types'
import { sanityClient } from '$lib/sanityClient'
import { error } from '@sveltejs/kit'

export const load = (async () => {
	const projects = await sanityClient.fetch(`*[_type =="projects" && pinned == true]`)
		.then(p => p.slice(0, 3));

	if (projects) {
		return { projects };
	}

	console.log('Error fetching projects');

	throw error(500, 'Internal Server Error')
}) satisfies PageLoad
