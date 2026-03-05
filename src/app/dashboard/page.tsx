import StatCard from "./_components/StatCard";
import MovieCard from "./_components/movie-card";



export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4">
          <StatCard title="TOTAL MOVIES" value="142" subValue="+3 this month" />
          <StatCard title="SERIES COMPLETED" value="24" subValue="98 episodes total" />
        </div>
        
        <div className="lg:col-span-8 bg-[#EEF2FF] p-8 rounded-2xl relative">
           <span className="text-[#A32A2A] text-sm font-bold block mb-4">💬 RECENT REFLECTION</span>
           <p className="text-xl italic font-serif leading-relaxed text-gray-800">
             "The cinematography in 'Aftersun' captured the fleeting nature of memory perfectly. 
             It left me pondering the gaps between what we see and what we remember for days..."
           </p>
           <button className="mt-6 text-sm font-bold border-b-2 border-[#A32A2A] text-[#A32A2A]">
             Read full entry →
           </button>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold">Recently Watched</h2>
          <button className="text-[#A32A2A] font-semibold text-sm">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MovieCard 
            title="Dune: Part Two" 
            rating="4.5" 
            date="OCT 24, 2023" 
            type="MOVIE" 
            img="https://i.pinimg.com/736x/08/20/a6/0820a68034114d4a8619f237bf4772ef.jpg"
            quote="A masterclass in scale. The sound design felt visceral in the theater..."
          />
          <MovieCard 
            title="The Bear (S2)" 
            rating="5.0" 
            date="OCT 21, 2023" 
            type="SERIES" 
            img="https://i.pinimg.com/736x/12/95/e5/1295e5e473a6f9383e91986d925bdd7c.jpg"
            quote="Exquisite pacing. 'Forks' might be the best single episode of television..."
          />
          <MovieCard 
            title="Past Lives" 
            rating="4.8" 
            date="OCT 15, 2023" 
            type="MOVIE" 
            img="https://i.pinimg.com/avif/1200x/af/3f/10/af3f10d8c3ebb337e96af5dd8e8f8002.avf"
            quote="A quiet ache. The concept of 'In-Yun' is beautifully explored..."
          />
        </div>
      </section>
    </div>
  );
}