import type { PageLoad } from './$types'
import PocketBase from 'pocketbase'

const pb = new PocketBase('https://peterv.fly.dev')
export const load = (async ({params}) => {
	const id = params.id

	const post = await pb.collection('posts').getOne(id)

	return { post }
}) satisfies PageLoad
