// components/MovieCard.tsx
import MoodBadge from './MoodBadge';
import { Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  date: string;
  mood: string;
  image: string;
  snippet: string;
}

export default function MovieCard({ title, date, mood, image, snippet }: MovieCardProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Poster Area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <MoodBadge label={mood} />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">{title}</h3>
          <span className="text-[#D32F2F] text-xs font-serif italic">{date}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed italic font-serif flex-1 line-clamp-3 mb-6">
          "{snippet}"
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#D32F2F] text-[#D32F2F]" />
            ))}
          </div>
          <button className="text-[10px] font-bold tracking-widest text-[#D32F2F] uppercase border-b border-transparent hover:border-[#D32F2F] transition-all">
            Read Reflection
          </button>
        </div>
      </div>
    </div>
  );
}