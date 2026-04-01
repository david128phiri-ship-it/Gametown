import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Gamepad2, Star } from 'lucide-react';
import { MOCK_GAMES } from '../mockData';
import GameCard from '../components/GameCard';

export default function Home() {
  const featuredGame = MOCK_GAMES[0];
  const trendingGames = MOCK_GAMES.slice(1, 5);

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10">
        <img
          src={featuredGame.image_url}
          alt={featuredGame.name}
          className="h-full w-full object-cover opacity-40 blur-[2px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/20">
              Featured Game
            </span>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold">{featuredGame.rating}</span>
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl">
            {featuredGame.name}
          </h1>
          <p className="mb-8 text-lg text-zinc-300 line-clamp-3">
            {featuredGame.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/game/${featuredGame.id}`}
              className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-500 hover:scale-105"
            >
              View Details
              <ChevronRight className="h-4 w-4" />
            </Link>
            <button className="flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              Add to Favorites
            </button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-600/10 p-2 ring-1 ring-indigo-600/20">
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Trending Now</h2>
          </div>
          <Link to="/games" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
            See all games
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-600/10 p-2 ring-1 ring-indigo-600/20">
            <Gamepad2 className="h-5 w-5 text-indigo-500" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Popular Genres</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Action', 'RPG', 'Adventure', 'Sports', 'Racing', 'Fighting'].map((genre) => (
            <Link
              key={genre}
              to={`/games?genre=${genre}`}
              className="group relative h-32 overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10 transition-all hover:ring-indigo-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-full items-center justify-center">
                <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-indigo-400 transition-colors">
                  {genre}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
