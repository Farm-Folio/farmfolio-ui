import { NbMenuItem } from '@nebular/theme';
import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'User',
    icon: 'home-outline',
    children: [
      {
        title: 'Farmer',
        icon: 'home-outline',
        link: '/pages/user',
      }


    ]
  }
];
