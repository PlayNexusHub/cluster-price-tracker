import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator, Dna, Crosshair, Map, Timer, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tools = () => {
  const [breedCalc, setBreedCalc] = useState({
    stat1: 0,
    stat2: 0,
    generations: 1
  });

  const [damageCalc, setDamageCalc] = useState({
    baseDamage: 100,
    meleeDmg: 100,
    armor: 0
  });

  const [resourceCalc, setResourceCalc] = useState({
    metal: 0,
    polymer: 0,
    cementing: 0
  });

  const calculateBreeding = () => {
    const result = Math.floor((breedCalc.stat1 + breedCalc.stat2) / 2 * Math.pow(1.1, breedCalc.generations));
    return result;
  };

  const calculateDamage = () => {
    const baseDmg = damageCalc.baseDamage;
    const melee = damageCalc.meleeDmg / 100;
    const armorReduction = 1 - (damageCalc.armor / 100);
    const finalDamage = Math.floor(baseDmg * melee * armorReduction);
    return finalDamage;
  };

  const tools = [
    {
      icon: Dna,
      title: "Breeding Calculator",
      description: "Calculate stat inheritance and mutations",
      color: "text-green-500"
    },
    {
      icon: Crosshair,
      title: "Damage Calculator",
      description: "PvP damage calculations for raids",
      color: "text-red-500"
    },
    {
      icon: Calculator,
      title: "Resource Calculator",
      description: "Calculate resources needed for crafting",
      color: "text-blue-500"
    },
    {
      icon: Map,
      title: "Resource Map",
      description: "Find metal, crystal, and rare spawns",
      color: "text-yellow-500"
    },
    {
      icon: Timer,
      title: "Taming Calculator",
      description: "Calculate taming times and kibble needed",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Raid Planner",
      description: "Plan your raids with explosive calculations",
      color: "text-orange-500"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Calculator className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">PvP Tools & Calculators</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential calculators and utilities to dominate the battlefield
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, idx) => (
            <Card key={idx} className="card-brutal p-6 hover-lift">
              <tool.icon className={`h-12 w-12 ${tool.color} mb-4`} />
              <h3 className="text-xl font-bold text-foreground mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </Card>
          ))}
        </div>

        {/* Interactive Calculators */}
        <Card className="card-brutal p-8">
          <Tabs defaultValue="breeding" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="breeding">Breeding</TabsTrigger>
              <TabsTrigger value="damage">Damage</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Breeding Calculator */}
            <TabsContent value="breeding" className="space-y-6">
              <div className="text-center mb-6">
                <Dna className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gradient-crimson">Breeding Calculator</h2>
                <p className="text-muted-foreground">Calculate potential offspring stats</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-foreground font-bold">Parent 1 Stat Value</Label>
                  <Input
                    type="number"
                    value={breedCalc.stat1}
                    onChange={(e) => setBreedCalc({ ...breedCalc, stat1: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="e.g., 5000"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-bold">Parent 2 Stat Value</Label>
                  <Input
                    type="number"
                    value={breedCalc.stat2}
                    onChange={(e) => setBreedCalc({ ...breedCalc, stat2: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="e.g., 5500"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-foreground font-bold">Generations (Mutations)</Label>
                  <Input
                    type="number"
                    value={breedCalc.generations}
                    onChange={(e) => setBreedCalc({ ...breedCalc, generations: parseInt(e.target.value) || 1 })}
                    className="mt-2"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Estimated Offspring Stat</div>
                <div className="text-5xl font-bold text-primary">{calculateBreeding()}</div>
              </div>
            </TabsContent>

            {/* Damage Calculator */}
            <TabsContent value="damage" className="space-y-6">
              <div className="text-center mb-6">
                <Crosshair className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gradient-crimson">PvP Damage Calculator</h2>
                <p className="text-muted-foreground">Calculate raid damage output</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-foreground font-bold">Base Damage</Label>
                  <Input
                    type="number"
                    value={damageCalc.baseDamage}
                    onChange={(e) => setDamageCalc({ ...damageCalc, baseDamage: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="100"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-bold">Melee Damage %</Label>
                  <Input
                    type="number"
                    value={damageCalc.meleeDmg}
                    onChange={(e) => setDamageCalc({ ...damageCalc, meleeDmg: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="100"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-bold">Target Armor %</Label>
                  <Input
                    type="number"
                    value={damageCalc.armor}
                    onChange={(e) => setDamageCalc({ ...damageCalc, armor: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Final Damage Output</div>
                <div className="text-5xl font-bold text-red-500">{calculateDamage()}</div>
              </div>
            </TabsContent>

            {/* Resource Calculator */}
            <TabsContent value="resources" className="space-y-6">
              <div className="text-center mb-6">
                <Calculator className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gradient-crimson">Resource Calculator</h2>
                <p className="text-muted-foreground">Calculate farming requirements</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-foreground font-bold">Metal Ingots Needed</Label>
                  <Input
                    type="number"
                    value={resourceCalc.metal}
                    onChange={(e) => setResourceCalc({ ...resourceCalc, metal: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-bold">Polymer Needed</Label>
                  <Input
                    type="number"
                    value={resourceCalc.polymer}
                    onChange={(e) => setResourceCalc({ ...resourceCalc, polymer: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label className="text-foreground font-bold">Cementing Paste</Label>
                  <Input
                    type="number"
                    value={resourceCalc.cementing}
                    onChange={(e) => setResourceCalc({ ...resourceCalc, cementing: parseInt(e.target.value) || 0 })}
                    className="mt-2"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Farming Requirements (15x Rates)</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Metal Ore</div>
                    <div className="text-2xl font-bold text-primary">{Math.ceil(resourceCalc.metal / 15)} nodes</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Organic Polymer</div>
                    <div className="text-2xl font-bold text-primary">{Math.ceil(resourceCalc.polymer / 15)} kills</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Stone/Chitin</div>
                    <div className="text-2xl font-bold text-primary">{Math.ceil(resourceCalc.cementing / 15)} runs</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Coming Soon */}
        <Card className="card-brutal p-8 mt-8 text-center">
          <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            More Tools Coming Soon
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Taming calculator, raid planner with C4/rocket calculations, resource maps, 
            breeding timers, and more PvP utilities in development.
          </p>
          <Button variant="outline">
            Request a Tool
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
