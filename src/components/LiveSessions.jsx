import { Mic2, Users } from 'lucide-react';

const sessions = [
  {
    id: 'room-vibehouse',
    title: 'Vibe House • Afrobeats',
    host: 'Ari',
    listeners: 328,
    color: 'from-rose-500 to-red-600'
  },
  {
    id: 'room-deephour',
    title: 'Deep Hour • Techno',
    host: 'Max',
    listeners: 152,
    color: 'from-fuchsia-500 to-purple-600'
  },
  {
    id: 'room-lofi',
    title: 'Night Lofi • Chill',
    host: 'Rin',
    listeners: 512,
    color: 'from-amber-500 to-orange-600'
  }
];

function Avatar({ name }) {
  const initials = name.slice(0, 2).toUpperCase();
  return (
    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold">
      {initials}
    </div>
  );
}

export default function LiveSessions() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Live right now</h2>
            <p className="mt-2 text-white/70">Jump into a room and listen together in real time.</p>
          </div>
          <button className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">
            <Mic2 className="w-4 h-4" />
            Start a Room
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sessions.map((s) => (
            <div key={s.id} className="group rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/[0.08] transition">
              <div className={`relative overflow-hidden rounded-xl h-28 mb-4 bg-gradient-to-br ${s.color}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white_0,transparent_35%),radial-gradient(circle_at_70%_60%,white_0,transparent_40%)]" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={s.host} />
                  <div>
                    <h3 className="font-semibold leading-tight">{s.title}</h3>
                    <p className="text-xs text-white/60">Host • {s.host}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{s.listeners}</span>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-white text-black font-semibold py-2 hover:opacity-90 transition">Join</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
