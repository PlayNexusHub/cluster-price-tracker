import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, CheckCircle, Activity, FileText, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AntiCheat = () => {
  const banLogs = [
    {
      player: "xXHackerXx",
      reason: "ESP/Wallhack detected",
      evidence: "Auto-detection system",
      date: "2 hours ago",
      permanent: true,
      tribe: "Banned Tribe"
    },
    {
      player: "SpeedDemon99",
      reason: "Speed hack",
      evidence: "Video evidence + logs",
      date: "5 hours ago",
      permanent: true,
      tribe: "Shadow Cheaters"
    },
    {
      player: "DupeKing",
      reason: "Item duplication",
      evidence: "Server logs analysis",
      date: "1 day ago",
      permanent: true,
      tribe: "Solo Exploiter"
    },
    {
      player: "ToxicPlayer",
      reason: "Extreme toxicity",
      evidence: "Multiple reports + screenshots",
      date: "2 days ago",
      permanent: false,
      tribe: "Toxic Raiders"
    },
  ];

  const stats = [
    { icon: Shield, label: "Bans This Week", value: "23", color: "text-red-500" },
    { icon: CheckCircle, label: "Clean Players", value: "2,477", color: "text-green-500" },
    { icon: Activity, label: "Active Scans", value: "24/7", color: "text-blue-500" },
    { icon: AlertTriangle, label: "Reports Pending", value: "12", color: "text-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Anti-Cheat System</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            24/7 automated detection, instant bans, complete transparency. Zero tolerance for cheaters.
          </p>
        </div>

        {/* Active Status */}
        <Card className="card-brutal p-6 mb-8 bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-green-500/20 rounded-full p-4 animate-pulse">
                <Activity className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Anti-Cheat Status: ACTIVE</h3>
                <p className="text-muted-foreground">All detection systems operational • Last scan: 3 seconds ago</p>
              </div>
            </div>
            <Badge className="bg-green-500 text-lg px-4 py-2">ONLINE</Badge>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx} className="card-brutal p-6 text-center hover-lift">
              <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Detection Methods */}
        <Card className="card-brutal p-8 mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Multi-Layer Detection System
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Automated Scanning</h3>
              <p className="text-sm text-muted-foreground">
                Real-time memory scanning, behavior analysis, and pattern recognition
              </p>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Server-Side Logs</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring of player actions, item spawns, and stat anomalies
              </p>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Community Reports</h3>
              <p className="text-sm text-muted-foreground">
                Player reports reviewed by staff with video evidence verification
              </p>
            </div>
          </div>
        </Card>

        {/* Ban Types */}
        <Card className="card-brutal p-8 mb-12">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6">
            Offense Categories & Punishments
          </h2>
          <div className="space-y-4">
            {[
              {
                offense: "ESP / Wallhacks / Aimbots",
                punishment: "Permanent Ban + IP Ban",
                severity: "Critical",
                color: "text-red-600"
              },
              {
                offense: "Duping Items or Dinos",
                punishment: "Permanent Ban + Tribe Wipe",
                severity: "Critical",
                color: "text-red-600"
              },
              {
                offense: "Meshing / Undermapping",
                punishment: "Permanent Ban + Dev Wipe",
                severity: "Critical",
                color: "text-red-600"
              },
              {
                offense: "Speed Hacks / Fly Hacks",
                punishment: "Permanent Ban",
                severity: "High",
                color: "text-orange-500"
              },
              {
                offense: "Alt Account for Tribe Limit Bypass",
                punishment: "Permanent Ban (All Accounts)",
                severity: "High",
                color: "text-orange-500"
              },
              {
                offense: "Extreme Toxicity / Harassment",
                punishment: "7-30 Day Ban",
                severity: "Medium",
                color: "text-yellow-500"
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border/30 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1">{item.offense}</h3>
                  <p className="text-sm text-muted-foreground">{item.punishment}</p>
                </div>
                <Badge variant="outline" className={`${item.color} border-current`}>
                  {item.severity}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Bans */}
        <Card className="card-brutal p-8 mb-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 flex items-center gap-3">
            <Ban className="h-8 w-8" />
            Recent Bans (Public Log)
          </h2>
          <div className="space-y-4">
            {banLogs.map((ban, idx) => (
              <div key={idx} className="p-4 bg-destructive/10 border border-destructive/50 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-destructive text-lg">{ban.player}</h3>
                      <Badge variant="destructive">
                        {ban.permanent ? "PERMANENT" : "TEMPORARY"}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Reason:</span>{" "}
                        <span className="text-foreground font-bold">{ban.reason}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tribe:</span>{" "}
                        <span className="text-foreground">{ban.tribe}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Evidence:</span>{" "}
                        <span className="text-foreground">{ban.evidence}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Date:</span>{" "}
                        <span className="text-foreground">{ban.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Report Cheater CTA */}
        <Card className="card-brutal p-8 text-center">
          <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Suspect a Cheater?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Report suspicious activity with video evidence. All reports reviewed within 6 hours.
            False reports will result in penalties.
          </p>
          <Button className="combat-pulse font-bold">
            Submit Cheat Report
          </Button>
        </Card>

        {/* Fair Play Pledge */}
        <Card className="card-brutal p-8 mt-8 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Fair Play Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to maintaining a 100% cheat-free environment. Our multi-layer 
              detection system catches over 99% of cheaters automatically. Combined with community 
              reports and staff oversight, Onyx is the cleanest ARK cluster in 2025.
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default AntiCheat;
