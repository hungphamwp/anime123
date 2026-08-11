/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MangaList from './pages/MangaList';
import MangaDetail from './pages/MangaDetail';
import MangaReader from './pages/MangaReader';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import AnimeWatch from './pages/AnimeWatch';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import VideoList from './pages/VideoList';
import VideoDetail from './pages/VideoDetail';
import Search from './pages/Search';
import AdminPreview from './pages/AdminPreview';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/manga" element={<MangaList />} />
        <Route path="/manga/:slug" element={<MangaDetail />} />
        <Route path="/manga/:slug/chapter/:chapter" element={<MangaReader />} />
        
        <Route path="/anime" element={<AnimeList />} />
        <Route path="/anime/:slug" element={<AnimeDetail />} />
        <Route path="/anime/:slug/episode/:episode" element={<AnimeWatch />} />
        
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsDetail />} />

        <Route path="/video" element={<VideoList />} />
        <Route path="/video/:slug" element={<VideoDetail />} />

        <Route path="/search" element={<Search />} />
        <Route path="/admin-preview" element={<AdminPreview />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

