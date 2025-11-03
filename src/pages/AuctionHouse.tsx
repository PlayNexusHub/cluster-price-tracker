import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gavel, TrendingUp, Clock, Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuctionHouse = () => {
  const liveAuctions = [
    {
      id: 1,
      item: "Alpha Rex - 150 Perfect Tame",
      seller: "BreederKing",
      currentBid: "$45",
      buyNow: "$75",
      timeLeft: "2h 34m",
      bids: 12,
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&q=80",
      stats: "HP: 25k, Melee: 800%, Saddle Included"
    },
    {
      id: 2,
      item: "Ascendant Rocket Launcher BP",
      seller: "RaidMaster",
      currentBid: "$28",
      buyNow: "$50",
      timeLeft: "5h 12m",
      bids: 8,
      image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=400&q=80",
      stats: "282% Damage, 420 Durability"
    },
    {
      id: 3,
      item: "50k Element Stack",
      seller: "FarmBot",
      currentBid: "$22",
      buyNow: "$40",
      timeLeft: "1h 45m",
      bids: 15,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      stats: "Pure Element, Instant Transfer"
    },
    {
      id: 4,
      item: "Perfect Giga Breeding Pair",
      seller: "AlphaTribe",
      currentBid: "$65",
      buyNow: "$120",
      timeLeft: "12h 20m",
      bids: 23,
      image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&q=80",
      stats: "Mutations: 40/40, Color Mutations"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Gavel className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Auction House</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buy and sell premium dinos, blueprints, and resources. Secure player-to-player trading.
          </p>
        </div>

        {/* Search & Actions */}
        <Card className="card-brutal p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search auctions..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button className="combat-pulse font-bold">Create Auction</Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">47</div>
            <div className="text-sm text-muted-foreground">Live Auctions</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">$2.4K</div>
            <div className="text-sm text-muted-foreground">Today's Volume</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">156</div>
            <div className="text-sm text-muted-foreground">Completed Today</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Secure Trading</div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="live">Live Auctions</TabsTrigger>
            <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            <TabsTrigger value="my">My Auctions</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="live">
            <div className="grid md:grid-cols-2 gap-6">
              {liveAuctions.map((auction) => (
                <Card key={auction.id} className="card-brutal overflow-hidden hover-lift">
                  <div className="relative aspect-video">
                    <img 
                      src={auction.image} 
                      alt={auction.item}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      <Clock className="mr-1 h-3 w-3" />
                      {auction.timeLeft}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{auction.item}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{auction.stats}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Current Bid</div>
                        <div className="text-2xl font-bold text-primary">{auction.currentBid}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Buy Now</div>
                        <div className="text-2xl font-bold text-green-500">{auction.buyNow}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-muted-foreground">Seller: <span className="text-primary font-bold">{auction.seller}</span></span>
                      <span className="text-muted-foreground">{auction.bids} bids</span>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 combat-pulse font-bold">Place Bid</Button>
                      <Button variant="outline" className="flex-1">Buy Now</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ending">
            <div className="text-center py-12">
              <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Ending in Next Hour</h3>
              <p className="text-muted-foreground">Check back soon for last-minute deals!</p>
            </div>
          </TabsContent>

          <TabsContent value="my">
            <div className="text-center py-12">
              <Gavel className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Your Auctions</h3>
              <p className="text-muted-foreground mb-6">Create your first auction to start trading</p>
              <Button className="combat-pulse font-bold">Create Auction</Button>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Transaction History</h3>
              <p className="text-muted-foreground">Your completed trades will appear here</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* How It Works */}
        <Card className="card-brutal p-8 mt-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            How Auction House Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">List Your Item</h3>
              <p className="text-sm text-muted-foreground">
                Create auction with starting bid, buy-now price, and duration
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Escrow Protection</h3>
              <p className="text-sm text-muted-foreground">
                Items held securely until payment confirmed - no scams
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">Instant Transfer</h3>
              <p className="text-sm text-muted-foreground">
                Winner receives item in-game automatically via redemption code
              </p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default AuctionHouse;
