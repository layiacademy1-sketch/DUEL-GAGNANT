import { Partner, Event, Sponsor } from './types';

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Red Bull', logo: 'https://picsum.photos/seed/redbull/200/100' },
  { id: '2', name: 'Nike', logo: 'https://picsum.photos/seed/nike/200/100' },
  { id: '3', name: 'Sony', logo: 'https://picsum.photos/seed/sony/200/100' },
  { id: '4', name: 'Adidas', logo: 'https://picsum.photos/seed/adidas/200/100' },
  { id: '5', name: 'Monster Energy', logo: 'https://picsum.photos/seed/monster/200/100' },
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Le Duel de Paris',
    date: '15 Juin 2026',
    location: 'Paris, France',
    image: 'https://picsum.photos/seed/paris-duel/800/600',
    description: 'Une compétition épique au cœur de la capitale. 100 participants, un seul gagnant.',
  },
  {
    id: '2',
    title: 'L\'Éclat de Lyon',
    date: '12 Juillet 2026',
    location: 'Lyon, France',
    image: 'https://picsum.photos/seed/lyon-duel/800/600',
    description: 'Défiez vos limites dans la ville des lumières. Stratégie et force seront vos alliées.',
  },
  {
    id: '3',
    title: 'Le Choc de Marseille',
    date: '05 Août 2026',
    location: 'Marseille, France',
    image: 'https://picsum.photos/seed/marseille-duel/800/600',
    description: 'Un duel intense sous le soleil de la Méditerranée. Préparez-vous à l\'adrénaline.',
  },
];

export const SPONSORS: Sponsor[] = [
  { id: '1', name: 'Rolex', logo: 'https://picsum.photos/seed/rolex/200/100' },
  { id: '2', name: 'Mercedes-Benz', logo: 'https://picsum.photos/seed/mercedes/200/100' },
  { id: '3', name: 'Louis Vuitton', logo: 'https://picsum.photos/seed/lv/200/100' },
  { id: '4', name: 'Hublot', logo: 'https://picsum.photos/seed/hublot/200/100' },
];
