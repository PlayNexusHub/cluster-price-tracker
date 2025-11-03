import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Map, Crosshair, Users, Zap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LiveMap = () => {
  const heatmapData = [
    { map: "The Island", raids: 23, kills: 156, hotspot: "South Beaches", danger: "High" },
    { map: "Ragnarok", raids: 18, kills: 134, hotspot: "Viking Bay", danger: "Extreme" },
    { map: "Aberration", raids: 15, kills: 98, hotspot: "Blue Zone", danger: "Medium" },
    { map: "Extinction", raids: 12, kills: 87, hotspot: "City Center", danger: "High" },
    { map: "Genesis", raids: 9, kills: 76, hotspot: "Volcano", danger: "Medium" },
  ];

  const recentActivity = [
    {
      event: "Mega Raid",
      map: "The Island",
      location: "South Beach 50.3, 48.9",
      tribes: "Blood Raiders vs Shadow Legion",
      time: "3 min ago",
      status: "Active"
    },
    {
      event: "Base Wiped",
      map: "Ragnarok",
      location: "Viking Bay 23.4, 67.2",
      tribes: "Apex Predators raided Solo Tribe",
      time: "12 min ago",
      status: "Completed"
    },
    {
      event: "PvP Battle",
      map: "Aberration",
      location: "Blue Zone 45.1, 34.8",
      tribes: "4v4 Skirmish",
      time: "25 min ago",
      status: "Completed"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Map className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Live PvP Map</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time raid tracking, PvP heatmaps, and danger zones across all servers
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-red-500 mb-1">5</div>
            <div className="text-sm text-muted-foreground">Active Raids</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">234</div>
            <div className="text-sm text-muted-foreground">Players Online</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">47</div>
            <div className="text-sm text-muted-foreground">PvP Kills (1h)</div>
          </Card>
          <Card className="card-brutal p-4 text-center">
            <div className="text-3xl font-bold text-green-500 mb-1">12</div>
            <div className="text-sm text-muted-foreground">Maps Active</div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="heatmap" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
            <TabsTrigger value="activity">Live Activity</TabsTrigger>
            <TabsTrigger value="resources">Resource Map</TabsTrigger>
          </TabsList>

          {/* Heatmap */}
          <TabsContent value="heatmap">
            <Card className="card-brutal p-8 mb-8">
              <h2 className="text-2xl font-bold text-gradient-crimson mb-6">
                PvP Danger Zones (Last 24 Hours)
              </h2>
              <div className="space-y-4">
                {heatmapData.map((data, idx) => (
                  <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <h3 className="font-bold text-foreground text-lg">{data.map}</h3>
                      </div>
                      <Badge variant={
                        data.danger === "Extreme" ? "destructive" :
                        data.danger === "High" ? "default" :
                        "secondary"
                      }>
                        {data.danger} Danger
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Raids:</span>{" "}
                        <span className="text-red-500 font-bold">{data.raids}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Kills:</span>{" "}
                        <span className="text-orange-500 font-bold">{data.kills}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Hotspot:</span>{" "}
                        <span className="text-primary font-bold">{data.hotspot}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interactive Map Placeholder */}
            <Card className="card-brutal p-8 text-center">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-background rounded-lg border border-primary/30 flex items-center justify-center">
                <div>
                  <Map className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    Real-time overlay with raid markers, tribe locations, and resource nodes
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Live Activity */}
          <TabsContent value="activity">
            <Card className="card-brutal p-8">
              <h2 className="text-2xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
                <Zap className="h-8 w-8 animate-pulse" />
                Live PvP Activity Feed
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-lg border ${
                      activity.status === "Active" 
                        ? 'bg-red-500/10 border-red-500/50' 
                        : 'bg-background/50 border-border/30'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Crosshair className={`h-6 w-6 ${
                          activity.status === "Active" ? 'text-red-500' : 'text-primary'
                        }`} />
                        <div>
                          <h3 className="font-bold text-foreground">{activity.event}</h3>
                          <div className="text-sm text-muted-foreground">{activity.map} • {activity.location}</div>
                        </div>
                      </div>
                      <Badge variant={activity.status === "Active" ? "destructive" : "secondary"}>
                        {activity.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground ml-9">
                      <span className="text-primary font-bold">{activity.tribes}</span> • {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Raid Alerts */}
            <Card className="card-brutal p-6 mt-8 bg-gradient-to-br from-red-500/20 to-red-500/5 border-red-500/50">
              <div className="flex items-center gap-4">
                <Zap className="h-12 w-12 text-red-500 animate-pulse" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Enable Raid Alerts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant Discord notifications when raids happen near your base
                  </p>
                </div>
                <Badge className="bg-red-500 text-lg px-4 py-2 cursor-pointer hover:bg-red-600 transition-colors">
                  ENABLE
                </Badge>
              </div>
            </Card>
          </TabsContent>

          {/* Resource Map */}
          <TabsContent value="resources">
            <Card className="card-brutal p-8">
              <h2 className="text-2xl font-bold text-gradient-crimson mb-6">
                Resource Node Locations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { resource: "Metal Nodes", map: "The Island", location: "North Mountains", density: "High" },
                  { resource: "Crystal", map: "Ragnarok", location: "Ice Cave", density: "Extreme" },
                  { resource: "Element Veins", map: "Extinction", location: "Wasteland", density: "Medium" },
                  { resource: "Obsidian", map: "The Island", location: "Volcano Peak", density: "High" },
                  { resource: "Polymer", map: "Aberration", location: "Mushroom Forest", density: "High" },
                  { resource: "Oil Rocks", map: "The Island", location: "Snow Biome", density: "Medium" },
                ].map((node, idx) => (
                  <Card key={idx} className="p-4 bg-background/50 hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-bold text-foreground">{node.resource}</h3>
                    </div>
                    <div className="text-sm space-y-1">
                      <div>
                        <span className="text-muted-foreground">Map:</span>{" "}
                        <span className="text-foreground">{node.map}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>{" "}
                        <span className="text-foreground">{node.location}</span>
                      </div>
                      <Badge variant={
                        node.density === "Extreme" ? "destructive" :
                        node.density === "High" ? "default" :
                        "secondary"
                      } className="text-xs">
                        {node.density} Density
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Legend */}
        <Card className="card-brutal p-6 mt-8">
          <h3 className="font-bold text-foreground mb-4 text-center">Map Legend</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <Badge variant="destructive" className="mb-2">Extreme</Badge>
              <p className="text-muted-foreground">Constant PvP, avoid if solo</p>
            </div>
            <div>
              <Badge variant="default" className="mb-2">High</Badge>
              <p className="text-muted-foreground">Frequent raids, stay alert</p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">Medium</Badge>
              <p className="text-muted-foreground">Moderate activity</p>
            </div>
            <div>
              <Badge variant="outline" className="mb-2">Low</Badge>
              <p className="text-muted-foreground">Safest farming zones</p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default LiveMap;
