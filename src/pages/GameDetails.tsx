import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Monitor, User, Heart, Share2, ChevronLeft, Gamepad2 } from 'lucide-react';
import { MOCK_GAMES } from '../mockData';
import { cn } from '../lib/utils';

export default function GameDetails() {
  const { id } = useParams();
  const game = MOCK_GAMES.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Game not found</h2>
        <Link to="/games" className="mt-4 text-indigo-400 hover:underline">Back to games</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <Link to="/games" className="mb-8 flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
        <ChevronLeft className="h-4 w-4" />
        Back to Games
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left: Image & Quick Stats */}
        <div className="space-y-8">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 shadow-2xl">
            <img
              src={game.image_url}
              alt={game.name}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-zinc-900 p-4 ring-1 ring-white/10">
              <div className="mb-1 flex items-center gap-2 text-zinc-500">
                <Star className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Rating</span>
              </div>
              <p className="text-xl font-black text-white">{game.rating} / 5.0</p>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-4 ring-1 ring-white/10">
              <div className="mb-1 flex items-center gap-2 text-zinc-500">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Released</span>
              </div>
              <p className="text-xl font-black text-white">{game.release_year}</p>
            </div>
          </div>
        </div>

        {/* Right: Info & Actions */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {game.genre.map((g) => (
                <span key={g} className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-bold text-indigo-400 ring-1 ring-indigo-600/20">
                  {g}
                </span>
              ))}
            </div>
            <h1 className="mb-4 text-5xl font-black tracking-tighter text-white md:text-6xl uppercase">
              {game.name}
            </h1>
            <div className="flex items-center gap-6 text-zinc-400">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="text-sm font-medium">{game.platform.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">{game.developer}</span>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/5" />

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">About this game</h3>
            <p className="text-lg leading-relaxed text-zinc-400">
              {game.description}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-4">
            <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-black text-white transition-all hover:bg-indigo-500 hover:scale-[1.02] active:scale-95">
              <Gamepad2 className="h-6 w-6" />
              PLAY NOW
            </button>
            <button className="flex items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-lg font-black text-white ring-1 ring-white/10 transition-all hover:bg-zinc-800 hover:ring-white/20">
              <Heart className="h-6 w-6" />
            </button>
            <button className="flex items-center justify-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-lg font-black text-white ring-1 ring-white/10 transition-all hover:bg-zinc-800 hover:ring-white/20">
              <Share2 className="h-6 w-6" />
            </button>
          </div>

          <div className="rounded-2xl bg-indigo-600/5 p-6 ring-1 ring-indigo-600/20">
            <h4 className="mb-2 font-bold text-indigo-400 uppercase tracking-wider text-xs">Publisher</h4>
            <p className="text-white font-medium">{game.publisher}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase">Reviews</h2>
          <button className="flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-2 text-sm font-bold text-indigo-400 ring-1 ring-indigo-600/20 hover:bg-indigo-600/20 transition-all">
            Write a review
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { user: 'AlexGamer', rating: 5, comment: 'Absolutely incredible experience. The visuals and gameplay are top-notch!', date: '2 days ago' },
            { user: 'RetroKing', rating: 4, comment: 'A solid entry in the series. Some minor bugs but overall a great time.', date: '1 week ago' },
            { user: 'SarahPlayz', rating: 5, comment: 'I couldn\'t put it down! The story is so engaging and the world is beautiful.', date: '3 weeks ago' }
          ].map((review, i) => (
            <div key={i} className="rounded-3xl bg-zinc-900 p-6 ring-1 ring-white/10">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span className="font-bold text-white">{review.user}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs font-bold">{review.rating}</span>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                "{review.comment}"
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                {review.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
