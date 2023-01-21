import { IUser } from './IUser'

export interface IUserData extends IUser {
	password: string
	file: FileList
}
