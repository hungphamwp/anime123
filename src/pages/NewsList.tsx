import Layout from '../components/layout/Layout';
import NewsCard from '../components/ui/NewsCard';
import { mockNews } from '../data/mock';
import { Link } from 'react-router-dom';

export default function NewsList() {
  const allNews = [...mockNews, ...mockNews.map(n => ({...n, id: n.id + '-2'})), ...mockNews.map(n => ({...n, id: n.id + '-3'}))];

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-2">Tin tức Manga/Anime</h1>
          <p className="text-slate-400">Cập nhật những thông tin mới nhất về thế giới Manga và Anime.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           {/* Featured News */}
           <Link to={`/news/${mockNews[0].slug}`} className="lg:col-span-2 group relative rounded-2xl overflow-hidden aspect-video border border-white/5">
              <img src={mockNews[0].thumbnail} alt={mockNews[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-3">
                <span className="self-start bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold uppercase">
                  {mockNews[0].category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {mockNews[0].title}
                </h2>
                <p className="text-slate-300 line-clamp-2 md:w-3/4">
                  {mockNews[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                  <span>{mockNews[0].author}</span>
                  <span>•</span>
                  <span>{mockNews[0].date}</span>
                </div>
              </div>
           </Link>

           {/* Trending News */}
           <div className="flex flex-col gap-4">
             <h3 className="text-xl font-bold text-white border-l-4 border-purple-500 pl-3">Đang thịnh hành</h3>
             {mockNews.map((news) => (
                <Link key={news.id + '-trend'} to={`/news/${news.slug}`} className="group flex gap-4 bg-[#16161a] p-3 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-colors">
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src={news.thumbnail} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-purple-400 mb-1">{news.category}</span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                    <span className="text-xs text-slate-500 mt-2">{news.date}</span>
                  </div>
                </Link>
             ))}
           </div>
        </div>

        <div className="mb-6 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold text-white">Tin tức mới nhất</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-[#16161a] border border-white/5 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
            Tải thêm tin tức
          </button>
        </div>
      </div>
    </Layout>
  );
}
