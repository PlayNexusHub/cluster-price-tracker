import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image, Video, Trophy, ThumbsUp, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const screenshots = [
    {
      id: 1,
      title: "Epic Giga Raid on Metal Base",
      author: "DragonSlayer",
      votes: 247,
      category: "Raids",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80"
    },
    {
      id: 2,
      title: "5v7 Beach Battle Victory",
      author: "AlphaWolf",
      votes: 189,
      category: "PvP",
      image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=800&q=80"
    },
    {
      id: 3,
      title: "Perfect Wyvern Mutations",
      author: "BreederKing",
      votes: 156,
      category: "Breeding",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80"
    },
    {
      id: 4,
      title: "Mega Tribe Base Tour",
      author: "BuilderPro",
      votes: 134,
      category: "Bases",
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&q=80"
    },
    {
      id: 5,
      title: "Solo Defense Against 4-Man",
      author: "SoloWarrior",
      votes: 298,
      category: "PvP",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80"
    },
    {
      id: 6,
      title: "Alpha Reaper King Tame",
      author: "BeastMaster",
      votes: 112,
      category: "Taming",
      image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80"
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Full Server Wipe Montage",
      author: "PvPGod",
      views: "12.4K",
      duration: "8:45",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80"
    },
    {
      id: 2,
      title: "7-Man Raid Highlights",
      author: "BloodRaiders",
      views: "8.2K",
      duration: "12:30",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
    },
    {
      id: 3,
      title: "Best Clutch Moments of Season 3",
      author: "CinematicKills",
      views: "15.7K",
      duration: "10:15",
      thumbnail: "https://images.unsplash.com/photo-1571173069043-c635f320e499?w=800&q=80"
    },
  ];

  const memes = [
    {
      id: 1,
      title: "When ORP saves your base 😂",
      author: "MemeLord",
      votes: 456,
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80"
    },
    {
      id: 2,
      title: "Me after 50 failed mutations",
      author: "BreederFail",
      votes: 389,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
    },
    {
      id: 3,
      title: "Admins watching exploiters",
      author: "JusticeMeme",
      votes: 267,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Image className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Community Gallery</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Epic moments, legendary raids, and memes from the Onyx community
          </p>
        </div>

        {/* Upload CTA */}
        <Card className="card-brutal p-6 mb-8 text-center">
          <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Share Your Epic Moments
          </h3>
          <p className="text-muted-foreground mb-4">
            Upload screenshots, clips, or memes. Top voted content wins monthly prizes!
          </p>
          <Button className="combat-pulse font-bold">
            Upload Content
          </Button>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="screenshots" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="memes">Memes</TabsTrigger>
          </TabsList>

          {/* Screenshots */}
          <TabsContent value="screenshots">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((item) => (
                <Card key={item.id} className="card-brutal overflow-hidden hover-lift group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2">{item.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {item.author}</span>
                      <div className="flex items-center gap-1 text-primary">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="font-bold">{item.votes}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="card-brutal overflow-hidden hover-lift group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Video className="h-16 w-16 text-primary" />
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/80">{video.duration}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {video.author}</span>
                      <span className="text-primary font-bold">{video.views} views</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Memes */}
          <TabsContent value="memes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memes.map((meme) => (
                <Card key={meme.id} className="card-brutal overflow-hidden hover-lift group">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={meme.image} 
                      alt={meme.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-yellow-500">😂 MEME</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2">{meme.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">by {meme.author}</span>
                      <div className="flex items-center gap-1 text-primary">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="font-bold">{meme.votes}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Monthly Contest */}
        <Card className="card-brutal p-8 mt-12 text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Monthly Content Contest
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Top 3 most voted submissions each month win prizes: 1st Place = $50 Store Credit, 
            2nd Place = $25, 3rd Place = $10 + Featured Profile Badge
          </p>
          <div className="flex items-center justify-center gap-4">
            <div>
              <div className="text-3xl font-bold text-primary">15</div>
              <div className="text-sm text-muted-foreground">Days Left</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Submissions</div>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
