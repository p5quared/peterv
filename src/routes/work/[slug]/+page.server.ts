import type { PageServerLoad } from './$types'
import { createClient } from '@sanity/client'
import { error } from '@sveltejs/kit'

const client = createClient({
	projectId: 'x4wuwagv',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true,
});


export const load = ( async ({params}) => {
	const work = await client.fetch(`*[slug.current == "${params.slug}"]`);

	if (work) {
		return { work: work[0] };
	}
	throw error(500, 'Internal Server Error')
}) satisfies PageServerLoad
