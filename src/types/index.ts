export interface User {
  id: string
  username: string
  phone?: string
  email?: string
  avatar?: string
}

export interface Country {
  id: string
  name: string
  continentId: string
  // 颜色配置，用于色带显示
  color?: string
  // 是否已灭亡的国家/帝国（true=已灭亡，显示†标记）
  isDefunct?: boolean
}

export interface Continent {
  id: string
  name: string
  countries: Country[]
}

// 朝代信息
export interface Dynasty {
  id: string
  name: string
  countryId: string
  startYear: number  // 起始年份（负数为公元前）
  endYear: number    // 结束年份
  color: string      // 朝代背景色
  summary: string    // 简要信息
}

// 事件分类
export interface EventCategory {
  id: string
  name: string
  nameEn: string
  icon: string
  color: string      // 分类颜色
  bgColor: string    // 背景色
}

export interface HistoryEvent {
  id: string
  year: number
  summary: string
  detail: string
  countryId: string
  continentId: string
  categoryId: string    // 事件分类ID
  dynastyId?: string     // 朝代ID（可选，用于中国等有朝代的国家）
}

export interface SelectedContinent {
  continentId: string
  continentName: string
  countries: SelectedCountry[]
}

export interface SelectedCountry {
  countryId: string
  countryName: string
  continentId: string
  color?: string
  isDefunct?: boolean
}

export interface Bookmark {
  eventId: string
  timestamp: number
}

export type Orientation = 'landscape' | 'portrait'

export type LoginType = 'phone' | 'email'

export interface LoginPayload {
  type: LoginType
  account: string
  password: string
}
