import Layout from '../components/layout/Layout';
import VideoCard from '../components/ui/VideoCard';
import { mockVideos } from '../data/mock';
import { Search } from 'lucide-react';

export default function VideoList() {
  const allVideos = [...mockVideos, ...mockVideos.map(v => ({...v, id: v.id + '-2'})), ...mockVideos.map(v => ({...v, id: v.id + '-3'})), ...mockVideos.map(v => ({...v, id: v.id + '-4'}))];

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-black text-white mb-2">Video</h1>
            <p className="text-slate-400">Review, phân tích và các video đặc sắc nhất.</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm video..." 
              className="w-full rounded-full bg-[#16161a] py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none border border-white/5 focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {['Mới nhất', 'Phổ biến', 'Phân tích', 'Review', 'Theory', 'AMV'].map((tab, i) => (
            <button 
              key={tab}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${i === 0 ? 'bg-purple-600 text-white' : 'bg-[#16161a] text-slate-300 hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
          {allVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-[#16161a] border border-white/5 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            Tải thêm Video
          </button>
        </div>
      </div>
    </Layout>
  );
}
