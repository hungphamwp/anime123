import { Manga } from '../../types';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

export default function MangaCard({ manga }: { manga: Manga }) {
  return (
    <div className="group relative flex flex-col gap-3 card-hover bg-[#16161a] rounded-2xl overflow-hidden border border-white/5">
      <Link to={`/manga/${manga.slug}`} className="relative aspect-[2/3] w-full overflow-hidden block">
        <img
          src={manga.cover}
          alt={manga.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] to-transparent opacity-60"></div>
        
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 text-xs font-medium text-yellow-400 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          <span>{manga.rating}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-purple-600 px-4 py-2 font-medium text-white shadow-lg shadow-purple-500/25">Đọc ngay</span>
        </div>
      </Link>
      
      <div className="flex flex-col gap-1 p-3 pt-0">
        <div className="flex flex-wrap gap-1 mb-1">
          {manga.genres.slice(0, 2).map((genre) => (
            <span key={genre} className="text-[10px] uppercase font-bold text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
              {genre}
            </span>
          ))}
        </div>
        <Link to={`/manga/${manga.slug}`} className="line-clamp-1 font-semibold text-white hover:text-purple-400 transition-colors">
          {manga.title}
        </Link>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Link to={`/manga/${manga.slug}/chapter/${manga.latestChapter}`} className="hover:text-purple-400 transition-colors">
            Ch. {manga.latestChapter}
          </Link>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {manga.updatedAt}
          </span>
        </div>
      </div>
    </div>
  );
}
