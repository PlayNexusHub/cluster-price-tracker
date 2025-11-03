import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Skull, AlertTriangle, Ban, Trophy, Swords } from "lucide-react";
import { Card } from "@/components/ui/card";

const Rules = () => {
  const ruleCategories = [
    {
      icon: Shield,
      title: "General Rules",
      color: "text-primary",
      rules: [
        "Respect all players and staff - toxic behavior will result in immediate ban",
        "No racism, sexism, homophobia, or hate speech in any form",
        "English only in global chat - use tribe chat for other languages",
        "No impersonating staff members or other players",
        "No advertising other servers or Discord communities",
        "Listen to admin decisions - arguing publicly will result in punishment",
      ]
    },
    {
      icon: Swords,
      title: "PvP & Raiding Rules",
      color: "text-red-500",
      rules: [
        "7-man tribe limit STRICTLY enforced - no alliances during raids",
        "Offline Raid Protection (ORP) activates 120 minutes after last tribe member logs off",
        "No foundation wiping - raid with purpose, not griefing",
        "No blocking caves, obelisks, or major resource spawns",
        "No kiting wild dinos to enemy bases (bannable offense)",
        "Raiding during wipe week (final 3 days before wipe) is unrestricted",
        "No insiding - stealing from your own tribe is a permanent ban",
      ]
    },
    {
      icon: AlertTriangle,
      title: "Exploits & Cheating",
      color: "text-yellow-500",
      rules: [
        "Zero tolerance for ESP, aimbots, speed hacks, or any third-party tools",
        "No meshing, undermapping, or using map exploits",
        "No duping items, dinos, or resources - auto-detection in place",
        "No exploiting game bugs for advantage (report bugs to staff)",
        "Using alt accounts to bypass tribe limits = permanent IP ban",
        "First offense: 7-day ban. Second offense: permanent ban + wipe",
      ]
    },
    {
      icon: Skull,
      title: "Building & Base Rules",
      color: "text-primary",
      rules: [
        "No building in artifact caves or boss arenas",
        "Turret limit: 100 heavy turrets per base, 200 total per tribe",
        "No spam building (pillars everywhere) - build with purpose",
        "No building on Herbivore Island or other protected zones",
        "Bases must be raidable - no completely inaccessible sky bases",
        "Underwater bases allowed but must have viable raid path",
      ]
    },
    {
      icon: Trophy,
      title: "Tribe & Alliance Rules",
      color: "text-green-500",
      rules: [
        "Maximum 7 members per tribe across all servers",
        "No multi-tribing (being in multiple tribes with same players)",
        "Alliances allowed ONLY for boss fights - not for raiding/defense",
        "Tribe merges must be reported to staff within 24 hours",
        "Tribes caught teaming during raids will be wiped",
        "Name changes require admin approval to prevent confusion",
      ]
    },
    {
      icon: Ban,
      title: "Punishments & Appeals",
      color: "text-destructive",
      rules: [
        "First warning: Verbal warning in Discord ticket",
        "Second offense: 3-day temp ban + point removal",
        "Third offense: 7-day ban + partial tribe wipe",
        "Major violations: Immediate permanent ban + full wipe",
        "Ban appeals must be submitted via Discord ticket with evidence",
        "Appeal decisions are final - no arguing in public channels",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Server Rules</h1>
            <Shield className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read carefully. Ignorance is not an excuse. Break the rules, face the consequences.
          </p>
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/50 rounded-lg max-w-2xl mx-auto">
            <p className="text-destructive font-bold">
              ⚠️ ALL RULES ARE STRICTLY ENFORCED - NO EXCEPTIONS
            </p>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {ruleCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="card-brutal p-6 animate-scale-in hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`h-8 w-8 ${category.color}`} />
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.rules.map((rule, ruleIdx) => (
                  <li key={ruleIdx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold min-w-[24px]">{ruleIdx + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="card-brutal p-8 mb-8">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            📜 Important Information
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Anti-Cheat Active</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">120min</div>
              <p className="text-muted-foreground">ORP Activation Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7-Man</div>
              <p className="text-muted-foreground">Strict Tribe Limit</p>
            </div>
          </div>
        </Card>

        {/* Wipe Schedule */}
        <Card className="card-brutal p-8 text-center">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-4">
            🔄 Wipe Schedule
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Full cluster wipe every <span className="text-primary font-bold">4-6 weeks</span> depending on population
          </p>
          <p className="text-sm text-muted-foreground">
            Wipe announcements posted 1 week in advance in Discord. Final 3 days before wipe = unrestricted PvP.
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
