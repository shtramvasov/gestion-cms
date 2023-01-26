import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const convertToDate = (date: any) =>
	dayjs(date?.toDate()).locale('ru').format('D MMMM YYYY')
