import { useAppSelector } from '@hooks/useTypedReduxHooks'

export const useAuth = () => {
	const { email, id } = useAppSelector(state => state.persistedReducer.authUserSlice)

	return {
		email,
		id,
		isAuth: !!email,
	}
}
