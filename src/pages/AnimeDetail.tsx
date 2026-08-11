import Layout from '../components/layout/Layout';
import { mockAnimes, mockEpisodes } from '../data/mock';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Play, Heart, Share2, Film } from 'lucide-react';

export default function AnimeDetail() {
  const { slug } = useParams();
  const anime = mockAnimes.find(a => a.slug === slug) || mockAnimes[0];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Banner */}
        <div className="absolute inset-0 h-[40vh] md:h-[60vh] w-full overflow-hidden">
          <img src={anime.banner} alt={anime.title} className="h-full w-full object-cover opacity-50 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 pt-12 md:pt-32 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="flex-shrink-0 mx-auto md:mx-0 w-64 md:w-72 lg:w-80 group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]">
                <img src={anime.poster} alt={anime.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-emerald-500 px-3 py-1 text-sm font-bold text-white rounded-lg shadow-lg uppercase">
                  {anime.status}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col pt-4 md:pt-12">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{anime.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-6">
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-white">{anime.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Film className="h-4 w-4 text-slate-400" />
                  <span>{anime.studio}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>{anime.year}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genres.map(genre => (
                  <span key={genre} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium">
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed max-w-3xl">
                {anime.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Link to={`/anime/${anime.slug}/episode/1`} className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-3.5 font-bold text-white transition-all hover:bg-emerald-700 hover:scale-105 shadow-lg shadow-emerald-600/20">
                  <Play className="h-5 w-5 fill-current" />
                  Xem Anime
                </Link>
                
                <div className="flex gap-2 ml-auto">
                  <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16161a] border border-white/5 text-slate-300 hover:text-pink-500 hover:bg-white/10 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16161a] border border-white/5 text-slate-300 hover:text-blue-500 hover:bg-white/10 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-8">
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold text-white">Danh sách Tập</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockEpisodes.map(episode => (
            <Link key={episode.id} to={`/anime/${anime.slug}/episode/${episode.number}`} className="flex items-center justify-between bg-[#16161a] p-4 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0">
                   <img src={anime.banner} alt={episode.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                     <Play className="h-6 w-6 text-white opacity-80 group-hover:opacity-100" />
                   </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {episode.title}
                  </span>
                  <span className="text-xs text-slate-400">
                    {episode.date} • {episode.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
