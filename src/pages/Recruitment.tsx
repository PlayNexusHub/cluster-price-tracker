import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MessageSquare, Trophy, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Recruitment = () => {
  const recruitments = [
    {
      id: 1,
      tribeName: "Blood Raiders",
      currentMembers: 5,
      maxMembers: 7,
      looking: "2 experienced PvP raiders",
      playstyle: "Hardcore Raid",
      region: "NA",
      requirements: "18+, mic required, 4+ hours daily, previous PvP experience",
      contact: "Discord: BloodLeader#1234",
      tags: ["Hardcore", "Daily Players", "Experienced"],
      posted: "2 hours ago"
    },
    {
      id: 2,
      tribeName: "Casual Warriors",
      currentMembers: 3,
      maxMembers: 7,
      looking: "3-4 chill players for weekend raids",
      playstyle: "Semi-Casual",
      region: "EU",
      requirements: "Mic preferred, weekend availability, friendly attitude",
      contact: "Discord: CasualChief#5678",
      tags: ["Casual", "Weekends", "Friendly"],
      posted: "5 hours ago"
    },
    {
      id: 3,
      tribeName: "Alpha Predators",
      currentMembers: 6,
      maxMembers: 7,
      looking: "1 breeding specialist",
      playstyle: "Competitive",
      region: "NA/EU",
      requirements: "Expert breeder, stats knowledge, active 30+ hours/week",
      contact: "Discord: AlphaBreed#9999",
      tags: ["Breeding Focus", "Competitive", "Full-Time"],
      posted: "1 day ago"
    },
    {
      id: 4,
      tribeName: "Solo Squad",
      currentMembers: 1,
      maxMembers: 7,
      looking: "5-6 motivated players to build from scratch",
      playstyle: "Fresh Start",
      region: "NA",
      requirements: "New or experienced, willing to grind, voice chat",
      contact: "Discord: SoloKing#0001",
      tags: ["Fresh Start", "Building", "All Welcome"],
      posted: "3 days ago"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Users className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Tribe Recruitment</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your perfect tribe or recruit warriors for your squad
          </p>
        </div>

        {/* Search & Filter */}
        <Card className="card-brutal p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by tribe name, playstyle, region..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
            <Button className="combat-pulse font-bold">Post Recruitment</Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">47</div>
            <div className="text-sm text-muted-foreground">Active Postings</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">156</div>
            <div className="text-sm text-muted-foreground">Players Looking</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">23</div>
            <div className="text-sm text-muted-foreground">Filled This Week</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">89%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </Card>
        </div>

        {/* Recruitment Listings */}
        <div className="space-y-6 mb-12">
          {recruitments.map((rec) => (
            <Card key={rec.id} className="card-brutal p-6 hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{rec.tribeName}</h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {rec.currentMembers}/{rec.maxMembers} Members
                    </Badge>
                  </div>
                  <p className="text-lg text-primary font-bold mb-3">
                    Looking for: {rec.looking}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {rec.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-2">{rec.posted}</div>
                  <Button className="combat-pulse font-bold">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Playstyle:</div>
                  <div className="text-foreground font-bold">{rec.playstyle}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Region:</div>
                  <div className="text-foreground font-bold">{rec.region}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-muted-foreground mb-1">Requirements:</div>
                  <div className="text-foreground">{rec.requirements}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-muted-foreground mb-1">Contact:</div>
                  <div className="text-primary font-bold">{rec.contact}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Looking for Tribe Section */}
        <Card className="card-brutal p-8 mb-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Players Looking for Tribes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "xXSniperXx", hours: "500+", role: "PvP Specialist", availability: "Daily 6PM-12AM EST" },
              { name: "BreederQueen", hours: "800+", role: "Breeding Expert", availability: "Weekends" },
              { name: "FarmBot2000", hours: "300+", role: "Resource Farmer", availability: "Flexible" },
              { name: "RaidMaster", hours: "1200+", role: "Raid Leader", availability: "Daily 8PM-2AM" },
              { name: "BuilderPro", hours: "450+", role: "Base Designer", availability: "Afternoons" },
              { name: "TamingKing", hours: "600+", role: "Taming Specialist", availability: "Daily" },
            ].map((player, idx) => (
              <Card key={idx} className="p-4 bg-background/50 hover-lift">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-bold text-foreground">{player.name}</div>
                    <div className="text-sm text-primary">{player.role}</div>
                  </div>
                  <Badge variant="outline">{player.hours}</Badge>
                </div>
                <div className="text-xs text-muted-foreground mb-3">{player.availability}</div>
                <Button size="sm" variant="outline" className="w-full">
                  Invite to Tribe
                </Button>
              </Card>
            ))}
          </div>
        </Card>

        {/* Tips */}
        <Card className="card-brutal p-8 text-center">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Recruitment Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-bold text-primary mb-2">Be Specific</h4>
              <p className="text-sm text-muted-foreground">
                Clearly state what roles you need, playstyle expectations, and time commitments
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Set Requirements</h4>
              <p className="text-sm text-muted-foreground">
                List age, experience, activity hours to filter serious applicants
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Stay Active</h4>
              <p className="text-sm text-muted-foreground">
                Update your posting regularly and respond quickly to interested players
              </p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Recruitment;
