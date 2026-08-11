import { Link } from 'react-router-dom';
import { Home, Users, Settings, BookOpen, Tv, Video, Newspaper, LogOut, Search, Bell } from 'lucide-react';
import { mockMangas, mockAnimes } from '../data/mock';

export default function AdminPreview() {
  return (
    <div className="min-h-screen bg-[#050507] text-slate-300 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#16161a] border-r border-white/5 flex flex-col hidden lg:flex">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-xl font-black text-transparent">
            MANGA HUB ADMIN
          </span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col gap-1 px-3">
            <li>
              <Link to="/admin-preview" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-purple-600/10 text-purple-400 font-medium">
                <Home className="h-5 w-5" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <BookOpen className="h-5 w-5" /> Quản lý Manga
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Tv className="h-5 w-5" /> Quản lý Anime
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Newspaper className="h-5 w-5" /> Tin tức
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Video className="h-5 w-5" /> Videos
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
                <Users className="h-5 w-5" /> Người dùng
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-white/5">
          <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
            <Settings className="h-5 w-5" /> Cài đặt
          </Link>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-400/10 mt-2 transition-colors">
            <LogOut className="h-5 w-5" /> Quay lại Web
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-[#16161a] border-b border-white/5 flex items-center justify-between px-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input type="text" placeholder="Tìm kiếm trong admin..." className="w-full bg-[#050507] border border-white/5 rounded-md py-1.5 pl-9 pr-3 text-sm text-white focus:border-purple-500 focus:outline-none" />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative text-slate-400 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#1a1d2d]"></span>
            </button>
            <div className="flex items-center gap-2 border-l border-white/5 pl-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="text-sm font-medium text-white">Admin User</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6 flex justify-between items-center">
             <div>
               <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
               <p className="text-sm text-slate-400">Tổng quan tình hình hệ thống.</p>
             </div>
             <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
               + Thêm nội dung mới
             </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#16161a] p-4 rounded-2xl border border-white/5">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm text-slate-400 font-medium">Tổng số Manga</span>
                 <BookOpen className="h-5 w-5 text-purple-400" />
               </div>
               <div className="text-3xl font-bold text-white">1,248</div>
               <div className="text-xs text-emerald-400 mt-2">+12 trong tuần này</div>
            </div>
            <div className="bg-[#16161a] p-4 rounded-2xl border border-white/5">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm text-slate-400 font-medium">Tổng số Anime</span>
                 <Tv className="h-5 w-5 text-emerald-400" />
               </div>
               <div className="text-3xl font-bold text-white">456</div>
               <div className="text-xs text-emerald-400 mt-2">+3 trong tuần này</div>
            </div>
            <div className="bg-[#16161a] p-4 rounded-2xl border border-white/5">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm text-slate-400 font-medium">Tổng lượt xem</span>
                 <Video className="h-5 w-5 text-sky-400" />
               </div>
               <div className="text-3xl font-bold text-white">2.4M</div>
               <div className="text-xs text-emerald-400 mt-2">+125K so với tháng trước</div>
            </div>
            <div className="bg-[#16161a] p-4 rounded-2xl border border-white/5">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-sm text-slate-400 font-medium">Người dùng mới</span>
                 <Users className="h-5 w-5 text-pink-400" />
               </div>
               <div className="text-3xl font-bold text-white">12,504</div>
               <div className="text-xs text-emerald-400 mt-2">+450 trong tuần này</div>
            </div>
          </div>
          
          {/* Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#16161a] rounded-2xl border border-white/5 overflow-hidden">
               <div className="p-4 border-b border-white/5 flex justify-between items-center">
                 <h3 className="font-bold text-white">Manga mới cập nhật</h3>
                 <button className="text-xs text-purple-400 hover:text-purple-300">Xem tất cả</button>
               </div>
               <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-400 uppercase bg-[#050507] border-b border-white/5">
                      <tr>
                          <th className="px-4 py-3">Tên truyện</th>
                          <th className="px-4 py-3">Chapter</th>
                          <th className="px-4 py-3 text-right">Hành động</th>
                      </tr>
                  </thead>
                  <tbody>
                      {mockMangas.slice(0, 5).map(m => (
                        <tr key={m.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                            <img src={m.cover} alt={m.title} className="w-8 h-8 rounded object-cover" />
                            <span className="line-clamp-1">{m.title}</span>
                          </td>
                          <td className="px-4 py-3 text-slate-300">{m.latestChapter}</td>
                          <td className="px-4 py-3 text-right">
                            <button className="text-purple-400 hover:text-purple-300 mr-3">Sửa</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
               </table>
            </div>

            <div className="bg-[#16161a] rounded-2xl border border-white/5 overflow-hidden">
               <div className="p-4 border-b border-white/5 flex justify-between items-center">
                 <h3 className="font-bold text-white">Anime mới cập nhật</h3>
                 <button className="text-xs text-purple-400 hover:text-purple-300">Xem tất cả</button>
               </div>
               <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-400 uppercase bg-[#050507] border-b border-white/5">
                      <tr>
                          <th className="px-4 py-3">Tên phim</th>
                          <th className="px-4 py-3">Tập</th>
                          <th className="px-4 py-3 text-right">Hành động</th>
                      </tr>
                  </thead>
                  <tbody>
                      {mockAnimes.slice(0, 5).map(a => (
                        <tr key={a.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="px-4 py-3 font-medium text-white flex items-center gap-3">
                            <img src={a.poster} alt={a.title} className="w-8 h-8 rounded object-cover" />
                            <span className="line-clamp-1">{a.title}</span>
                          </td>
                          <td className="px-4 py-3 text-slate-300">{a.latestEpisode}</td>
                          <td className="px-4 py-3 text-right">
                            <button className="text-purple-400 hover:text-purple-300 mr-3">Sửa</button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
               </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
