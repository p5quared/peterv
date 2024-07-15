import { sanityClient } from '$lib/sanityClient';
import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		posts: sanityClient.fetch(`*[_type =="post"] | order(_createdAt desc)`)
	};
}) satisfies PageLoad;
