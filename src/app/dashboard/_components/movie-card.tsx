interface Props {
  title: string;
  rating: string;
  date: string;
  type: 'MOVIE' | 'SERIES';
  img: string;
  quote: string;
}

export default function MovieCard({ title, rating, date, type, img, quote }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-80 overflow-hidden relative">
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded font-bold">
          {type}
        </div>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">WATCHED {date}</p>
          </div>
          <div className="flex items-center gap-1 text-[#A32A2A]">
            <span className="text-xs">★</span>
            <span className="font-bold text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic leading-snug line-clamp-2">"{quote}"</p>
      </div>
    </div>
  );
}