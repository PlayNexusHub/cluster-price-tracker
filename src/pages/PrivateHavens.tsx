import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Lock, Zap, Users, Shield, Crown } from "lucide-react";

const PrivateHavens = () => {
  const tiers = [
    {
      name: "Solo Raider",
      slots: "10",
      price: "$8.99",
      monthly: true,
      features: [
        "Personal ORP fortress",
        "Clustered gear transfers",
        "Weekly auto-wipe option",
        "+$5 store credit included",
        "Password protected",
        "Instant setup (3min)",
        "Full mod support",
        "Custom rates available"
      ],
      popular: false
    },
    {
      name: "Trio Base",
      slots: "20",
      monthly: true,
      price: "$16.99",
      features: [
        "All Solo Raider perks",
        "Tribe-locked access",
        "Extended ORP (180min)",
        "Modded raid dummies",
        "Unlimited structures",
        "Event upload access",
        "+$8 store credit",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Alliance Hold",
      slots: "50",
      monthly: true,
      price: "$34.99",
      features: [
        "All Trio Base perks",
        "Full PvP simulations",
        "Custom ORP rules",
        "On-demand wipe control",
        "+$15 store credit",
        "Admin logs access",
        "Dedicated IP",
        "24/7 support channel"
      ],
      popular: false
    }
  ];

  const comparison = [
    { provider: "Onyx", slots10: "$8.99", slots20: "$16.99", slots50: "$34.99", clustered: true, orp: "Custom" },
    { provider: "Nitrado", slots10: "N/A", slots20: "$24.95", slots50: "$60+", clustered: true, orp: "Basic" },
    { provider: "EliteArk", slots10: "N/A", slots20: "N/A", slots50: "$30 VIP", clustered: false, orp: "Shared" },
    { provider: "Salty Zombies", slots10: "N/A", slots20: "$25", slots50: "$50", clustered: true, orp: "Tribe" },
    { provider: "INX", slots10: "$12", slots20: "$25", slots50: "N/A", clustered: true, orp: "Duo" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-battlefield-dark to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 text-sm px-4 py-2">
              40% CHEAPER THAN NITRADO
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-gradient-crimson glow-crimson">PRIVATE HAVENS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your clustered raid fortress. Transfer gear, test strategies, perfect your ORP base.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <span className="font-medium">Password Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Instant Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Max ORP Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, idx) => (
              <Card 
                key={idx} 
                className={`p-8 card-brutal hover-lift ${tier.popular ? 'border-glow border-2 border-primary' : ''}`}
              >
                {tier.popular && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">MOST POPULAR</Badge>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">{tier.price}</span>
                    {tier.monthly && <span className="text-muted-foreground">/mo</span>}
                  </div>
                  <Badge variant="outline" className="mt-2">
                    <Users className="h-3 w-3 mr-1" />
                    {tier.slots} Slots
                  </Badge>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full combat-pulse font-bold">
                  {tier.popular && <Crown className="mr-2 h-4 w-4" />}
                  CLAIM HAVEN
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-gradient-crimson">Beat the Competition</span>
            </h2>
            <p className="text-muted-foreground">Save hundreds per year vs major hosts</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full card-brutal rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 text-left text-sm font-bold">Provider</th>
                  <th className="p-4 text-center text-sm font-bold">10 Slots</th>
                  <th className="p-4 text-center text-sm font-bold">20 Slots</th>
                  <th className="p-4 text-center text-sm font-bold">50 Slots</th>
                  <th className="p-4 text-center text-sm font-bold">Clustered</th>
                  <th className="p-4 text-center text-sm font-bold">ORP Type</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((comp, idx) => (
                  <tr 
                    key={idx}
                    className={`border-b border-border/30 ${comp.provider === 'Onyx' ? 'bg-primary/5' : ''}`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${comp.provider === 'Onyx' ? 'text-primary text-lg' : ''}`}>
                          {comp.provider}
                        </span>
                        {comp.provider === 'Onyx' && (
                          <Badge className="bg-primary text-primary-foreground text-xs">BEST</Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={comp.provider === 'Onyx' ? 'text-primary font-bold text-lg' : ''}>
                        {comp.slots10}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={comp.provider === 'Onyx' ? 'text-primary font-bold text-lg' : ''}>
                        {comp.slots20}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={comp.provider === 'Onyx' ? 'text-primary font-bold text-lg' : ''}>
                        {comp.slots50}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      {comp.clustered ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="p-4 text-center">{comp.orp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 card-brutal">
            <h2 className="text-3xl font-bold mb-6 text-gradient-crimson">What Makes Onyx Havens Different?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Full Cluster Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Transfer dinos, gear, and resources between your haven and main servers. Test raid strategies with your actual loadout.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Provisioning</h3>
                    <p className="text-sm text-muted-foreground">
                      Your server spins up in under 3 minutes. Unique password, IP, and full control panel access immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Custom ORP Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Unlike shared servers, you control ORP timers, decay rates, and raid windows. Perfect for base testing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Practice Raids, Real Tactics</h3>
                    <p className="text-sm text-muted-foreground">
                      Set up raid dummies, test turret placement, perfect your defenses before deploying on main servers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateHavens;
