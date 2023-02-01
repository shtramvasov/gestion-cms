import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

//#TODO: settings
export const convertToDate = (date: Timestamp): string =>
	dayjs(date?.toDate()).locale('ru').format('D MMMM YYYY')
