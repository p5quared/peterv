import type { PageServerLoad } from './$types'
import { createClient } from '@sanity/client'
import { error } from '@sveltejs/kit'

const client = createClient({
	projectId: 'x4wuwagv',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true,
});


// TODO: select a little better... perhaps pinned content?
export const load = ( async () => {
	const projects = await client.fetch(`*[_type =="projects"]`)
									.then(p => p.slice(0,3));
	
	if (projects) {
		return { projects };
	}

	throw error(500, 'Internal Server Error')
}) satisfies PageServerLoad
