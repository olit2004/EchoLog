export default function NewEntry() {
  const moods = ['Inspired', 'Melancholic', 'Excited', 'Thoughtful', 'Moved'];
  
  return (
    <div className="min-h-screen bg-[#F9F7F5] flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <header className="flex justify-between mb-12">
           <div className="flex items-center gap-2 font-serif font-bold">
             <div className="bg-[#D32F2F] w-6 h-6 rounded-sm" /> New Entry
           </div>
           <button className="bg-gray-200 p-2 rounded-full"><X className="w-4 h-4" /></button>
        </header>

        <section className="space-y-8">
          <div>
            <label className="block font-serif text-gray-600 mb-4">Which story are you capturing?</label>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
              <Search className="text-gray-400 w-5 h-5" />
              <input className="w-full outline-none text-lg" defaultValue="Past Lives (2023)" />
            </div>
          </div>

          <div className="bg-[#FFF5F5] p-4 rounded-xl flex items-center gap-4 border border-[#F2D7D7]">
            <div className="w-12 h-16 bg-gray-300 rounded overflow-hidden">
               <img src="/past-lives-poster.jpg" className="object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-serif font-bold">Past Lives</h4>
              <p className="text-sm text-gray-500">Directed by Celine Song</p>
            </div>
            <button className="text-[#D32F2F] text-sm font-bold uppercase tracking-wider">Change</button>
          </div>

          <div>
            <label className="block font-serif font-bold text-lg mb-4">What are you feeling right now?</label>
            <div className="flex flex-wrap gap-3">
              {moods.map(mood => (
                <button 
                  key={mood}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    mood === 'Inspired' ? 'bg-[#D32F2F] text-white border-[#D32F2F]' : 'bg-white border-gray-200'
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-serif font-bold text-lg mb-4">Write your reflection...</label>
            <textarea 
              className="w-full h-48 p-6 rounded-xl bg-white border border-gray-100 shadow-sm outline-none placeholder:italic"
              placeholder="Let your thoughts flow. How did this story resonate with your life today?"
            />
          </div>

          <button className="w-full bg-[#D32F2F] text-white py-4 rounded-full font-serif font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#b22727] transition-colors">
            <Save className="w-5 h-5" /> Save to Vault
          </button>
        </section>
      </div>
    </div>
  );
}