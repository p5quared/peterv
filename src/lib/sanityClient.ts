import { createClient } from '@sanity/client'

export const sanityClient = createClient({
	projectId: 'x4wuwagv',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true,
});
