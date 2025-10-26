import Spline from '@splinetool/react-spline';
import { Play, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QrI46EbSvyxcmozb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs sm:text-sm">
            <Radio className="w-4 h-4" />
            Live sharing for music lovers
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Stream music. Go live. Feel the moment together.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            A modern mobile experience for discovering tracks, hosting live rooms, and vibing in sync with friends.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
              <Play className="w-5 h-5" />
              Start Listening
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">
              <span>Join a Live Room</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
