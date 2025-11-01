import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Zap, Crown, Package, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

const Store = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCart([...cart, item]);
  };

  const vipRanks = [
    {
      name: "Warrior",
      price: "$9.99",
      duration: "30 days",
      features: [
        "Death Saver (recover gear on death)",
        "+1.5x Personal Harvest",
        "+20 Dino Slots",
        "Corpse Retrieval Command",
        "Priority Queue",
        "Unique Chat Color"
      ],
      popular: false
    },
    {
      name: "Champion",
      price: "$17.99",
      duration: "30 days",
      features: [
        "All Warrior Perks",
        "+2x Personal Harvest",
        "+40 Dino Slots",
        "Auto-Engrams",
        "Extended ORP (+30min)",
        "Custom Tribe Name Color",
        "Shop Discount (10%)"
      ],
      popular: true
    },
    {
      name: "Legend",
      price: "$29.99",
      duration: "30 days",
      features: [
        "All Champion Perks",
        "+2.5x Personal Harvest",
        "+60 Dino Slots",
        "Gender Switch Token",
        "Extended ORP (+60min)",
        "Shop Discount (20%)",
        "Exclusive Cosmetics",
        "Priority Support"
      ],
      popular: false
    }
  ];

  const dinos = [
    { name: "Raid-Ready Rex", level: "150", price: "$6.99", stats: "25k HP • 700% Melee", popular: true },
    { name: "Raid-Ready Giga", level: "150", price: "$9.99", stats: "35k HP • 650% Melee", popular: true },
    { name: "Speed Wyvern", level: "150", price: "$8.99", stats: "20k HP • 400% Speed", popular: false },
    { name: "Raid Griffin", level: "150", price: "$7.99", stats: "18k HP • 350% Melee", popular: false },
    { name: "Boss Therizino", level: "150", price: "$7.99", stats: "22k HP • 600% Melee", popular: false },
    { name: "Alpha Raptor Pack (3x)", level: "145", price: "$5.99", stats: "12k HP • 450% Melee Each", popular: false }
  ];

  const resources = [
    { name: "10k Element", price: "$4.99", popular: true },
    { name: "50k Metal Ingots", price: "$3.99", popular: false },
    { name: "100k Polymer", price: "$2.99", popular: false },
    { name: "Advanced Saddle Bundle", price: "$6.99", popular: true },
    { name: "Ascendant Tool Set", price: "$5.99", popular: false },
    { name: "TEK Turret Pack (10x)", price: "$8.99", popular: true }
  ];

  const kits = [
    {
      name: "Starter Dominance Kit",
      price: "$4.99",
      includes: "Metal Tools • Raptor • 100 Tranqs • Basic Armor",
      popular: true
    },
    {
      name: "Raid Master Kit",
      price: "$12.99",
      includes: "C4 (50x) • Rocket Launcher • Rockets (100x) • Element (5k)",
      popular: true
    },
    {
      name: "PvP Loadout",
      price: "$8.99",
      includes: "Ascendant Armor Set • Pump Shotgun • Longneck • 500 Ammo",
      popular: false
    },
    {
      name: "Builder's Paradise",
      price: "$9.99",
      includes: "100k Structures • Polymer (50k) • Metal (100k) • Cement (50k)",
      popular: false
    }
  ];

  const boosts = [
    { name: "2x XP Boost", duration: "7 days", price: "$3.99" },
    { name: "3x Harvest Boost", duration: "7 days", price: "$4.99" },
    { name: "Instant Breed (50x Speed)", duration: "7 days", price: "$5.99" },
    { name: "ORP Extension (+2 hours)", duration: "30 days", price: "$6.99" }
  ];

  const bundles = [
    {
      name: "Ultimate Starter Bundle",
      price: "$24.99",
      save: "40%",
      includes: "Warrior Rank • Starter Kit • Rex • 10k Element",
      popular: true
    },
    {
      name: "Raid Domination Bundle",
      price: "$39.99",
      save: "45%",
      includes: "Champion Rank • Raid Kit • Giga • TEK Turrets • 2x XP Boost",
      popular: true
    },
    {
      name: "Legend's Arsenal",
      price: "$69.99",
      save: "50%",
      includes: "Legend Rank • All Kits • 3 Top Dinos • All Boosts • 50k Element",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-battlefield-dark to-background opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-slide-up">
            <Badge className="bg-primary/20 text-primary border-primary/50 text-sm px-4 py-2">
              GUARANTEED GEAR • NO RNG LOOTBOXES
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black">
              <span className="text-gradient-crimson glow-crimson">ONYX STORE</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Gear up for glory. All items delivered in 30 seconds. 35% cheaper than EliteArk.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-primary" />
                <span>No Gambling</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-primary" />
                <span>Cart: {cart.length} items</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bundles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-card/50">
              <TabsTrigger value="bundles">🔥 Bundles</TabsTrigger>
              <TabsTrigger value="vip">VIP Ranks</TabsTrigger>
              <TabsTrigger value="dinos">Dinos</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="kits">Kits</TabsTrigger>
              <TabsTrigger value="boosts">Boosts</TabsTrigger>
            </TabsList>

            {/* Bundles */}
            <TabsContent value="bundles" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Value Bundles</h2>
                <p className="text-muted-foreground">Save up to 50% with our curated packages</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bundles.map((bundle, idx) => (
                  <Card key={idx} className={`p-6 card-brutal hover-lift ${bundle.popular ? 'border-glow border-2 border-primary' : ''}`}>
                    {bundle.popular && (
                      <Badge className="mb-4 bg-primary text-primary-foreground">BEST VALUE</Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-black text-primary">{bundle.price}</span>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        SAVE {bundle.save}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{bundle.includes}</p>
                    <Button 
                      className="w-full combat-pulse font-bold" 
                      onClick={() => addToCart(bundle.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      ADD TO CART
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* VIP Ranks */}
            <TabsContent value="vip" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">VIP Ranks</h2>
                <p className="text-muted-foreground">Permanent advantages for 30 days</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vipRanks.map((rank, idx) => (
                  <Card key={idx} className={`p-6 card-brutal hover-lift ${rank.popular ? 'border-glow border-2 border-primary' : ''}`}>
                    {rank.popular && (
                      <Badge className="mb-4 bg-primary text-primary-foreground">MOST POPULAR</Badge>
                    )}
                    <Crown className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{rank.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-black text-primary">{rank.price}</span>
                      <span className="text-sm text-muted-foreground ml-2">/ {rank.duration}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {rank.features.map((feature, fidx) => (
                        <li key={fidx} className="text-sm flex items-start gap-2">
                          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full font-bold" 
                      onClick={() => addToCart(rank.name)}
                    >
                      CLAIM RANK
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Dinos */}
            <TabsContent value="dinos" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Raid-Ready Dinos</h2>
                <p className="text-muted-foreground">Max-level tames with PvP stats</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dinos.map((dino, idx) => (
                  <Card key={idx} className={`p-6 card-brutal hover-lift ${dino.popular ? 'border-primary/50 border' : ''}`}>
                    {dino.popular && (
                      <Badge className="mb-3 bg-primary/20 text-primary">POPULAR</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{dino.name}</h3>
                    <Badge variant="outline" className="mb-3">Level {dino.level}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{dino.stats}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary">{dino.price}</span>
                      <Button onClick={() => addToCart(dino.name)}>
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resources */}
            <TabsContent value="resources" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Resources & Gear</h2>
                <p className="text-muted-foreground">Skip the grind, start the raid</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, idx) => (
                  <Card key={idx} className={`p-6 card-brutal hover-lift ${resource.popular ? 'border-primary/50 border' : ''}`}>
                    {resource.popular && (
                      <Badge className="mb-3 bg-primary/20 text-primary">TOP SELLER</Badge>
                    )}
                    <Package className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-lg font-bold mb-4">{resource.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary">{resource.price}</span>
                      <Button onClick={() => addToCart(resource.name)}>
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Kits */}
            <TabsContent value="kits" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Survival Kits</h2>
                <p className="text-muted-foreground">Complete loadouts for any situation</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {kits.map((kit, idx) => (
                  <Card key={idx} className={`p-6 card-brutal hover-lift ${kit.popular ? 'border-glow border-2 border-primary' : ''}`}>
                    {kit.popular && (
                      <Badge className="mb-3 bg-primary text-primary-foreground">BEST SELLER</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{kit.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{kit.includes}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary">{kit.price}</span>
                      <Button onClick={() => addToCart(kit.name)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        ADD TO CART
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Boosts */}
            <TabsContent value="boosts" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Temporary Boosts</h2>
                <p className="text-muted-foreground">Accelerate your progress</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {boosts.map((boost, idx) => (
                  <Card key={idx} className="p-6 card-brutal hover-lift">
                    <TrendingUp className="h-8 w-8 text-primary mb-3" />
                    <h3 className="text-lg font-bold mb-2">{boost.name}</h3>
                    <Badge variant="outline" className="mb-4">{boost.duration}</Badge>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-primary">{boost.price}</span>
                      <Button onClick={() => addToCart(boost.name)}>
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA */}
          <div className="mt-16 text-center card-brutal p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Ready to Dominate?</h3>
            <p className="text-muted-foreground mb-6">
              All purchases are instant delivery. Join Discord for exclusive deals.
            </p>
            <Button size="lg" className="combat-pulse font-bold">
              <ShoppingCart className="mr-2 h-5 w-5" />
              CHECKOUT ({cart.length} items)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
