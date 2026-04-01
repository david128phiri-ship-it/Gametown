import { Heart, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const favoritesCount = 0; // Will be dynamic with Firebase

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-2 text-4xl font-black tracking-tighter text-white uppercase">My Favorites</h1>
        <p className="text-zinc-400">Your personal collection of must-play games.</p>
      </div>

      {favoritesCount > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Favorites will be listed here */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="mb-6 rounded-full bg-zinc-900 p-10 ring-1 ring-white/10">
            <Heart className="h-16 w-16 text-zinc-800" />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">Your list is empty</h3>
          <p className="mb-8 max-w-md text-zinc-500">
            Start exploring our collection and click the heart icon on any game to save it here for later.
          </p>
          <Link
            to="/games"
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-500 hover:scale-105"
          >
            <Gamepad2 className="h-5 w-5" />
            Explore Games
          </Link>
        </div>
      )}
    </div>
  );
}
