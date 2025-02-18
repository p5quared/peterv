import { sanityClient } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		readings: await sanityClient.fetch(`*[_type =="reading"] | order(_createdAt desc)`)
	};
}
