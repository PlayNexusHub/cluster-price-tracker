import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Zap, MapPin, Copy, QrCode } from "lucide-react";
import { toast } from "sonner";

const Servers = () => {
  const maps = [
    { name: "The Island", players: "65/70", status: "online", ip: "play.onyxark.gg:7777", wipe: "5 days" },
    { name: "Scorched Earth", players: "58/70", status: "online", ip: "play.onyxark.gg:7778", wipe: "5 days" },
    { name: "Aberration", players: "62/70", status: "online", ip: "play.onyxark.gg:7779", wipe: "5 days" },
    { name: "Extinction", players: "54/70", status: "online", ip: "play.onyxark.gg:7780", wipe: "5 days" },
    { name: "Genesis Part 1", players: "48/70", status: "online", ip: "play.onyxark.gg:7781", wipe: "5 days" },
    { name: "Genesis Part 2", players: "51/70", status: "online", ip: "play.onyxark.gg:7782", wipe: "5 days" },
    { name: "Ragnarok", players: "70/70", status: "online", ip: "play.onyxark.gg:7783", wipe: "5 days" },
    { name: "Valguero", players: "55/70", status: "online", ip: "play.onyxark.gg:7784", wipe: "5 days" },
    { name: "Crystal Isles", players: "59/70", status: "online", ip: "play.onyxark.gg:7785", wipe: "5 days" },
    { name: "Lost Island", players: "52/70", status: "online", ip: "play.onyxark.gg:7786", wipe: "5 days" },
    { name: "The Center", players: "61/70", status: "online", ip: "play.onyxark.gg:7787", wipe: "5 days" },
    { name: "Fjordur", players: "56/70", status: "online", ip: "play.onyxark.gg:7788", wipe: "5 days" }
  ];

  const copyIP = (ip: string) => {
    navigator.clipboard.writeText(ip);
    toast.success("IP copied to clipboard!");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-battlefield-dark to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-gradient-crimson glow-crimson">LIVE SERVERS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              12 maps. 99.99% uptime. 7-man tribes. Full cross-platform support.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">15x All Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">7-Man Max</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">120min ORP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Server Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {maps.map((map, idx) => (
              <Card key={idx} className="p-6 card-brutal hover-lift group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {map.name}
                    </h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      {map.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Wipe in</div>
                    <div className="text-lg font-bold text-primary">{map.wipe}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Players:</span>
                    <span className="font-bold">{map.players}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-xs bg-background/50 px-3 py-2 rounded border border-border/50">
                      {map.ip}
                    </code>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyIP(map.ip)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 font-bold" size="sm">
                    JOIN NOW
                  </Button>
                  <Button variant="outline" size="sm">
                    <QrCode className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Server Rules */}
          <Card className="p-8 card-brutal">
            <h2 className="text-3xl font-bold mb-6 text-gradient-crimson">Server Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">General Rules</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Max 7 players per tribe</li>
                    <li>• No alliances or teaming (instant ban)</li>
                    <li>• No mesh biting, undermapping, or exploits</li>
                    <li>• English only in global chat</li>
                    <li>• Respect other players - no toxicity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Raid Rules</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ORP activates after 120min offline</li>
                    <li>• Foundation wipe allowed on wipe week</li>
                    <li>• No griefing small bases (under 10 foundations)</li>
                    <li>• No blocking obelisks or cave spawns</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Mods & Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• S+ Structures (Turbo Mode)</li>
                    <li>• Death Helper (corpse recovery)</li>
                    <li>• Auto Engrams</li>
                    <li>• Stack Mod (enhanced stacking)</li>
                    <li>• Custom loot drops</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Wipe Schedule</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full wipe every 4-6 weeks</li>
                    <li>• 48 hour notice before wipe</li>
                    <li>• Blueprints & engrams persist</li>
                    <li>• VIP ranks carry over</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servers;
