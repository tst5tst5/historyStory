import type { DocumentCategory, HistoryEvent } from '../types'
import { sapiensCategories, sapiensEvents } from './sapiens'
import { documentCategories as springAutumnCategories, springAutumnEvents } from './springAutumn'

// 合并所有文档分类
export const documentCategories: DocumentCategory[] = [
  ...springAutumnCategories,
  ...sapiensCategories,
]

// 合并所有文档事件
export const documentEvents: HistoryEvent[] = [
  ...springAutumnEvents,
  ...sapiensEvents,
]

// 重新导出单个模块
export { springAutumnEvents } from './springAutumn'
export { sapiensCategories, sapiensEvents } from './sapiens'
