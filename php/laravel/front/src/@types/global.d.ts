/**
 * @description
 * /api/board | messages.* + user.name
 */
interface Message {
  id: number
  message: string
  user_name: string
  user_id: number
  tenant_id: number
  created_at: string
  updated_at: string
  deleted_at: string
}
