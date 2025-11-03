import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Lock, CheckCircle, Star, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SeasonPass = () => {
  const tiers = [
    { level: 1, xp: 100, free: "Starter Kit", premium: "Premium Starter Kit + 500 Points", unlocked: true },
    { level: 2, xp: 250, free: "Common Dino", premium: "Rare Dino + Saddle Blueprint", unlocked: true },
    { level: 3, xp: 500, free: "Resource Pack", premium: "Elite Resource Pack + 1k Element", unlocked: true },
    { level: 4, xp: 750, free: "Basic Blueprint", premium: "Ascendant Blueprint + Armor Set", unlocked: false },
    { level: 5, xp: 1000, free: "Profile Badge", premium: "Exclusive Badge + Custom Emblem", unlocked: false },
    { level: 10, xp: 2500, free: "Epic Dino", premium: "Legendary Dino + Perfect Stats", unlocked: false },
    { level: 15, xp: 5000, free: "Advanced Tools", premium: "Master Craftsman Set + 10k Points", unlocked: false },
    { level: 20, xp: 10000, free: "Rare Skin", premium: "Ultra Rare Skin Collection", unlocked: false },
    { level: 25, xp: 15000, free: "Title: Survivor", premium: "Title: Season Champion + Unique Frame", unlocked: false },
    { level: 50, xp: 50000, free: "Master Reward", premium: "Season Ultimate Pack + $50 Store Credit", unlocked: false },
  ];

  const challenges = [
    { name: "Kill 100 Wild Dinos", xp: 500, progress: 67, completed: false },
    { name: "Tame 10 Level 150 Creatures", xp: 1000, progress: 40, completed: false },
    { name: "Raid 5 Enemy Bases", xp: 2500, progress: 80, completed: false },
    { name: "Breed 20 Mutations", xp: 1500, progress: 100, completed: true },
    { name: "Defend 3 Raids Successfully", xp: 2000, progress: 33, completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Season 4 Battle Pass</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete challenges, earn XP, unlock exclusive rewards. Free & Premium tiers available.
          </p>
        </div>

        {/* Current Progress */}
        <Card className="card-brutal p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl font-bold text-primary">12</div>
                <div>
                  <div className="text-sm text-muted-foreground">Current Level</div>
                  <div className="text-2xl font-bold text-foreground">3,450 / 5,000 XP</div>
                </div>
              </div>
              <Progress value={69} className="h-4 mb-2" />
              <div className="text-sm text-muted-foreground">69% to Level 13</div>
            </div>
            <div className="text-center">
              <Badge className="mb-2 text-lg px-4 py-2">Premium Pass Active</Badge>
              <div className="text-sm text-muted-foreground">34 days remaining</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-1">23</div>
              <div className="text-sm text-muted-foreground">Rewards Unlocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-1">47</div>
              <div className="text-sm text-muted-foreground">Challenges Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">156</div>
              <div className="text-sm text-muted-foreground">Hours Played</div>
            </div>
          </div>
        </Card>

        {/* Purchase Premium */}
        <Card className="card-brutal p-6 mb-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 border-primary/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Star className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Upgrade to Premium Pass</h3>
                <p className="text-muted-foreground">Unlock all premium rewards + bonus XP boost</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$14.99</div>
              <Button className="combat-pulse font-bold">Upgrade Now</Button>
            </div>
          </div>
        </Card>

        {/* Reward Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Reward Tiers
          </h2>
          <div className="space-y-4">
            {tiers.map((tier) => (
              <Card 
                key={tier.level} 
                className={`card-brutal p-6 ${tier.unlocked ? 'border-primary/50' : 'opacity-60'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-32">
                    {tier.unlocked ? (
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    ) : (
                      <Lock className="h-8 w-8 text-muted-foreground" />
                    )}
                    <div>
                      <div className="text-2xl font-bold text-primary">Lv {tier.level}</div>
                      <div className="text-xs text-muted-foreground">{tier.xp} XP</div>
                    </div>
                  </div>

                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                      <div className="text-xs text-muted-foreground mb-1 uppercase font-bold">Free</div>
                      <div className="text-foreground font-bold">{tier.free}</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-lg border border-primary/30">
                      <div className="text-xs text-primary mb-1 uppercase font-bold flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Premium
                      </div>
                      <div className="text-foreground font-bold">{tier.premium}</div>
                    </div>
                  </div>

                  {tier.unlocked && (
                    <Button size="sm" className="md:w-32">Claim</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <Card className="card-brutal p-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8" />
            Daily & Weekly Challenges
          </h2>
          <div className="space-y-4">
            {challenges.map((challenge, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border ${
                  challenge.completed 
                    ? 'bg-green-500/10 border-green-500/50' 
                    : 'bg-background/50 border-border/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {challenge.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                    <span className="font-bold text-foreground">{challenge.name}</span>
                  </div>
                  <Badge variant={challenge.completed ? "default" : "outline"}>
                    +{challenge.xp} XP
                  </Badge>
                </div>
                <Progress value={challenge.progress} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">{challenge.progress}% Complete</div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SeasonPass;
