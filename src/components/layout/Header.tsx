import { Search, Globe, Moon, User, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Manga', path: '/manga' },
    { name: 'Anime', path: '/anime' },
    { name: 'Tin tức', path: '/news' },
    { name: 'Video', path: '/video' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white">
              MANGA<span className="text-purple-500">HUB</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white',
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-slate-400'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/search" className="hidden md:flex items-center gap-2 rounded-full bg-[#16161a] px-4 py-2 text-sm text-slate-400 transition-colors hover:text-white border border-white/10 hover:border-purple-500/50">
            <Search className="h-4 w-4" />
            <span className="w-32 text-left">Tìm kiếm...</span>
          </Link>
          
          <button className="md:hidden text-slate-300 hover:text-white">
            <Search className="h-5 w-5" />
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <button className="text-slate-400 hover:text-white transition-colors" title="Language">
              <Globe className="h-5 w-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors" title="Theme">
              <Moon className="h-5 w-5" />
            </button>
            <button className="rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500 flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Đăng nhập</span>
            </button>
          </div>
          
          <button className="md:hidden text-slate-300 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
