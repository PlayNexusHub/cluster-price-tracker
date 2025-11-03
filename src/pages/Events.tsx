import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Trophy, Zap, Users, Gift, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Mega Raid Weekend",
      type: "PvP Event",
      startDate: "Dec 15, 2025",
      endDate: "Dec 17, 2025",
      countdown: "2 days 14 hours",
      description: "2x raid damage, halved ORP timers, exclusive loot drops",
      rewards: "$500 Store Credit Pool + Unique Titles",
      participants: 156,
      icon: Zap,
      color: "text-red-500"
    },
    {
      id: 2,
      title: "Breeding Bonanza",
      type: "Breeding Event",
      startDate: "Dec 20, 2025",
      endDate: "Dec 22, 2025",
      countdown: "7 days 4 hours",
      description: "3x breeding rates, 2x maturation speed, guaranteed mutation chance",
      rewards: "Premium Breeding Pack + Custom Dino Skins",
      participants: 89,
      icon: Gift,
      color: "text-green-500"
    },
    {
      id: 3,
      title: "Season 4 Championships",
      type: "Tournament",
      startDate: "Dec 30, 2025",
      endDate: "Jan 1, 2026",
      countdown: "17 days 8 hours",
      description: "7v7 tournament, winner takes all, bracketed elimination",
      rewards: "$1,000 Grand Prize + Champion Trophies",
      participants: 234,
      icon: Trophy,
      color: "text-yellow-500"
    },
  ];

  const activeEvents = [
    {
      title: "Happy Hour XP Boost",
      type: "Daily",
      timeLeft: "3h 24m",
      bonus: "2x XP & Harvest",
      icon: Zap
    },
    {
      title: "Weekend Flash Sale",
      type: "Store Event",
      timeLeft: "1d 12h",
      bonus: "30% Off All VIP Ranks",
      icon: Gift
    },
  ];

  const pastEvents = [
    {
      title: "Season 3 Finale Tournament",
      date: "Nov 30, 2025",
      winner: "Blood Raiders",
      prize: "$800 Store Credit"
    },
    {
      title: "Halloween Spooky Raids",
      date: "Oct 31, 2025",
      winner: "Shadow Legion",
      prize: "Exclusive Skins Pack"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calendar className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Events & Tournaments</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete in exclusive events, win massive prizes, and dominate the competition
          </p>
        </div>

        {/* Active Now */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 animate-pulse" />
            Active Now
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activeEvents.map((event, idx) => (
              <Card key={idx} className="card-brutal p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 rounded-full p-4">
                    <event.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2">{event.type}</Badge>
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <div className="text-muted-foreground mb-3">{event.bonus}</div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-primary font-bold">{event.timeLeft} remaining</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Calendar className="h-8 w-8" />
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-brutal p-8 hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`bg-primary/10 rounded-2xl p-6 flex items-center justify-center w-32 h-32`}>
                      <event.icon className={`h-16 w-16 ${event.color}`} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2">{event.type}</Badge>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{event.title}</h3>
                        <div className="text-sm text-muted-foreground">
                          {event.startDate} - {event.endDate}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">Starts In</div>
                        <div className="text-2xl font-bold text-primary">{event.countdown}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                        <div className="text-xs text-muted-foreground mb-1 uppercase font-bold">Rewards</div>
                        <div className="text-foreground font-bold">{event.rewards}</div>
                      </div>
                      <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                        <div className="text-xs text-muted-foreground mb-1 uppercase font-bold">Participants</div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          <span className="text-foreground font-bold">{event.participants} Registered</span>
                        </div>
                      </div>
                    </div>

                    <Button className="combat-pulse font-bold w-full md:w-auto">
                      Register Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <Card className="card-brutal p-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            Past Champions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {pastEvents.map((event, idx) => (
              <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground">{event.title}</h3>
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{event.date}</div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Winner:</span>{" "}
                  <span className="text-primary font-bold">{event.winner}</span>
                </div>
                <div className="text-sm text-green-500 font-bold">{event.prize}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Event Rules */}
        <Card className="card-brutal p-8 mt-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Event Participation Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-primary mb-3">✓ Allowed</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All server tribe members can participate</li>
                <li>• Use event-specific gear and bonuses</li>
                <li>• Register up to 24 hours before start</li>
                <li>• Team up with allies for team events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-destructive mb-3">✗ Prohibited</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• No exploits or cheats (instant DQ + ban)</li>
                <li>• No late registrations after cutoff</li>
                <li>• No cross-teaming in solo events</li>
                <li>• No harassment or toxic behavior</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
