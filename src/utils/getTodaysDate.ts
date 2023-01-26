import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const getTodaysDate = () => dayjs(Date.now()).locale('ru').format('D MMMM YYYY')
