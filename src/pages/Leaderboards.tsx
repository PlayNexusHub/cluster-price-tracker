import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Skull, Target, Flame } from "lucide-react";

const Leaderboards = () => {
  const topKillers = [
    { rank: 1, name: "ShadowReaper", tribe: "Crimson Legion", kills: 1247, deaths: 89 },
    { rank: 2, name: "VoidHunter", tribe: "Dark Alliance", kills: 1156, deaths: 112 },
    { rank: 3, name: "IronFist", tribe: "Steel Warriors", kills: 1089, deaths: 94 },
    { rank: 4, name: "GhostRider", tribe: "Phantom Squad", kills: 987, deaths: 101 },
    { rank: 5, name: "BloodWolf", tribe: "Red Pack", kills: 923, deaths: 87 },
    { rank: 6, name: "StormBreaker", tribe: "Thunder Tribe", kills: 876, deaths: 103 },
    { rank: 7, name: "NightStalker", tribe: "Shadow Hunters", kills: 834, deaths: 95 },
    { rank: 8, name: "DeathBringer", tribe: "Doom Squad", kills: 812, deaths: 88 },
    { rank: 9, name: "WarLord", tribe: "Battle Kings", kills: 789, deaths: 92 },
    { rank: 10, name: "RageKiller", tribe: "Fury Legion", kills: 756, deaths: 85 }
  ];

  const topTribes = [
    { rank: 1, name: "Crimson Legion", members: 7, kills: 8934, raids: 234 },
    { rank: 2, name: "Dark Alliance", members: 7, kills: 8512, raids: 198 },
    { rank: 3, name: "Steel Warriors", members: 7, kills: 7845, raids: 187 },
    { rank: 4, name: "Phantom Squad", members: 6, kills: 7234, raids: 176 },
    { rank: 5, name: "Red Pack", members: 7, kills: 6987, raids: 165 }
  ];

  const raidMVPs = [
    { rank: 1, name: "ShadowReaper", elementLooted: "156k", structuresDestroyed: 2341, bases: 45 },
    { rank: 2, name: "IronFist", elementLooted: "142k", structuresDestroyed: 2198, bases: 41 },
    { rank: 3, name: "VoidHunter", elementLooted: "134k", structuresDestroyed: 2087, bases: 39 },
    { rank: 4, name: "BloodWolf", elementLooted: "128k", structuresDestroyed: 1976, bases: 37 },
    { rank: 5, name: "GhostRider", elementLooted: "121k", structuresDestroyed: 1845, bases: 35 }
  ];

  const wipeChampions = [
    { rank: 1, name: "Crimson Legion", survived: "4 wipes", totalDays: 156 },
    { rank: 2, name: "Dark Alliance", survived: "4 wipes", totalDays: 142 },
    { rank: 3, name: "Steel Warriors", survived: "3 wipes", totalDays: 98 },
    { rank: 4, name: "Phantom Squad", survived: "3 wipes", totalDays: 89 },
    { rank: 5, name: "Red Pack", survived: "3 wipes", totalDays: 76 }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-slate-400";
    if (rank === 3) return "text-amber-700";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-battlefield-dark to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-gradient-crimson glow-crimson">LEADERBOARDS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The elite warriors of Onyx. Updated live with every kill.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="font-medium">Glory Awaits</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                <span className="font-medium">Live Stats</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">Weekly Resets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="killers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-card/50">
              <TabsTrigger value="killers">
                <Skull className="h-4 w-4 mr-2" />
                Top Killers
              </TabsTrigger>
              <TabsTrigger value="tribes">
                <Trophy className="h-4 w-4 mr-2" />
                Top Tribes
              </TabsTrigger>
              <TabsTrigger value="raids">
                <Target className="h-4 w-4 mr-2" />
                Raid MVPs
              </TabsTrigger>
              <TabsTrigger value="survivors">
                <Flame className="h-4 w-4 mr-2" />
                Wipe Champions
              </TabsTrigger>
            </TabsList>

            {/* Top Killers */}
            <TabsContent value="killers">
              <Card className="p-6 card-brutal">
                <div className="space-y-4">
                  {topKillers.map((player) => (
                    <div 
                      key={player.rank}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className={`text-3xl font-black w-12 text-center ${getRankColor(player.rank)}`}>
                        {getRankIcon(player.rank)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{player.name}</div>
                        <div className="text-sm text-muted-foreground">{player.tribe}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary/20 text-primary">
                            <Skull className="h-3 w-3 mr-1" />
                            {player.kills} Kills
                          </Badge>
                          <Badge variant="outline">
                            {player.deaths} Deaths
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          K/D: {(player.kills / player.deaths).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Top Tribes */}
            <TabsContent value="tribes">
              <Card className="p-6 card-brutal">
                <div className="space-y-4">
                  {topTribes.map((tribe) => (
                    <div 
                      key={tribe.rank}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className={`text-3xl font-black w-12 text-center ${getRankColor(tribe.rank)}`}>
                        {getRankIcon(tribe.rank)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{tribe.name}</div>
                        <div className="text-sm text-muted-foreground">{tribe.members} Members</div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-wrap gap-2 justify-end mb-1">
                          <Badge className="bg-primary/20 text-primary">
                            {tribe.kills.toLocaleString()} Kills
                          </Badge>
                          <Badge variant="outline">
                            {tribe.raids} Raids
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Raid MVPs */}
            <TabsContent value="raids">
              <Card className="p-6 card-brutal">
                <div className="space-y-4">
                  {raidMVPs.map((raider) => (
                    <div 
                      key={raider.rank}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className={`text-3xl font-black w-12 text-center ${getRankColor(raider.rank)}`}>
                        {getRankIcon(raider.rank)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{raider.name}</div>
                        <div className="text-sm text-muted-foreground">{raider.bases} Bases Wiped</div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Badge className="bg-primary/20 text-primary">
                            {raider.elementLooted} Element
                          </Badge>
                          <Badge variant="outline">
                            {raider.structuresDestroyed.toLocaleString()} Structures
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Wipe Champions */}
            <TabsContent value="survivors">
              <Card className="p-6 card-brutal">
                <div className="space-y-4">
                  {wipeChampions.map((champion) => (
                    <div 
                      key={champion.rank}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className={`text-3xl font-black w-12 text-center ${getRankColor(champion.rank)}`}>
                        {getRankIcon(champion.rank)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{champion.name}</div>
                        <div className="text-sm text-muted-foreground">Wipe Dominance</div>
                      </div>
                      <div className="text-right">
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Badge className="bg-primary/20 text-primary">
                            <Flame className="h-3 w-3 mr-1" />
                            {champion.survived}
                          </Badge>
                          <Badge variant="outline">
                            {champion.totalDays} Days Total
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 card-brutal text-center">
              <Skull className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-primary">127,534</div>
              <div className="text-sm text-muted-foreground">Total Kills</div>
            </Card>
            <Card className="p-6 card-brutal text-center">
              <Target className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-primary">3,456</div>
              <div className="text-sm text-muted-foreground">Raids Completed</div>
            </Card>
            <Card className="p-6 card-brutal text-center">
              <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-primary">187</div>
              <div className="text-sm text-muted-foreground">Active Tribes</div>
            </Card>
            <Card className="p-6 card-brutal text-center">
              <Flame className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-primary">4</div>
              <div className="text-sm text-muted-foreground">Wipes Survived</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leaderboards;
