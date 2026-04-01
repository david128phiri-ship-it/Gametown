import { Link } from 'react-router-dom';
import { Star, Gamepad2 } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/game/${game.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:ring-white/20"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={game.image_url}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      <div className="absolute bottom-0 p-4 w-full">
        <div className="flex items-center gap-2 mb-1">
          <span className="rounded bg-indigo-600/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-400 ring-1 ring-inset ring-indigo-600/30">
            {game.platform[0]}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-medium">{game.rating}</span>
          </div>
        </div>
        <h3 className="line-clamp-1 font-bold text-white group-hover:text-indigo-400 transition-colors">
          {game.name}
        </h3>
        <p className="text-xs text-zinc-400">{game.release_year}</p>
      </div>
    </Link>
  );
}
