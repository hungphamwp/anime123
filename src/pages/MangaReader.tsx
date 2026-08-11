import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Maximize, Settings, ChevronLeft, ChevronRight, List } from 'lucide-react';
import { mockMangas } from '../data/mock';

export default function MangaReader() {
  const { slug, chapter } = useParams();
  const manga = mockMangas.find(m => m.slug === slug) || mockMangas[0];
  const currentChapter = parseInt(chapter || '1');

  // Mock chapter images
  const images = [
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&q=80',
    'https://images.unsplash.com/photo-1528164311546-a4c6a61763a8?w=1000&q=80',
    'https://images.unsplash.com/photo-1541562232579-512a21360020?w=1000&q=80',
    'https://images.unsplash.com/photo-1551465223-9ee82b6833b7?w=1000&q=80',
    'https://images.unsplash.com/photo-1542316492-e7f0607ce778?w=1000&q=80'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#111111]/90 backdrop-blur-md border-b border-white/5 transition-transform duration-300">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to={`/manga/${manga.slug}`} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline font-medium">{manga.title}</span>
          </Link>

          <div className="text-center">
            <h1 className="text-sm font-bold text-white">Chapter {currentChapter}</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors hidden sm:block">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Reader Area */}
      <main className="pt-14 pb-24 min-h-screen flex flex-col items-center">
        {images.map((src, idx) => (
          <div key={idx} className="w-full max-w-[900px] relative">
            {/* Adding a loading placeholder effect */}
            <div className="absolute inset-0 bg-slate-900 animate-pulse -z-10"></div>
            <img 
              src={src} 
              alt={`Page ${idx + 1}`} 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 z-50 w-full bg-[#111111]/95 backdrop-blur-md border-t border-white/5 pb-safe">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4">
          <Link 
            to={`/manga/${manga.slug}/chapter/${currentChapter - 1}`}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${currentChapter <= 1 ? 'pointer-events-none opacity-50 text-slate-600' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Chapter trước</span>
          </Link>

          <Link to={`/manga/${manga.slug}`} className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
            <List className="h-5 w-5" />
          </Link>

          <Link 
            to={`/manga/${manga.slug}/chapter/${currentChapter + 1}`}
            className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
          >
            <span className="hidden sm:inline">Chapter sau</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
