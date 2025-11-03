import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Skull, Trophy, DollarSign, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Bounties = () => {
  const activeBounties = [
    {
      id: 1,
      target: "xXDragonSlayerXx",
      tribe: "Blood Raiders",
      reward: "$25 Store Credit",
      reason: "Repeated offline raids on smaller tribes",
      posted: "DragonHunter",
      timeLeft: "3 days",
      difficulty: "Extreme",
      kills: 0,
      status: "Active"
    },
    {
      id: 2,
      target: "AlphaWolf",
      tribe: "Apex Predators",
      reward: "$15 Store Credit",
      reason: "Wiped our tribe during raid event",
      posted: "VengeanceCrew",
      timeLeft: "5 days",
      difficulty: "Hard",
      kills: 1,
      status: "Active"
    },
    {
      id: 3,
      target: "ShadowNinja",
      tribe: "Lone Wolves",
      reward: "$10 Store Credit",
      reason: "Stole our tames during boss fight",
      posted: "JusticeWarriors",
      timeLeft: "2 days",
      difficulty: "Medium",
      kills: 2,
      status: "Hot"
    },
  ];

  const completedBounties = [
    {
      id: 1,
      target: "RaidKing99",
      hunter: "BountyMaster",
      reward: "$20 Store Credit",
      completedAt: "2 days ago",
      proof: "Screenshot + Video"
    },
    {
      id: 2,
      target: "GrieferLord",
      hunter: "JusticeLeague",
      reward: "$30 Store Credit",
      completedAt: "1 week ago",
      proof: "Video Evidence"
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Extreme": return "text-red-600";
      case "Hard": return "text-orange-500";
      case "Medium": return "text-yellow-500";
      default: return "text-green-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Target className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Bounty Board</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hunt down rivals, claim rewards, and settle scores on the battlefield
          </p>
        </div>

        {/* Warning */}
        <Card className="card-brutal p-6 mb-8 border-2 border-yellow-500/50">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-500 text-lg mb-2">Bounty Rules</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Bounties must be claimed with valid proof (screenshot/video of kill)</li>
                <li>• Kills must be legitimate PvP encounters (no offline kills, no exploits)</li>
                <li>• Submit proof within 24 hours of the kill via Discord ticket</li>
                <li>• False claims result in permanent ban from bounty system</li>
                <li>• Bounties cannot exceed $50 store credit value</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">12</div>
            <div className="text-sm text-muted-foreground">Active Bounties</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">47</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">$680</div>
            <div className="text-sm text-muted-foreground">Total Rewards Paid</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-red-500 mb-1">Top</div>
            <div className="text-sm text-muted-foreground">BountyMaster</div>
          </Card>
        </div>

        {/* Post Bounty CTA */}
        <Card className="card-brutal p-6 mb-8 text-center">
          <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Put a Price on Their Head
          </h3>
          <p className="text-muted-foreground mb-4">
            Got a score to settle? Post a bounty and let the best hunters do the work.
          </p>
          <Button className="combat-pulse font-bold">
            Post New Bounty
          </Button>
        </Card>

        {/* Active Bounties */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Skull className="h-8 w-8" />
            Active Bounties
          </h2>
          <div className="space-y-4">
            {activeBounties.map((bounty) => (
              <Card key={bounty.id} className="card-brutal p-6 hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-destructive/20 rounded-lg p-4 flex-shrink-0">
                        <Skull className="h-12 w-12 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-destructive">{bounty.target}</h3>
                          <Badge variant="destructive">{bounty.status}</Badge>
                          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                            {bounty.difficulty}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Tribe: <span className="text-foreground font-bold">{bounty.tribe}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          Reason: <span className="text-foreground">{bounty.reason}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Posted by:</span>{" "}
                            <span className="text-primary font-bold">{bounty.posted}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Claims:</span>{" "}
                            <span className="text-red-500 font-bold">{bounty.kills} kills</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Expires in:</span>{" "}
                            <span className="text-yellow-500 font-bold">{bounty.timeLeft}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-3xl font-bold text-primary mb-2">{bounty.reward}</div>
                    <Button className="combat-pulse font-bold w-full md:w-auto">
                      Claim Bounty
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Bounties */}
        <div>
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            Recently Completed
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {completedBounties.map((bounty) => (
              <Card key={bounty.id} className="card-brutal p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <div className="flex-1">
                    <div className="font-bold text-foreground line-through opacity-60">{bounty.target}</div>
                    <div className="text-sm text-muted-foreground">Eliminated by <span className="text-primary font-bold">{bounty.hunter}</span></div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-500">{bounty.reward}</div>
                    <div className="text-xs text-muted-foreground">{bounty.completedAt}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Proof: {bounty.proof}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <Card className="card-brutal p-8 mt-12 text-center">
          <Target className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Top Bounty Hunters
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { rank: 1, name: "BountyMaster", claims: 12, earned: "$280" },
              { rank: 2, name: "JusticeLeague", claims: 9, earned: "$215" },
              { rank: 3, name: "HeadhunterPro", claims: 7, earned: "$165" },
            ].map((hunter) => (
              <div key={hunter.rank} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  hunter.rank === 1 ? 'text-yellow-500' :
                  hunter.rank === 2 ? 'text-gray-400' :
                  'text-amber-700'
                }`}>
                  #{hunter.rank}
                </div>
                <div className="font-bold text-foreground mb-1">{hunter.name}</div>
                <div className="text-sm text-muted-foreground">{hunter.claims} claims</div>
                <div className="text-primary font-bold">{hunter.earned}</div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Bounties;
