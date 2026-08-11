import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0c] py-12 hidden md:block">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tighter text-white">
              MANGA<span className="text-purple-500">HUB</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            Your destination for Manga & Anime. Cập nhật những bộ truyện và phim mới nhất mỗi ngày.
          </p>
        </div>
        
        <div>
          <h3 className="mb-4 font-semibold text-white">Khám phá</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li><Link to="/manga" className="hover:text-purple-400 transition-colors">Manga mới</Link></li>
            <li><Link to="/anime" className="hover:text-purple-400 transition-colors">Anime mùa này</Link></li>
            <li><Link to="/news" className="hover:text-purple-400 transition-colors">Tin tức</Link></li>
            <li><Link to="/video" className="hover:text-purple-400 transition-colors">Video</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 font-semibold text-white">Chính sách</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Điều khoản dịch vụ</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Bảo mật</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Bản quyền</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Liên hệ</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 font-semibold text-white">Cộng đồng</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Facebook</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Discord</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">Twitter (X)</Link></li>
            <li><Link to="#" className="hover:text-purple-400 transition-colors">YouTube</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="mx-auto mt-12 max-w-[1440px] border-t border-white/5 px-4 pt-6 text-center text-sm text-slate-500 lg:px-8">
        &copy; {new Date().getFullYear()} MANGA HUB. All rights reserved. (Demo Version)
      </div>
    </footer>
  );
}
