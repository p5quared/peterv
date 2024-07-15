import type { PageLoad } from './$types';
import { sanityClient } from '$lib/sanityClient';

export const load = (async () => {
	return {
		projects: sanityClient
			.fetch(`*[_type =="projects" && pinned == true]`)
			.then((p) => p.slice(0, 3))
	};
}) satisfies PageLoad;
