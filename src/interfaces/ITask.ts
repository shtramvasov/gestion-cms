interface IAuthor {
	uid: string | undefined
	name: string | undefined
}

export interface ITask {
	id: string
	title: string
	description: string
	createdAt: any
	tag: 'Срочная задача' | 'Для дизайнеров' | 'Для разработчиков' | 'Новости'
	taggedUsers: string[]
	isPinned: boolean
	author: IAuthor
}
