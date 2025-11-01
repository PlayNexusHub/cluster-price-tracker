import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const competitors = [
  {
    name: "Onyx",
    isPrime: true,
    vip: "$9.99",
    starter: "$4.99",
    dino: "$6.99",
    private10: "$8.99",
    private20: "$16.99",
    features: [true, true, true, true, true]
  },
  {
    name: "EliteArk",
    isPrime: false,
    vip: "$14.99",
    starter: "$29.99",
    dino: "$9.99",
    private10: "N/A",
    private20: "N/A",
    features: [true, false, true, false, true]
  },
  {
    name: "Salty Zombies",
    isPrime: false,
    vip: "$20.00",
    starter: "$10.00",
    dino: "$15.00",
    private10: "N/A",
    private20: "$25.00",
    features: [true, true, false, false, true]
  },
  {
    name: "INX",
    isPrime: false,
    vip: "$12.00",
    starter: "$15.00",
    dino: "N/A",
    private10: "$12.00",
    private20: "$25.00",
    features: [true, true, false, true, false]
  }
];

const PricingComparison = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-gradient-crimson glow-crimson">DOMINATE CHEAPER</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save $120+ per year vs EliteArk, Salty Zombies & competitors
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full card-brutal rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-border/50">
                <th className="p-4 text-left text-sm font-bold text-muted-foreground">Cluster</th>
                <th className="p-4 text-center text-sm font-bold text-muted-foreground">30d VIP</th>
                <th className="p-4 text-center text-sm font-bold text-muted-foreground">Starter Kit</th>
                <th className="p-4 text-center text-sm font-bold text-muted-foreground">Raid Dino</th>
                <th className="p-4 text-center text-sm font-bold text-muted-foreground">10-Slot Haven</th>
                <th className="p-4 text-center text-sm font-bold text-muted-foreground">20-Slot Haven</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, index) => (
                <tr
                  key={comp.name}
                  className={`border-b border-border/30 ${comp.isPrime ? 'bg-primary/5 border-glow' : ''}`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${comp.isPrime ? 'text-primary text-lg' : 'text-foreground'}`}>
                        {comp.name}
                      </span>
                      {comp.isPrime && (
                        <span className="px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
                          BEST
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className={comp.isPrime ? 'text-primary font-bold text-lg' : 'text-foreground'}>
                      {comp.vip}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={comp.isPrime ? 'text-primary font-bold text-lg' : 'text-foreground'}>
                      {comp.starter}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={comp.isPrime ? 'text-primary font-bold text-lg' : 'text-foreground'}>
                      {comp.dino}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={comp.isPrime ? 'text-primary font-bold text-lg' : 'text-foreground'}>
                      {comp.private10}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={comp.isPrime ? 'text-primary font-bold text-lg' : 'text-foreground'}>
                      {comp.private20}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {competitors.map((comp) => (
            <div
              key={comp.name}
              className={`card-brutal p-6 rounded-lg ${comp.isPrime ? 'border-glow border-2 border-primary' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${comp.isPrime ? 'text-primary' : 'text-foreground'}`}>
                  {comp.name}
                </h3>
                {comp.isPrime && (
                  <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
                    BEST VALUE
                  </span>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">30d VIP:</span>
                  <span className="font-bold">{comp.vip}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Starter Kit:</span>
                  <span className="font-bold">{comp.starter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Raid Dino:</span>
                  <span className="font-bold">{comp.dino}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">10-Slot Haven:</span>
                  <span className="font-bold">{comp.private10}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">20-Slot Haven:</span>
                  <span className="font-bold">{comp.private20}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6 combat-pulse font-bold">
            CLAIM YOUR ADVANTAGE
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 2,500+ raiders who switched from overpriced competitors
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
