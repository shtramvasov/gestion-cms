export interface ITask {
	title: string
	description: string
	createdAt: Date
	tag: string
	taggedUsers: any //#TODO: change to IUser[] later
	isPinned: boolean
	author: any // #TODO: change to IUser later
}
