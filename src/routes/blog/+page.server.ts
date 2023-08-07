import type { PageServerLoad } from './$types'
import { createClient } from '@sanity/client'
import { error } from '@sveltejs/kit'

const client = createClient({
	projectId: 'x4wuwagv',
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: true,
});


export const load = ( async () => {
	const pets = await client.fetch(`*[_type =="pet"]`);

	if (pets) {
		return { pets };
	}
	throw error(500, 'Internal Server Error')
}) satisfies PageServerLoad
