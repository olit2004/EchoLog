import Link from 'next/link';
import { Play, BookOpen, Lock, Heart } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0F0F0F] text-[#F9F7F5] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105 will-change-transform"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-10 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D32F2F] rounded-lg flex items-center justify-center rotate-3 shadow-lg">
            <span className="text-white font-serif font-black text-2xl -rotate-3">
              E
            </span>
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight uppercase">
            EchoLog
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-semibold uppercase tracking-widest hover:text-[#D32F2F] transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-[#F9F7F5] text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-all shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <h2 className="text-[#D32F2F] font-serif italic text-2xl md:text-3xl">
            Where cinema meets contemplation.
          </h2>

          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[0.95] tracking-tight">
            Capture the <br />
            <span className="italic font-light">Resonance.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            A private journal for films and series that stay with you.
            Track what you watched, how it moved you, and why it mattered.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-sm text-gray-200">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="w-5 h-5 text-[#D32F2F]" />
              Reflect, not just rate
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-5 h-5 text-[#D32F2F]" />
              Capture emotions & themes
            </div>
            <div className="flex items-center justify-center gap-3">
              <Lock className="w-5 h-5 text-[#D32F2F]" />
              Completely private
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-3 bg-[#D32F2F] px-10 py-5 rounded-full font-serif font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(211,47,47,0.35)]"
            >
              Start Your Echoes
              <Play className="w-5 h-5 fill-white group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </main>

{/* Film Strip Section */}
<section
  id="preview"
  className="relative z-10 py-32 bg-[#151515] text-[#F9F7F5]"
>
  <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
    <h3 className="font-serif text-4xl mb-16 italic text-gray-200">
      Designed for the Thoughtful Viewer.
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-black/90">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

        <div className="absolute bottom-0 z-20 p-6 space-y-3 text-left">
          <h4 className="font-serif text-2xl text-white">
            Reflect, Not Just Rate
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Write personal reflections about what a story made you feel,
            think, or question — beyond stars and scores.
          </p>
          <span className="text-[10px] uppercase tracking-widest text-[#D32F2F]">
            Journaling • Meaning
          </span>
        </div>

        <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Card 2 – Featured */}
      <div className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-black/90 scale-110 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

        <div className="absolute bottom-0 z-20 p-6 space-y-3 text-left">
          <h4 className="font-serif text-2xl text-white">
            Track Your Inner Patterns
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Notice how your tastes, moods, and themes evolve over time
            as you consume stories.
          </p>
          <span className="text-[10px] uppercase tracking-widest text-[#D32F2F]">
            Mood • Growth
          </span>
        </div>

        <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-700" />
      </div>

      {/* Card 3 */}
      <div className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-black/90">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

        <div className="absolute bottom-0 z-20 p-6 space-y-3 text-left">
          <h4 className="font-serif text-2xl text-white">
            Build a Personal Archive
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Create a private record of the stories that shaped you —
            searchable, organized, and yours alone.
          </p>
          <span className="text-[10px] uppercase tracking-widest text-[#D32F2F]">
            Memory • Privacy
          </span>
        </div>

        <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700" />
      </div>

    </div>
  </div>
</section>
    </div>
  );
}