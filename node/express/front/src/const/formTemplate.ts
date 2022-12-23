import { Message } from '@/components/MessageBoard'
import dayjs from 'dayjs'

export const formValueFormat: Message = {
  message: '',
  // TODO 取得したユーザー名
  user_name: 'Reactユーザー1',
  // TODO 取得したユーザーID
  user_id: 2,
  tenant_id: 1,
  created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}
