import { useAppSelector } from '@hooks/useTypedReduxHooks'

export const useAuth = () => {
	const { email, token, id } = useAppSelector(state => state.persistedReducer)

	return {
		email,
		token,
		id,
		isAuth: !!email,
	}
}
