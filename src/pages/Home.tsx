import Layout from '../components/layout/Layout';
import HeroBanner from '../components/ui/HeroBanner';
import MangaCard from '../components/ui/MangaCard';
import AnimeCard from '../components/ui/AnimeCard';
import NewsCard from '../components/ui/NewsCard';
import VideoCard from '../components/ui/VideoCard';
import { mockMangas, mockAnimes, mockNews, mockVideos } from '../data/mock';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-3 leading-none">
        {title}
      </h2>
      <Link to={href} className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300">
        Xem tất cả <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      
      <div className="mx-auto max-w-[1440px] px-4 py-12 lg:px-8 flex flex-col gap-16">
        {/* Manga Section */}
        <section>
          <SectionHeader title="Manga Mới Cập Nhật" href="/manga" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
            {mockMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>

        {/* Anime Section */}
        <section>
          <SectionHeader title="Anime Mới Cập Nhật" href="/anime" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
            {mockAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
            {/* Duplicate for demo filling */}
            {mockAnimes.map((anime) => (
              <AnimeCard key={anime.id + '-dup'} anime={{...anime, id: anime.id + '-dup'}} />
            )).slice(0, 2)}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <SectionHeader title="Tin Tức Nổi Bật" href="/news" />
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
              {mockNews.slice(0, 4).map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
          
          {/* Trending Sidebar */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-3 leading-none">
                Thịnh Hành
              </h2>
            </div>
            <div className="flex flex-col gap-4 bg-[#16161a] rounded-2xl p-4 border border-white/5">
              {mockMangas.slice(0, 5).map((manga, idx) => (
                <Link key={manga.id} to={`/manga/${manga.slug}`} className="flex items-center gap-4 group">
                  <div className="text-2xl font-black text-slate-600 group-hover:text-purple-500 w-6 text-center transition-colors">
                    {idx + 1}
                  </div>
                  <img src={manga.cover} alt={manga.title} className="w-12 h-16 object-cover rounded" />
                  <div className="flex flex-col flex-1">
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white line-clamp-1 transition-colors">{manga.title}</h4>
                    <span className="text-xs text-slate-400 mt-1">{manga.genres[0]}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <section>
          <SectionHeader title="Video Nổi Bật" href="/video" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
            {/* Duplicate for demo filling */}
            {mockVideos.map((video) => (
              <VideoCard key={video.id + '-dup'} video={{...video, id: video.id + '-dup'}} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}
