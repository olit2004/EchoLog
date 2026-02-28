export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0E0E0E] flex flex-col items-center justify-center p-6">
      {/* Logo & Header */}
      <div className="mb-12 flex flex-col items-center gap-2">
        <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center rotate-3 shadow-xl">
          <span className="text-white font-serif font-black text-2xl -rotate-3">E</span>
        </div>
        <h1 className="font-serif font-bold text-3xl tracking-tighter uppercase text-[#EDEDED]">
          EchoLog
        </h1>
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-[#141414] p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#222]">
        {children}
      </div>

      {/* Footer */}
      <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-bold text-center">
        Your reflections are private and stored securely.
      </p>
    </div>
  );
}