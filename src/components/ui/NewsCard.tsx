import { News } from '../../types';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

export default function NewsCard({ news }: { news: News }) {
  return (
    <Link to={`/news/${news.slug}`} className="group flex flex-col gap-3 card-hover bg-[#16161a] rounded-2xl overflow-hidden border border-white/5">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 text-[10px] font-bold text-white uppercase rounded">
          {news.category}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 pt-1">
        <h3 className="line-clamp-2 text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
          {news.title}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-400">
          {news.excerpt}
        </p>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium text-slate-300">{news.author}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {news.date}
          </span>
        </div>
      </div>
    </Link>
  );
}
