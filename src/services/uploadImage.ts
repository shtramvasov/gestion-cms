import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const uploadImage = async (file: FileList) => {
	const storage = getStorage()
	const fileName = file[0].name
	const fileRef = ref(storage, fileName)

	await uploadBytes(fileRef, file[0])
	const url = await getDownloadURL(fileRef)

	return url
}
