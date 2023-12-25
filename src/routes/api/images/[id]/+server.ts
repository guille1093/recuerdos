import { json } from '@sveltejs/kit'
import PocketBase from 'pocketbase';

const url = 'https://still-team.pockethost.io/'
const client = new PocketBase(url)


export async function GET({params}) {
	const posts = await client.collection('posts').getOne(`${params.id}`,{
		sort: '-created',
	});
	return json(posts)
}