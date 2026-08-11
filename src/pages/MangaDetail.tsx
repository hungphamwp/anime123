import Layout from '../components/layout/Layout';
import { mockMangas, mockChapters } from '../data/mock';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, BookOpen, Heart, Share2, Info } from 'lucide-react';

export default function MangaDetail() {
  const { slug } = useParams();
  const manga = mockMangas.find(m => m.slug === slug) || mockMangas[0];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Banner */}
        <div className="absolute inset-0 h-[40vh] md:h-[50vh] w-full overflow-hidden">
          <img src={manga.cover} alt={manga.title} className="h-full w-full object-cover blur-md opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 pt-12 md:pt-32 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Cover */}
            <div className="flex-shrink-0 mx-auto md:mx-0 w-64 md:w-72 lg:w-80 group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]">
                <img src={manga.cover} alt={manga.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 text-sm font-bold text-white rounded-lg shadow-lg">
                  {manga.status}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col pt-4 md:pt-12">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{manga.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-300 mb-6">
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold text-white">{manga.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Info className="h-4 w-4 text-slate-400" />
                  <span>{manga.author}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#16161a] px-3 py-1.5 rounded-full border border-white/5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>{manga.updatedAt}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {manga.genres.map(genre => (
                  <span key={genre} className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-sm font-medium">
                    {genre}
                  </span>
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed max-w-3xl">
                {manga.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <Link to={`/manga/${manga.slug}/chapter/${manga.latestChapter}`} className="flex items-center gap-2 rounded-2xl bg-purple-600 px-8 py-3.5 font-bold text-white transition-all hover:bg-purple-700 hover:scale-105 shadow-lg shadow-purple-600/20">
                  <BookOpen className="h-5 w-5" />
                  Đọc Chapter mới nhất
                </Link>
                <Link to={`/manga/${manga.slug}/chapter/1`} className="flex items-center gap-2 rounded-2xl bg-[#16161a] border border-white/5 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
                  Đọc từ đầu
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

      {/* Chapters Section */}
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold text-white">Danh sách Chapter</h2>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="text" placeholder="Tìm chapter..." className="w-full md:w-48 bg-[#16161a] border border-white/5 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500" />
            <select className="bg-[#16161a] border border-white/5 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 appearance-none">
              <option>Mới nhất</option>
              <option>Cũ nhất</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockChapters.map(chapter => (
            <Link key={chapter.id} to={`/manga/${manga.slug}/chapter/${chapter.number}`} className="flex items-center justify-between bg-[#16161a] p-4 rounded-2xl border border-white/5 hover:border-purple-500/50 hover:bg-white/5 transition-all group">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {chapter.title}
                </span>
                <span className="text-xs text-slate-400">
                  {chapter.date} • {chapter.views} lượt đọc
                </span>
              </div>
              <div className="bg-[#050507] text-slate-300 rounded-lg px-4 py-2 text-sm font-medium border border-white/5 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors">
                Đọc
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-[#16161a] border border-white/5 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
            Xem thêm
          </button>
        </div>
      </div>
    </Layout>
  );
}
