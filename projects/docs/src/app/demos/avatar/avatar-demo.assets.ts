/** Local portraits served from `projects/docs/public/images/avatars/`. */
export const AVATAR_DEMO_IMAGES = {
  man: '/images/avatars/avatar-man-glasses-salt-pepper.png',
  womanGrey: '/images/avatars/avatar-woman-grey-hair-smiling.png',
  girl: '/images/avatars/avatar-girl-smiling-blue-dress.png',
  boy: '/images/avatars/avatar-boy-smiling-blue-shirt.png',
  womanAuburn: '/images/avatars/avatar-woman-glasses-auburn-hair.png',
  womanOrange: '/images/avatars/avatar-woman-orange-jacket.png',
} as const;

/** Local gradients served from `projects/docs/public/images/gradients/`. */
export const AVATAR_DEMO_GRADIENTS = {
  blue: '/images/gradients/gradient-blue-cyan.png',
  green: '/images/gradients/gradient-cyan-blue-purple.png',
  purple: '/images/gradients/gradient-purple-violet.png',
  red: '/images/gradients/gradient-pink-magenta.png',
  orange: '/images/gradients/gradient-warm-orange-yellow-red.png',
  warm: '/images/gradients/gradient-warm-orange-yellow-red.png',
  cyanBluePurple: '/images/gradients/gradient-cyan-blue-purple.png',
  pink: '/images/gradients/gradient-pink-magenta.png',
  blueCyan: '/images/gradients/gradient-blue-cyan.png',
  blackBlur: '/images/gradients/gradient-black-blur.png',
} as const;

export const AVATAR_DEMO_PORTRAITS = [
  AVATAR_DEMO_IMAGES.man,
  AVATAR_DEMO_IMAGES.womanGrey,
  AVATAR_DEMO_IMAGES.girl,
  AVATAR_DEMO_IMAGES.boy,
  AVATAR_DEMO_IMAGES.womanAuburn,
] as const;
