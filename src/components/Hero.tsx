import { Button } from "@/components/ui/button";
import { Swords, Users, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-battlefield-dark to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-gradient-crimson glow-crimson">FORGE ALLIANCES.</span>
              <br />
              <span className="text-foreground">CRUSH ENEMIES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ultimate ASA PvP Cluster • 15x Rates • 7-Man Tribes • 15+ Maps • Cross-Platform Carnage
            </p>
          </div>

          {/* Platform CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg px-8 py-6 combat-pulse font-bold">
              <Swords className="mr-2 h-5 w-5" />
              PC - JOIN RAID
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold border-primary/50 hover:bg-primary/10">
              <Swords className="mr-2 h-5 w-5" />
              XBOX/PS5
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="card-brutal p-6 rounded-lg hover-lift">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2,500+</div>
              <div className="text-sm text-muted-foreground">Active Raiders</div>
            </div>
            <div className="card-brutal p-6 rounded-lg hover-lift">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">99.99%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="card-brutal p-6 rounded-lg hover-lift">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15x</div>
              <div className="text-sm text-muted-foreground">Rates</div>
            </div>
            <div className="card-brutal p-6 rounded-lg hover-lift">
              <Swords className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Anti-Cheat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
