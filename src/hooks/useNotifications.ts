import { useAppSelector, useAppDispatch } from '@hooks/useTypedReduxHooks'
import { setNotifications } from '@store/slices/settingsSlice'

export const useNotifications = () => {
	const dispatch = useAppDispatch()
	const { notifications } = useAppSelector(
		state => state.persistedReducer.settingsSlice,
	)

	return {
		notifications,
		toggle: () => dispatch(setNotifications({ notifications: !notifications })),
	}
}
