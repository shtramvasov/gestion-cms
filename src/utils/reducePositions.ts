import { IUser } from '@interfaces/IUser'
export const reducePositions = (
	array: Array<any> | undefined,
	position: IUser['position'],
) => {
	if (array != undefined) {
		const result = array.reduce(
			(acc, current) => (current.position === position ? acc + 1 : acc),
			0,
		)
		return result
	}
	return 0
}
