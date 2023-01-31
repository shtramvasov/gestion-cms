export interface IUser {
	uid: string
	email: string
	name: string
	position: 'Менеджер' | 'Разработчик' | 'Дизайнер' | 'Тестировщик'
	photoUrl: string
	createdAt: any
}
