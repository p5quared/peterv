import type { PageServerLoad } from './$types'
import { createClient } from '@sanity/client'
import { error } from '@sveltejs/kit'

const client = createClient({
	projectId: 'x4wuwagv',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true,
});


export const load = ( async () => {
	const posts = await client.fetch(`*[_type =="post"] | order(_createdAt desc)`);

	if (posts) {
		return { posts };
	}
	throw error(500, 'Internal Server Error')
}) satisfies PageServerLoad
