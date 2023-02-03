import { Timestamp } from 'firebase/firestore'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { useDateFormat } from '@hooks/useDateFormat'

export const convertToDate = (date: Timestamp): string => {
	const { dateformat } = useDateFormat()
	return dayjs(date?.toDate()).locale('ru').format(dateformat)
}
