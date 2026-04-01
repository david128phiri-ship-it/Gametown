import type { Game } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: '1',
    name: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    genre: ['Action', 'RPG'],
    platform: ['PS5', 'Xbox Series X', 'PC'],
    image_url: 'https://picsum.photos/seed/eldenring/600/800',
    rating: 4.9,
    release_year: 2022,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco'
  },
  {
    id: '2',
    name: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    genre: ['Action', 'Adventure'],
    platform: ['PS5', 'PS4'],
    image_url: 'https://picsum.photos/seed/godofwar/600/800',
    rating: 4.8,
    release_year: 2022,
    developer: 'Santa Monica Studio',
    publisher: 'Sony Interactive Entertainment'
  },
  {
    id: '3',
    name: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'An epic adventure across the land and skies of Hyrule awaits in the sequel to The Legend of Zelda: Breath of the Wild.',
    genre: ['Adventure', 'Action'],
    platform: ['Nintendo Switch'],
    image_url: 'https://picsum.photos/seed/zelda/600/800',
    rating: 4.9,
    release_year: 2023,
    developer: 'Nintendo EPD',
    publisher: 'Nintendo'
  },
  {
    id: '4',
    name: 'Spider-Man 2',
    description: 'Spider-Men Peter Parker and Miles Morales face the ultimate test of strength inside and outside the mask as they fight to save the city, each other, and the ones they love.',
    genre: ['Action', 'Adventure'],
    platform: ['PS5'],
    image_url: 'https://picsum.photos/seed/spiderman/600/800',
    rating: 4.7,
    release_year: 2023,
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment'
  },
  {
    id: '5',
    name: 'Forza Horizon 5',
    description: 'Your ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
    genre: ['Racing', 'Sports'],
    platform: ['Xbox Series X', 'PC'],
    image_url: 'https://picsum.photos/seed/forza/600/800',
    rating: 4.6,
    release_year: 2021,
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios'
  },
  {
    id: '6',
    name: 'Street Fighter 6',
    description: 'Powered by Capcom’s proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes featuring World Tour, Fighting Ground and Battle Hub.',
    genre: ['Fighting'],
    platform: ['PS5', 'Xbox Series X', 'PC'],
    image_url: 'https://picsum.photos/seed/sf6/600/800',
    rating: 4.5,
    release_year: 2023,
    developer: 'Capcom',
    publisher: 'Capcom'
  }
];
