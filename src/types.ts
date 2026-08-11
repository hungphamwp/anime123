export interface Manga {
  id: string;
  title: string;
  slug: string;
  cover: string;
  rating: number;
  status: 'Ongoing' | 'Completed';
  genres: string[];
  latestChapter: number;
  updatedAt: string;
  author: string;
  description: string;
}

export interface Anime {
  id: string;
  title: string;
  slug: string;
  poster: string;
  banner: string;
  rating: number;
  status: 'Airing' | 'Completed' | 'Upcoming';
  year: number;
  studio: string;
  genres: string[];
  latestEpisode: number;
  updatedAt: string;
  description: string;
}

export interface News {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export interface Video {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  author: string;
  description: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  date: string;
  views: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  date: string;
  duration: string;
}
