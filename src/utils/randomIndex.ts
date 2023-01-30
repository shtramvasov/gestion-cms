export const randomIndex = (array: Array<any>): number => {
	const result = Math.floor(Math.random() * array.length)
	return result
}
