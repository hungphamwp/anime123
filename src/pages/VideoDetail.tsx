import Layout from '../components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { Play, MessageSquare, ThumbsUp, Share2, Clock, Eye } from 'lucide-react';
import { mockVideos } from '../data/mock';
import VideoCard from '../components/ui/VideoCard';

export default function VideoDetail() {
  const { slug } = useParams();
  const video = mockVideos.find(v => v.slug === slug) || mockVideos[0];
  
  const relatedVideos = [...mockVideos, ...mockVideos.map(v => ({...v, id: v.id + '-2'}))].slice(0, 4);

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content (Player & Info) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Video Player Mock */}
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/5 group">
              {/* Fake Video Content */}
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="h-16 w-16 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-500 hover:scale-110 transition-all shadow-lg shadow-purple-500/30">
                   <Play className="h-8 w-8 ml-1 fill-current" />
                 </button>
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white mb-4">{video.title}</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://i.pravatar.cc/150?u=author" alt="Author avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{video.author}</h3>
                    <p className="text-sm text-slate-400">1.2M Đăng ký</p>
                  </div>
                  <button className="ml-4 bg-white text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
                    Đăng ký
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#16161a] rounded-full border border-white/5 overflow-hidden">
                    <button className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 transition-colors border-r border-white/5">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm font-medium">12N</span>
                    </button>
                    <button className="px-4 py-2 text-white hover:bg-white/10 transition-colors">
                      <ThumbsUp className="h-4 w-4 rotate-180" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 bg-[#16161a] border border-white/5 px-4 py-2 rounded-full text-white hover:bg-white/10 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Chia sẻ</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-[#16161a] rounded-2xl p-4 border border-white/5">
                 <div className="flex items-center gap-4 text-sm font-medium text-slate-300 mb-2">
                   <span className="flex items-center gap-1"><Eye className="h-4 w-4" /> {video.views} lượt xem</span>
                   <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {video.date}</span>
                 </div>
                 <p className="text-slate-300 text-sm whitespace-pre-wrap">{video.description}</p>
              </div>
            </div>
            
            {/* Comments */}
            <div className="mt-4">
               <div className="flex items-center gap-2 mb-6">
                 <MessageSquare className="h-6 w-6 text-purple-400" />
                 <h3 className="text-xl font-bold text-white">256 Bình luận</h3>
               </div>
               
               <div className="flex items-start gap-4 mb-8">
                 <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://i.pravatar.cc/150?u=current_user" alt="Your avatar" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                   <textarea placeholder="Viết bình luận..." className="w-full bg-transparent border-b border-white/5 py-2 text-white focus:border-purple-500 focus:outline-none resize-none h-10 transition-colors"></textarea>
                 </div>
               </div>

               <div className="flex flex-col gap-6">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={`https://i.pravatar.cc/150?u=user${i}`} alt={`User avatar`} className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                         <span className="font-bold text-sm text-white">@user_{i}99</span>
                         <span className="text-xs text-slate-400">2 ngày trước</span>
                       </div>
                       <p className="text-sm text-slate-200">Phân tích quá chuẩn! Không ngờ tới chi tiết này luôn.</p>
                       <div className="flex items-center gap-4 mt-2">
                         <button className="flex items-center gap-1 text-slate-400 hover:text-white text-xs"><ThumbsUp className="h-3 w-3" /> 12</button>
                         <button className="text-slate-400 hover:text-white text-xs font-medium">Phản hồi</button>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
          </div>

          {/* Sidebar / Related Videos */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-4">
             <h3 className="font-bold text-white mb-2">Video đề xuất</h3>
             <div className="flex flex-col gap-3">
               {relatedVideos.map(rv => (
                 <Link key={rv.id} to={`/video/${rv.slug}`} className="group flex gap-3">
                    <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                      <img src={rv.thumbnail} alt={rv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-[10px] text-white rounded">
                        {rv.duration}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
                        {rv.title}
                      </h4>
                      <span className="text-xs text-slate-400 mt-1">{rv.author}</span>
                      <span className="text-xs text-slate-400 mt-1">{rv.views} lượt xem • {rv.date}</span>
                    </div>
                 </Link>
               ))}
             </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
