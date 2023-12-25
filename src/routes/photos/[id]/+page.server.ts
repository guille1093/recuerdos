export async function load({ fetch, params }) {
	const id = params.id
	const response = await fetch(`/api/images/${id}`)
	const image = await response.json()
	return { image }
}
