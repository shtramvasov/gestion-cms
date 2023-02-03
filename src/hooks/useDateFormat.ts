import { useAppSelector, useAppDispatch } from '@hooks/useTypedReduxHooks'
import { setFormat } from '@store/slices/settingsSlice'

export const useDateFormat = () => {
	const dispatch = useAppDispatch()
	const { dateformat } = useAppSelector(
		state => state.persistedReducer.settingsSlice,
	)
	const mode = dateformat == 'D MMMM YYYY' ? 'D.MM.YYYY' : 'D MMMM YYYY'

	return {
		dateformat,
		toggle: () => dispatch(setFormat({ dateformat: mode })),
	}
}
