export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', active: true },
    { name: 'Archive', active: false },
    { name: 'Reflections', active: false },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-[#A32A2A] p-1.5 rounded text-white font-bold">CJ</div>
        <h1 className="font-bold text-xl tracking-tight">Cinema Journal</h1>
      </div>

      <nav className="space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Filters</p>
          <ul className="space-y-2">
            <li className="bg-[#D1D5DB]/30 p-2 rounded-md font-medium flex justify-between">
              <span className="flex items-center gap-2">🎬 Genre</span>
              <span className="text-xs text-gray-500">12</span>
            </li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">😊 Mood</li>
            <li className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">🔖 Theme</li>
          </ul>
        </div>
      </nav>

      {/* Weekly Prompt Card */}
      <div className="mt-auto bg-[#0F172A] text-white p-5 rounded-xl">
        <p className="text-[10px] uppercase text-gray-400 mb-2">Weekly Prompt</p>
        <p className="font-medium text-sm leading-relaxed mb-4">What film changed your perspective on solitude?</p>
        <button className="w-full py-2 bg-white text-black text-xs font-bold rounded hover:bg-gray-200 transition-colors">
          RESPOND
        </button>
      </div>
    </div>
  );
}