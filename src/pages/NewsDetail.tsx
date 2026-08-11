import Layout from '../components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { mockNews } from '../data/mock';
import { Calendar, User, Share2, MessageSquare, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';

export default function NewsDetail() {
  const { slug } = useParams();
  const news = mockNews.find(n => n.slug === slug) || mockNews[0];

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <article className="flex-1 lg:max-w-4xl">
            <div className="mb-8 flex flex-col gap-4">
              <span className="self-start bg-purple-600/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase">
                {news.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {news.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-slate-400 border-b border-white/5 pb-6 mt-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium text-slate-300">{news.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                   <button className="hover:text-blue-500 transition-colors"><Facebook className="h-4 w-4" /></button>
                   <button className="hover:text-sky-500 transition-colors"><Twitter className="h-4 w-4" /></button>
                   <button className="hover:text-white transition-colors"><LinkIcon className="h-4 w-4" /></button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 border border-white/5">
              <img src={news.thumbnail} alt={news.title} className="w-full h-auto object-cover" />
            </div>

            <div className="prose prose-invert prose-violet max-w-none">
              <p className="text-xl text-slate-300 font-medium leading-relaxed mb-8">
                {news.excerpt}
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {news.content} {news.content} {news.content}
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-10 mb-4">Nhận định chuyên sâu</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Đây là nội dung giả lập cho bài viết chi tiết. Trong môi trường thực tế, phần này sẽ được render từ HTML hoặc Markdown từ CMS.
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-4 my-8 text-xl italic text-slate-200">
                "Một trích dẫn ấn tượng từ tác giả hoặc nhân vật liên quan được đặt tại đây."
              </blockquote>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Cảm ơn bạn đã đọc bài viết. Hãy để lại bình luận bên dưới nhé.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <MessageSquare className="h-6 w-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Bình luận (42)</h3>
              </div>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?u=news_user" alt="Your avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <textarea placeholder="Viết bình luận của bạn..." className="w-full bg-[#16161a] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500 focus:outline-none resize-none h-24"></textarea>
                  <div className="flex justify-end mt-3">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700">Đăng bình luận</button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-8">
             <div className="bg-[#16161a] p-6 rounded-2xl border border-white/5">
               <h3 className="text-lg font-bold text-white border-l-4 border-purple-500 pl-3 mb-6">Bài viết liên quan</h3>
               
               <div className="flex flex-col gap-6">
                 {mockNews.map((n) => (
                    <Link key={n.id} to={`/news/${n.slug}`} className="group flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img src={n.thumbnail} alt={n.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors line-clamp-2">
                          {n.title}
                        </h4>
                        <span className="text-xs text-slate-500 mt-2">{n.date}</span>
                      </div>
                    </Link>
                 ))}
               </div>
             </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
