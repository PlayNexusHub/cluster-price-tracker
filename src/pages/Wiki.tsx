import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Search, Zap, Shield, Wrench, Map } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Wiki = () => {
  const categories = [
    {
      icon: Zap,
      title: "PvP Guides",
      color: "text-red-500",
      guides: [
        "Raid Base Design 101",
        "Turret Placement Strategy",
        "Offline Raid Protection Guide",
        "C4 vs Rocket Efficiency",
        "Beach Bob to Alpha Tribe",
      ]
    },
    {
      icon: Shield,
      title: "Breeding & Taming",
      color: "text-green-500",
      guides: [
        "Mutation Stacking Guide",
        "Perfect Stat Breeding",
        "Fast Taming Methods",
        "Boss Fight Lineups",
        "Color Mutation Combos",
      ]
    },
    {
      icon: Wrench,
      title: "Resource Farming",
      color: "text-blue-500",
      guides: [
        "Metal Run Routes",
        "Element Farming Strategies",
        "Polymer Farm Setup",
        "Crystal & Obsidian Locations",
        "Organic Polymer Tricks",
      ]
    },
    {
      icon: Map,
      title: "Map Guides",
      color: "text-yellow-500",
      guides: [
        "The Island Hotspots",
        "Ragnarok Cave Guide",
        "Aberration Metal Runs",
        "Genesis Best Loot",
        "Crystal Isles Hidden Areas",
      ]
    },
  ];

  const featuredGuides = [
    {
      title: "Ultimate Raiding Guide for 7-Man Tribes",
      author: "RaidMaster",
      views: "12.4K",
      updated: "3 days ago",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80"
    },
    {
      title: "Breeding Perfect Gigas in 2025",
      author: "BreederKing",
      views: "8.9K",
      updated: "1 week ago",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&q=80"
    },
    {
      title: "7-Man Tribe Server Takeover Strategy",
      author: "AlphaLeader",
      views: "15.2K",
      updated: "2 days ago",
      difficulty: "Expert",
      image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=400&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <BookOpen className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Onyx Wiki</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guides, strategies, and knowledge base for dominating Onyx servers
          </p>
        </div>

        {/* Search */}
        <Card className="card-brutal p-6 mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search guides, tips, strategies..."
              className="pl-10 text-lg"
            />
          </div>
        </Card>

        {/* Featured Guides */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6">
            Featured Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((guide, idx) => (
              <Card key={idx} className="card-brutal overflow-hidden hover-lift group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 px-3 py-1 rounded-full text-xs font-bold">
                    {guide.difficulty}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2">{guide.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>by {guide.author}</span>
                    <span>{guide.views} views</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Updated {guide.updated}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <Tabs defaultValue="pvp" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="pvp">PvP</TabsTrigger>
            <TabsTrigger value="breeding">Breeding</TabsTrigger>
            <TabsTrigger value="farming">Farming</TabsTrigger>
            <TabsTrigger value="maps">Maps</TabsTrigger>
          </TabsList>

          {categories.map((category, catIdx) => (
            <TabsContent key={catIdx} value={category.title.toLowerCase().split(' ')[0]}>
              <Card className="card-brutal p-8">
                <div className="flex items-center gap-4 mb-6">
                  <category.icon className={`h-12 w-12 ${category.color}`} />
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.guides.map((guide, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      className="justify-start h-auto py-4 text-left hover-lift"
                    >
                      <div>
                        <div className="font-bold text-foreground mb-1">{guide}</div>
                        <div className="text-xs text-muted-foreground">Click to read full guide</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Tips */}
        <Card className="card-brutal p-8 mt-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Quick Tips & Tricks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Always carry multiple sleeping bags for quick respawns",
              "Place hidden bed spawns outside your main base",
              "Use Cryopods to save turret ammo on tames",
              "Metal foundations > Stone for all raid bases",
              "Breed backup tames - never rely on one dino line",
              "Keep Element split across multiple vaults",
              "Use tek sensors for early raid detection",
              "Practice offline with Private Havens",
              "Join Discord for real-time tribe coordination",
            ].map((tip, idx) => (
              <div key={idx} className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Contribute */}
        <Card className="card-brutal p-8 mt-8 text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Contribute to the Wiki
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share your knowledge with the community. Submit guides, strategies, and tips 
            to help fellow survivors dominate the ARK.
          </p>
          <Button className="combat-pulse font-bold">
            Submit a Guide
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Wiki;
