export default function FooterCTA() {
  return (
    <footer className="relative py-16 sm:py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-red-600/30 to-rose-600/30 border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold">Turn up the moment</h3>
          <p className="mt-2 text-white/80 max-w-2xl">Download the app to stream your soundtrack and go live with friends in seconds.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition">Get the App</button>
            <button className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">Learn More</button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Pulse Live. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
