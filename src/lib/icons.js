import * as LucideIcons from 'lucide'

const iconNames = {
  skull: 'Skull',
  flame: 'Flame',
  smile: 'Smile',
  barChart: 'BarChart3',
  smartphone: 'Smartphone',
  lock: 'Lock',
  star: 'Star',
  film: 'Clapperboard',
  bookOpen: 'BookOpen',
  leaf: 'Leaf',
  clipboardCopy: 'ClipboardCopy',
  twitter: 'Twitter',
  checkCircle: 'CheckCircle',
  xCircle: 'XCircle',
  alertTriangle: 'AlertTriangle',
  thumbsDown: 'ThumbsDown',
  bomb: 'Bomb',
  messageCircle: 'MessageCircle',
  indianRupee: 'IndianRupee',
  clock: 'Clock',
  dollarSign: 'DollarSign',
  trendingUp: 'TrendingUp',
  brain: 'Brain',
  heart: 'Heart',
  users: 'Users',
  coffee: 'Coffee',
  dumbbell: 'Dumbbell',
  moon: 'Moon',
  zap: 'Zap',
  target: 'Target',
  briefcase: 'Briefcase',
  robot: 'Robot',
  puzzle: 'Puzzle',
  heartHandshake: 'Handshake',
  alarmClock: 'AlarmClock',
  sun: 'Sun',
  copy: 'Copy',
  share2: 'Share2',
  check: 'Check',
  sword: 'Sword',
  headphones: 'Headphones',
  bookMarked: 'BookMarked',
  house: 'House',
  arrowRight: 'ArrowRight',
  menu: 'Menu',
  x: 'X',
  search: 'Search',
  info: 'Info',
  music: 'Music',
  video: 'Video',
  gamepad: 'Gamepad',
  gem: 'Gem',
  waves: 'Waves',
  cross: 'Cross',
  bed: 'Bed',
  watch: 'Watch',
  egg: 'Egg',
  coffee2: 'Coffee',
  treePine: 'TreePine',
  gift: 'Gift',
  partyPopper: 'PartyPopper',
  mask: 'Mask',
}

function attrsToString(attrs) {
  if (!attrs) return ''
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ')
}

function renderIconNode(node) {
  const [tag, attrs, ...children] = node
  if (tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon' || tag === 'ellipse') {
    return `<${tag} ${attrsToString(attrs)}/>`
  }
  if (children && children.length > 0) {
    return `<${tag} ${attrsToString(attrs)}>${children.map(c => renderIconNode(c)).join('')}</${tag}>`
  }
  return `<${tag} ${attrsToString(attrs)}/>`
}

export function icon(name, size = 16, strokeWidth = 2) {
  const lucideName = iconNames[name]
  if (!lucideName || !LucideIcons[lucideName]) {
    return ''
  }
  const iconData = LucideIcons[lucideName]
  const children = iconData.map(node => renderIconNode(node)).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${lucideName.toLowerCase()}">${children}</svg>`
}
