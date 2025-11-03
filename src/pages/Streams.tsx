import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, Users, Eye, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Streams = () => {
  const liveStreamers = [
    {
      name: "RaidMasterPro",
      viewers: 234,
      title: "7v7 Mega Raid on The Island - LIVE!",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
      platform: "Twitch",
      featured: true
    },
    {
      name: "BreederQueen",
      viewers: 156,
      title: "Perfect Giga Mutations - Breeding Guide",
      thumbnail: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&q=80",
      platform: "YouTube",
      featured: false
    },
    {
      name: "PvPGodMode",
      viewers: 89,
      title: "Solo vs Tribe Raids - Insane Plays",
      thumbnail: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=600&q=80",
      platform: "Twitch",
      featured: false
    },
  ];

  const clips = [
    {
      title: "Insane 1v3 Clutch Defense",
      creator: "AlphaWarrior",
      views: "12.4K",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
      votes: 456
    },
    {
      title: "Perfect Raid Execution",
      creator: "TacticalRaider",
      views: "8.9K",
      thumbnail: "https://images.unsplash.com/photo-1571173069043-c635f320e499?w=400&q=80",
      votes: 389
    },
    {
      title: "Epic Base Wipe Montage",
      creator: "DemolitionCrew",
      views: "15.2K",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80",
      votes: 623
    },
    {
      title: "Solo Beach Bob to Alpha",
      creator: "GrindMaster",
      views: "23.1K",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      votes: 891
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Video className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Live Streams & Clips</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch the best Onyx streamers, epic raid highlights, and community clips
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-red-500 mb-1">3</div>
            <div className="text-sm text-muted-foreground">Live Now</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">479</div>
            <div className="text-sm text-muted-foreground">Total Viewers</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">156</div>
            <div className="text-sm text-muted-foreground">Clips This Week</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">23</div>
            <div className="text-sm text-muted-foreground">Partner Streamers</div>
          </Card>
        </div>

        {/* Live Streams */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Radio className="h-8 w-8 text-red-500 animate-pulse" />
            Live Now
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreamers.map((streamer, idx) => (
              <Card key={idx} className={`card-brutal overflow-hidden hover-lift group cursor-pointer ${
                streamer.featured ? 'ring-2 ring-primary' : ''
              }`}>
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={streamer.thumbnail}
                    alt={streamer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500 animate-pulse">
                    <Radio className="mr-1 h-3 w-3" />
                    LIVE
                  </Badge>
                  <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1">
                    <Eye className="h-3 w-3 text-white" />
                    <span className="text-white text-xs font-bold">{streamer.viewers}</span>
                  </div>
                  {streamer.featured && (
                    <Badge className="absolute bottom-2 left-2 bg-primary">
                      FEATURED
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2">{streamer.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-bold">{streamer.name}</span>
                    <Badge variant="outline">{streamer.platform}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Clips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Video className="h-8 w-8" />
            Top Clips This Week
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clips.map((clip, idx) => (
              <Card key={idx} className="card-brutal overflow-hidden hover-lift group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="h-16 w-16 text-primary" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-bold">
                    {clip.views} views
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-1 line-clamp-2 text-sm">{clip.title}</h3>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{clip.creator}</span>
                    <span className="text-primary font-bold">↑ {clip.votes}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <Card className="card-brutal p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/20 rounded-full p-6 flex-shrink-0">
              <Users className="h-16 w-16 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Become a Partner Streamer
              </h3>
              <p className="text-muted-foreground mb-4">
                Get featured on our homepage, earn store credit for viewers, and receive exclusive perks. 
                Requirements: 50+ avg viewers, stream Onyx 3+ times/week.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$500+</div>
                  <div className="text-xs text-muted-foreground">Monthly Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Free VIP</div>
                  <div className="text-xs text-muted-foreground">Legend Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Priority</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <Button className="combat-pulse font-bold flex-shrink-0">
              Apply Now
            </Button>
          </div>
        </Card>

        {/* Submit Clip */}
        <Card className="card-brutal p-8 mt-8 text-center">
          <Video className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Submit Your Clip
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Got an insane play? Epic raid? Funny moment? Submit your clip for a chance to be 
            featured and win monthly prizes. Top 3 clips each month win store credit!
          </p>
          <Button className="combat-pulse font-bold">
            Upload Clip
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Streams;
