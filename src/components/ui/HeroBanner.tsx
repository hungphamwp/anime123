import { Link } from 'react-router-dom';
import { Play, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="px-4 lg:px-8 pt-6 pb-2">
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#16161a] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/5">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542316492-e7f0607ce778?w=1920&q=80"
            alt="One Piece Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative mx-auto h-full w-full px-8 md:px-16 flex flex-col justify-end pb-12 md:pb-24">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="rounded bg-purple-600 px-2 py-1 text-xs font-bold text-white">HOT</span>
              <span className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-purple-400">Chapter 1160</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              ONE PIECE
            </h1>
            
            <p className="text-sm md:text-base text-slate-300 line-clamp-2 md:line-clamp-3 max-w-xl">
              Một hành trình phiêu lưu huyền thoại đang bước vào giai đoạn mới. Monkey D. Luffy và băng hải tặc Mũ Rơm tiếp tục tiến tới kho báu vĩ đại nhất thế giới One Piece.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/manga/one-piece"
                className="flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
              >
                <BookOpen className="h-5 w-5" />
                Đọc ngay
              </Link>
              <Link
                to="/anime/one-piece"
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20 border border-white/10"
              >
                <Play className="h-5 w-5" />
                Xem Anime
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls (Visual only for demo) */}
        <div className="absolute bottom-1/2 right-4 md:right-8 flex gap-2 translate-y-1/2 hidden md:flex">
          <button className="rounded-full bg-black/50 p-3 text-white backdrop-blur hover:bg-purple-600 transition-colors border border-white/10">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="rounded-full bg-black/50 p-3 text-white backdrop-blur hover:bg-purple-600 transition-colors border border-white/10">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          <div className="h-1.5 w-6 rounded-full bg-purple-600"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
        </div>
      </div>
    </div>
  );
}
