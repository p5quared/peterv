import type { PageLoad } from './$types'
import PocketBase from 'pocketbase'

const pb = new PocketBase('https://peterv.fly.dev')
export const load = (async ({params}) => {
	const resultList = await pb.collection('posts').getFullList({sort: '-created'})

	console.log('resultList', resultList)
	return { resultList }
}) satisfies PageLoad
