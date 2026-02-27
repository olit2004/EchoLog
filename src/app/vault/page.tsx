import { Search, Plus, Grid, List } from 'lucide-react';
import MovieCard from '@/components/MovieCard';

export default function VaultPage() {
  const movies = [
    { id: '1', title: 'Inception', date: 'Oct 12, 2023', mood: 'THOUGHT-PROVOKING', image: '/inception.jpg', snippet: 'The architecture of dreams is fascinating...' },
    { id: '2', title: 'Past Lives', date: 'Sept 28, 2023', mood: 'MELANCHOLIC', image: '/past-lives.jpg', snippet: '"In-Yun. A concept that feels so tangible...' },
    { id: '3', title: 'Across the Spider-Verse', date: 'Aug 15, 2023', mood: 'INSPIRED', image: '/spiderverse.jpg', snippet: 'A sensory explosion. Every frame is a painting...' },
  ];

  return (
    <main className="min-h-screen bg-[#F9F7F5] p-8 md:p-12">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-2 text-[#D32F2F]">
          <div className="w-8 h-8 bg-[#D32F2F] rounded-sm flex items-center justify-center">
             <span className="text-white font-bold italic">V</span>
          </div>
          <h1 className="text-2xl font-serif font-bold">The Vault</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input className="bg-[#EFE9E5] rounded-full py-2 pl-10 pr-4 text-sm w-64 outline-none" placeholder="Search memories..." />
          </div>
          <button className="bg-[#D32F2F] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
            <Plus className="w-4 h-4" /> New Entry
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif font-bold text-[#1A1A1A] mb-2">Your Vault</h2>
        <p className="text-[#D32F2F] italic font-serif mb-8 text-xl">A Collection of Stories and Memories.</p>

        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-3">
             {['Browse by Time', 'Mood', 'Theme'].map(filter => (
               <button key={filter} className="bg-[#EFE9E5] px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                 {filter} <span className="text-[10px]">▼</span>
               </button>
             ))}
          </div>
          <div className="flex gap-2 text-gray-400">
            <Grid className="w-5 h-5 text-[#D32F2F]" />
            <List className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
          <div className="border-2 border-dashed border-[#F2D7D7] bg-[#FFF5F5] rounded-xl flex flex-col items-center justify-center p-12 cursor-pointer group">
            <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
              <Plus />
            </div>
            <h3 className="font-serif font-bold text-lg">Add New Entry</h3>
            <p className="text-sm text-gray-400">What did you watch today?</p>
          </div>
        </div>
      </div>
    </main>
  );
}