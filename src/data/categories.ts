import type { EventCategory } from '../types'

export const eventCategories: EventCategory[] = [
  { id: 'dynasty', name: '王朝兴衰', nameEn: 'Dynasty', icon: 'crown', color: '#FFD700', bgColor: 'rgba(255,215,0,0.15)' },
  { id: 'war', name: '战争军事', nameEn: 'War', icon: 'sword', color: '#DC143C', bgColor: 'rgba(220,20,60,0.15)' },
  { id: 'politics', name: '政治变革', nameEn: 'Politics', icon: 'landmark', color: '#4169E1', bgColor: 'rgba(65,105,225,0.15)' },
  { id: 'culture', name: '文化科技', nameEn: 'Culture', icon: 'book', color: '#9370DB', bgColor: 'rgba(147,112,219,0.15)' },
  { id: 'economy', name: '经济贸易', nameEn: 'Economy', icon: 'coins', color: '#20B2AA', bgColor: 'rgba(32,178,170,0.15)' },
  { id: 'rebellion', name: '农民起义', nameEn: 'Rebellion', icon: 'flame', color: '#FF6347', bgColor: 'rgba(255,99,71,0.15)' },
  { id: 'disaster', name: '灾荒瘟疫', nameEn: 'Disaster', icon: 'alert', color: '#8B4513', bgColor: 'rgba(139,69,19,0.15)' },
  { id: 'religion', name: '宗教信仰', nameEn: 'Religion', icon: 'pray', color: '#FF8C00', bgColor: 'rgba(255,140,0,0.15)' },
  { id: 'exploration', name: '探索发现', nameEn: 'Exploration', color: '#00CED1', bgColor: 'rgba(0,206,209,0.15)' },
  { id: 'independence', name: '独立革命', nameEn: 'Independence', color: '#32CD32', bgColor: 'rgba(50,205,50,0.15)' },
]
