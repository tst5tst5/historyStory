import type { User } from '../types'

export interface Account {
  phone?: string
  email?: string
  password: string
  user: User
}

export const accounts: Account[] = [
  {
    phone: '13800138000',
    password: 'history2024',
    user: {
      id: 'u1',
      username: '历史学者',
      phone: '13800138000',
      avatar: '',
    },
  },
  {
    email: 'learner@history.com',
    password: 'history2024',
    user: {
      id: 'u2',
      username: '探索者',
      email: 'learner@history.com',
      avatar: '',
    },
  },
]
