export interface Game {
  id: string;
  name: string;
  description: string;
  genre: string[];
  platform: string[];
  image_url: string;
  rating: number;
  release_year: number;
  developer?: string;
  publisher?: string;
}

export interface Review {
  id: string;
  game_id: string;
  user_id: string;
  username: string;
  comment: string;
  rating: number;
  created_at: string;
}

export interface UserProfile {
  uid: string;
  username: string;
  email: string;
  favorites: string[]; // Array of game IDs
}
