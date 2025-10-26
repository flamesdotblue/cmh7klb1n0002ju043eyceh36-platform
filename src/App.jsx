import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import LiveSessions from './components/LiveSessions';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <FeatureGrid />
      <LiveSessions />
      <FooterCTA />
    </div>
  );
}
