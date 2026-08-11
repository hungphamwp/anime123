import { Video } from '../../types';
import { Link } from 'react-router-dom';
import { PlayCircle, Clock } from 'lucide-react';

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link to={`/video/${video.slug}`} className="group flex flex-col gap-2 card-hover bg-[#16161a] rounded-2xl overflow-hidden border border-white/5 p-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="h-10 w-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-1 py-2">
        <h3 className="line-clamp-2 text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center text-xs text-slate-400 mt-1">
          <span>{video.views} lượt xem</span>
          <span className="mx-2">•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {video.date}
          </span>
        </div>
      </div>
    </Link>
  );
}
