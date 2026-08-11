import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#050507] text-slate-50">
      <Header />
      <main className="flex-1 pb-20 md:pb-0 pt-16">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  );
}
