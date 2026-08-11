import Layout from '../components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { Play, Settings, Maximize, MessageSquare } from 'lucide-react';
import { mockAnimes, mockEpisodes } from '../data/mock';

export default function AnimeWatch() {
  const { slug, episode } = useParams();
  const anime = mockAnimes.find(a => a.slug === slug) || mockAnimes[0];
  const currentEp = mockEpisodes.find(e => e.number.toString() === episode) || mockEpisodes[0];

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content (Player & Info) */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Breadcrumb / Title info could go here */}

            {/* Video Player Mock */}
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/5 group">
              {/* Fake Video Content */}
              <img src={anime.banner} alt="Video content" className="w-full h-full object-cover opacity-60 blur-sm" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="h-16 w-16 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-500 hover:scale-110 transition-all shadow-lg shadow-emerald-500/30">
                   <Play className="h-8 w-8 ml-1 fill-current" />
                 </button>
              </div>

              {/* Fake Controls */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-1 bg-white/20 rounded-full mb-4">
                  <div className="w-1/3 h-full bg-emerald-500 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-white text-sm">
                  <div className="flex items-center gap-4">
                    <Play className="h-5 w-5 fill-current" />
                    <span>08:24 / 24:00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Settings className="h-5 w-5" />
                    <Maximize className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">{anime.title} - {currentEp.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-400 border-b border-white/5 pb-4 mb-4">
                <span>{currentEp.date}</span>
                <span>•</span>
                <span>120.5K lượt xem</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Nội dung tập phim: Hành trình tiếp theo của các nhân vật chính. Đây là nội dung giả lập cho phiên bản demo giao diện.
              </p>
            </div>
          </div>

          {/* Sidebar / Episodes List */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-6">
            <div className="bg-[#16161a] rounded-2xl border border-white/5 overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 border-b border-white/5 bg-[#16161a]">
                <h3 className="font-bold text-white">Danh sách Tập</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
                {mockEpisodes.map(ep => {
                  const isActive = ep.number.toString() === episode;
                  return (
                    <Link 
                      key={ep.id} 
                      to={`/anime/${anime.slug}/episode/${ep.number}`}
                      className={`flex items-center gap-4 p-2 rounded-lg transition-colors ${isActive ? 'bg-emerald-500/10 border border-emerald-500/30' : 'hover:bg-white/10 border border-transparent'}`}
                    >
                      <div className="relative h-14 w-20 rounded bg-slate-800 flex-shrink-0 overflow-hidden">
                        <img src={anime.banner} alt={ep.title} className="w-full h-full object-cover opacity-70" />
                        {isActive && (
                          <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm font-semibold line-clamp-1 ${isActive ? 'text-emerald-400' : 'text-slate-200'}`}>
                          {ep.title}
                        </span>
                        <span className="text-xs text-slate-500">{ep.duration}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Comments Mock */}
            <div className="bg-[#16161a] rounded-2xl border border-white/5 p-4">
               <div className="flex items-center gap-2 mb-4">
                 <MessageSquare className="h-5 w-5 text-emerald-400" />
                 <h3 className="font-bold text-white">Bình luận (128)</h3>
               </div>
               
               <div className="flex items-start gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://i.pravatar.cc/150?u=current_user_anime" alt="Your avatar" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                   <textarea placeholder="Thêm bình luận..." className="w-full bg-[#050507] border border-white/5 rounded-lg p-3 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none h-20"></textarea>
                   <div className="flex justify-end mt-2">
                     <button className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-emerald-700">Gửi</button>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col gap-4">
                 {[1,2,3].map(i => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <img src={`https://i.pravatar.cc/150?u=anime_user${i}`} alt={`User avatar`} className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                         <span className="font-medium text-sm text-white">User{i}99</span>
                         <span className="text-xs text-slate-500">2 giờ trước</span>
                       </div>
                       <p className="text-sm text-slate-300">Tập này quá hay! Chờ đợi phần tiếp theo.</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
