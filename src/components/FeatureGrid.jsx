import { Music, Share2, Users, MessageCircle, Zap } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Hi‑Fi Streaming',
    desc: 'Lossless-ready streaming with adaptive bitrate for crystal clear sound on the go.'
  },
  {
    icon: Share2,
    title: 'Live Sharing',
    desc: 'Host synchronized listening sessions and invite your friends to tune in instantly.'
  },
  {
    icon: Users,
    title: 'Social Rooms',
    desc: 'Create rooms, set vibes, and grow your community with profile follows and reactions.'
  },
  {
    icon: MessageCircle,
    title: 'Chat & Reactions',
    desc: 'Express yourself with real-time chat, emoji bursts, and on-beat reactions.'
  },
  {
    icon: Zap,
    title: 'Low Latency',
    desc: 'Cutting-edge sync to keep every beat aligned across all devices.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Built for music + moments</h2>
          <p className="mt-3 text-white/70">Everything you need to discover tracks, go live, and feel connected—wherever you are.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/[0.08] transition">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-rose-600">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
