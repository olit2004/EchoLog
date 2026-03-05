import Sidebar from "./_components/Sidebar";
import{ ThemeToggle} from "./_components/ThemeToggle"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9F7F5] text-[#1A1A1A]">

      <aside className="w-64 border-r border-gray-200 p-6 hidden md:block">
        <Sidebar />
      </aside>


      <main className="flex-1 overflow-y-auto">
       
        <header className="flex items-center justify-between px-8 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input 
              type="text" 
              placeholder="Search entries..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#A32A2A] transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#1e293b] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
              <span className="text-xl">+</span> Add Entry
            </button>
            <ThemeToggle/>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white shadow-sm">
              <img src="/api/placeholder/40/40" alt="Avatar" />
            </div>
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}