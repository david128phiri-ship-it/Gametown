import { Link } from 'react-router-dom';
import { LayoutGrid, ChevronRight, Gamepad2, Swords, Map, Trophy, Target, Zap } from 'lucide-react';

const CATEGORIES = [
  { name: 'Action', icon: Swords, color: 'bg-red-500', count: 842 },
  { name: 'RPG', icon: Zap, color: 'bg-purple-500', count: 521 },
  { name: 'Adventure', icon: Map, color: 'bg-green-500', count: 634 },
  { name: 'Sports', icon: Trophy, color: 'bg-blue-500', count: 312 },
  { name: 'Racing', icon: Gamepad2, color: 'bg-orange-500', count: 189 },
  { name: 'Fighting', icon: Target, color: 'bg-pink-500', count: 145 },
];

export default function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-2 text-4xl font-black tracking-tighter text-white uppercase">Categories</h1>
        <p className="text-zinc-400">Explore games by your favorite genres and styles.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            to={`/games?genre=${cat.name}`}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-8 ring-1 ring-white/10 transition-all hover:ring-indigo-500/50"
          >
            <div className={cn(
              "absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 blur-2xl transition-all group-hover:opacity-20",
              cat.color
            )} />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className={cn("rounded-2xl p-4 ring-1 ring-white/10 transition-transform group-hover:scale-110", cat.color + "/10")}>
                  <cat.icon className={cn("h-8 w-8", cat.color.replace('bg-', 'text-'))} />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase">{cat.name}</h3>
                  <p className="text-sm font-medium text-zinc-500">{cat.count} Games</p>
                </div>
              </div>
              <ChevronRight className="h-6 w-6 text-zinc-700 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { cn } from '../lib/utils';
