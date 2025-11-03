import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Trophy, Swords, Shield, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Tribes = () => {
  const topTribes = [
    {
      rank: 1,
      name: "Blood Raiders",
      members: 7,
      kills: 1247,
      raids: 89,
      defenses: 34,
      points: 15420,
      emblem: "🔴",
      status: "Active",
      leader: "xXDragonSlayerXx"
    },
    {
      rank: 2,
      name: "Apex Predators",
      members: 7,
      kills: 1189,
      raids: 76,
      defenses: 41,
      points: 14980,
      emblem: "⚡",
      status: "Active",
      leader: "AlphaWolf"
    },
    {
      rank: 3,
      name: "Shadow Legion",
      members: 6,
      kills: 1056,
      raids: 68,
      defenses: 29,
      points: 13240,
      emblem: "🌙",
      status: "Active",
      leader: "NightStalker"
    },
    {
      rank: 4,
      name: "Iron Fist",
      members: 7,
      kills: 942,
      raids: 61,
      defenses: 38,
      points: 12100,
      emblem: "⚔️",
      status: "Active",
      leader: "IronMike88"
    },
    {
      rank: 5,
      name: "Venom Squad",
      members: 5,
      kills: 876,
      raids: 54,
      defenses: 22,
      points: 10890,
      emblem: "🐍",
      status: "Recruiting",
      leader: "ToxicViper"
    },
  ];

  const stats = [
    { icon: Users, label: "Total Tribes", value: "127", color: "text-blue-500" },
    { icon: Swords, label: "Active Wars", value: "23", color: "text-red-500" },
    { icon: Shield, label: "Alliances", value: "8", color: "text-green-500" },
    { icon: Trophy, label: "Season Winners", value: "3", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Users className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Tribe Rankings</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most dominant 7-man tribes on Onyx. Will you rise to the top?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx} className="card-brutal p-6 text-center hover-lift">
              <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Top Tribes Table */}
        <Card className="card-brutal p-8 mb-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            Top Tribes - Current Season
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 text-muted-foreground font-bold">Rank</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-bold">Tribe</th>
                  <th className="text-left py-4 px-4 text-muted-foreground font-bold">Leader</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Members</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Kills</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Raids</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Defenses</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Points</th>
                  <th className="text-center py-4 px-4 text-muted-foreground font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {topTribes.map((tribe) => (
                  <tr 
                    key={tribe.rank} 
                    className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {tribe.rank <= 3 && (
                          <Award className={`h-6 w-6 ${
                            tribe.rank === 1 ? 'text-yellow-500' : 
                            tribe.rank === 2 ? 'text-gray-400' : 
                            'text-amber-700'
                          }`} />
                        )}
                        <span className="text-2xl font-bold text-primary">#{tribe.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tribe.emblem}</span>
                        <span className="font-bold text-foreground">{tribe.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{tribe.leader}</td>
                    <td className="py-4 px-4 text-center text-foreground font-bold">{tribe.members}/7</td>
                    <td className="py-4 px-4 text-center text-red-500 font-bold">{tribe.kills}</td>
                    <td className="py-4 px-4 text-center text-orange-500 font-bold">{tribe.raids}</td>
                    <td className="py-4 px-4 text-center text-green-500 font-bold">{tribe.defenses}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-bold text-primary">{tribe.points.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Badge variant={tribe.status === "Active" ? "default" : "secondary"}>
                        {tribe.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {topTribes.map((tribe) => (
              <Card key={tribe.rank} className="p-4 bg-background/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {tribe.rank <= 3 && (
                      <Award className={`h-6 w-6 ${
                        tribe.rank === 1 ? 'text-yellow-500' : 
                        tribe.rank === 2 ? 'text-gray-400' : 
                        'text-amber-700'
                      }`} />
                    )}
                    <span className="text-3xl">{tribe.emblem}</span>
                    <div>
                      <div className="font-bold text-foreground">{tribe.name}</div>
                      <div className="text-xs text-muted-foreground">#{tribe.rank} • {tribe.leader}</div>
                    </div>
                  </div>
                  <Badge variant={tribe.status === "Active" ? "default" : "secondary"}>
                    {tribe.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-muted-foreground">Members:</span> <span className="font-bold text-foreground">{tribe.members}/7</span></div>
                  <div><span className="text-muted-foreground">Points:</span> <span className="font-bold text-primary">{tribe.points.toLocaleString()}</span></div>
                  <div><span className="text-muted-foreground">Kills:</span> <span className="font-bold text-red-500">{tribe.kills}</span></div>
                  <div><span className="text-muted-foreground">Raids:</span> <span className="font-bold text-orange-500">{tribe.raids}</span></div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Register Tribe CTA */}
        <Card className="card-brutal p-8 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Register Your Tribe
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Submit your tribe for official ranking. Get featured on the leaderboards, compete in tournaments, 
            and prove you're the most dominant force on Onyx.
          </p>
          <Button className="combat-pulse font-bold">
            Register Tribe Now
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Tribes;
