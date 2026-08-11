import { Anime } from '../../types';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="group relative flex flex-col gap-3 card-hover bg-[#16161a] rounded-2xl overflow-hidden border border-white/5">
      <Link to={`/anime/${anime.slug}`} className="relative aspect-[2/3] w-full overflow-hidden block">
        <img
          src={anime.poster}
          alt={anime.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] to-transparent opacity-60"></div>
        
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 text-xs font-medium text-yellow-400 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          <span>{anime.rating}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-purple-600 p-3 shadow-lg shadow-purple-500/25 flex items-center justify-center">
             <Play className="h-6 w-6 text-white ml-1" />
          </div>
        </div>
      </Link>
      
      <div className="flex flex-col gap-1 p-3 pt-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded border border-white/5">
            {anime.year}
          </span>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/10">
            {anime.status}
          </span>
        </div>
        <Link to={`/anime/${anime.slug}`} className="line-clamp-1 font-semibold text-white hover:text-purple-400 transition-colors">
          {anime.title}
        </Link>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Link to={`/anime/${anime.slug}/episode/${anime.latestEpisode}`} className="hover:text-purple-400 text-purple-400/90 font-medium transition-colors">
            Tập {anime.latestEpisode}
          </Link>
          <span className="line-clamp-1">{anime.genres[0]}</span>
        </div>
      </div>
    </div>
  );
}
