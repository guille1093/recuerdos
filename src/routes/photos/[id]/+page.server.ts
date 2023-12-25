export async function load({ fetch, params }) {
	const id = params.id
	const response = await fetch(`/api/images/${id}`)
	const images = await response.json()
	return { image: images}
}
