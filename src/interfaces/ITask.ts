export interface ITask {
	id: string
	title: string
	description: string
	createdAt: string
	tag: string
	taggedUsers: any //#TODO: change to IUser[] later
	isPinned: boolean
	author: any // #TODO: change to IUser later
}
