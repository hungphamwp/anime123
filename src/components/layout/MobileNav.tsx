import { Home, BookOpen, Tv, Search, Newspaper } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from './Header';

export default function MobileNav() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Manga', path: '/manga', icon: BookOpen },
    { name: 'Anime', path: '/anime', icon: Tv },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Search', path: '/search', icon: Search },
  ];

  return (
    <nav className="fixed bottom-0 z-50 flex w-full justify-around border-t border-white/5 bg-[#0a0a0c]/80 pb-safe pt-2 md:hidden backdrop-blur-md">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-2 w-16 transition-colors",
              isActive ? "text-purple-500" : "text-slate-400 hover:text-white"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
