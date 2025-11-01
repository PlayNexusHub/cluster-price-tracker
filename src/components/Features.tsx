import { Gamepad2, Zap, Shield, Trophy, Coins, Server, Users, Flame } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Seamless Crossplay Carnage",
    description: "PC, Xbox, PS5 - All platforms raid together in brutal harmony"
  },
  {
    icon: Zap,
    title: "15x Harvest/XP/Taming",
    description: "Plus 50x breeding - Non-stop action without the grind"
  },
  {
    icon: Shield,
    title: "PvP Mods & ORP",
    description: "S+, Propagator, Custom Caves + 120min Offline Raid Protection"
  },
  {
    icon: Trophy,
    title: "Weekly Wipes & Events",
    description: "Fresh raids every 2-6 weeks + competitive tournaments for prizes"
  },
  {
    icon: Coins,
    title: "Guaranteed Kits - No RNG",
    description: "Real gear, no lootboxes. Know exactly what you're getting"
  },
  {
    icon: Server,
    title: "Private Raid Havens",
    description: "Practice your tactics 40% cheaper than competitors"
  },
  {
    icon: Users,
    title: "4-Man Limits + Fair ORP",
    description: "Balanced tribes for competitive, skill-based warfare"
  },
  {
    icon: Flame,
    title: "Leaderboards for Glory",
    description: "Track kills, tribes, and dominate the rankings"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-gradient-crimson glow-crimson">WHY PRIMEASA?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most brutal, balanced, and feature-rich PvP experience in ARK ASA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card-brutal p-6 rounded-lg hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 relative">
                  <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
