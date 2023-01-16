import { useAppSelector } from '@hooks/useTypedReduxHooks'

export const useAuth = () => {
	const { email, token, id } = useAppSelector(state => state.auth)

	return {
		email,
		token,
		id,
		isAuth: !!email,
	}
}
