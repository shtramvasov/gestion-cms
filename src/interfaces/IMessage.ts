interface IAuthor {
  name: string
  uid: string
}

export interface IMessage {
	uid: string
	text: string
	author: IAuthor
	createdAt: any
}