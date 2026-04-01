import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { MOCK_GAMES } from '../mockData';
import GameCard from '../components/GameCard';

export default function Games() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const genreFromUrl = searchParams.get('genre') || 'All';

  const [searchQuery, setSearchQuery] = React.useState(queryFromUrl);
  const [selectedGenre, setSelectedGenre] = React.useState(genreFromUrl);

  // Sync state with URL params
  React.useEffect(() => {
    setSearchQuery(queryFromUrl);
  }, [queryFromUrl]);

  React.useEffect(() => {
    setSelectedGenre(genreFromUrl);
  }, [genreFromUrl]);

  const genres = ['All', 'Action', 'RPG', 'Adventure', 'Sports', 'Racing', 'Fighting'];

  const filteredGames = MOCK_GAMES.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || game.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    setSearchParams(prev => {
      if (val) prev.set('q', val);
      else prev.delete('q');
      return prev;
    });
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setSearchParams(prev => {
      if (genre !== 'All') prev.set('genre', genre);
      else prev.delete('genre');
      return prev;
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl flex-1">
          <h1 className="mb-2 text-4xl font-black tracking-tighter text-white uppercase">Browse Games</h1>
          <p className="text-zinc-400">Discover your next favorite game from our collection of 3000+ titles.</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-full bg-zinc-900 px-10 py-2.5 text-sm text-white ring-1 ring-white/10 transition-all focus:outline-none focus:ring-indigo-500 sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-zinc-800">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Genre Filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreChange(genre)}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
              selectedGenre === genre
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                : 'bg-zinc-900 text-zinc-400 ring-1 ring-white/10 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Games Grid */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-zinc-900 p-6 ring-1 ring-white/10">
            <Search className="h-10 w-10 text-zinc-600" />
          </div>
          <h3 className="text-xl font-bold text-white">No games found</h3>
          <p className="text-zinc-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
