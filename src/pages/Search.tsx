import Layout from '../components/layout/Layout';
import { useLocation } from 'react-router-dom';
import MangaCard from '../components/ui/MangaCard';
import AnimeCard from '../components/ui/AnimeCard';
import { mockMangas, mockAnimes } from '../data/mock';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q') || '';

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Kết quả tìm kiếm</h1>
          <p className="text-slate-400">
            Tìm kiếm cho từ khóa: <span className="font-bold text-white">"{q || 'one piece'}"</span>
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
           <div className="relative w-full max-w-2xl">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                defaultValue={q}
                placeholder="Nhập từ khóa tìm kiếm..." 
                className="w-full rounded-full bg-[#16161a] py-4 pl-12 pr-4 text-white placeholder-slate-400 outline-none border border-white/5 focus:border-purple-500 transition-colors text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
                Tìm
              </button>
            </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar border-b border-white/5">
          {['Tất cả', 'Manga', 'Anime', 'Tin tức', 'Video'].map((tab, i) => (
            <button 
              key={tab}
              className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors border-b-2 ${i === 0 ? 'border-purple-500 text-purple-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-3">Manga</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
            {mockMangas.slice(0, 5).map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-3">Anime</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
             {mockAnimes.slice(0, 5).map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
