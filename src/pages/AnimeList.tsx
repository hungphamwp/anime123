import Layout from '../components/layout/Layout';
import AnimeCard from '../components/ui/AnimeCard';
import { mockAnimes } from '../data/mock';
import { Filter, Search } from 'lucide-react';

export default function AnimeList() {
  const allAnimes = [...mockAnimes, ...mockAnimes.map(a => ({...a, id: a.id + '-2'})), ...mockAnimes.map(a => ({...a, id: a.id + '-3'}))];

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Anime</h1>
          <p className="text-slate-400">Những bộ Anime đình đám nhất mùa này.</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {['Tất cả', 'Airing', 'Completed', 'Upcoming', 'Movies'].map((status, i) => (
              <button 
                key={status}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-[#16161a] text-slate-300 hover:bg-white/10'}`}
              >
                {status}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Tìm anime..." 
                className="w-full rounded-full bg-[#16161a] py-2 pl-9 pr-4 text-sm text-white placeholder-slate-400 outline-none border border-white/5 focus:border-emerald-500 transition-colors"
              />
            </div>
            <button className="flex items-center justify-center rounded-full bg-[#16161a] p-2 text-slate-300 border border-white/5 hover:bg-white/10">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
          {allAnimes.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {[1, 2, 3].map(page => (
              <button key={page} className={`flex h-10 w-10 items-center justify-center rounded-lg font-medium ${page === 1 ? 'bg-emerald-500 text-white' : 'bg-[#16161a] text-slate-400 hover:bg-white/10'}`}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
