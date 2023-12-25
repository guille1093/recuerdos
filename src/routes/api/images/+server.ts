import { json } from '@sveltejs/kit'
import PocketBase from 'pocketbase';
import EXIF from "exif-js";

const url = 'https://still-team.pockethost.io/'
const client = new PocketBase(url)

export async function GET(event) {
	const posts = await client.collection('posts').getFullList({
		sort: '-created',
	});
	return json(posts)
}

export async function POST(event) {
	const formData = await event.request.formData();
	const newPost = await client.collection('posts').create(formData);
	return json(newPost);
}