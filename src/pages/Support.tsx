import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, AlertCircle, Ban, Bug, HelpCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket Submitted",
      description: "We'll respond within 24 hours. Check your email for updates.",
    });
    setFormData({
      name: "",
      email: "",
      category: "",
      subject: "",
      description: "",
    });
  };

  const ticketCategories = [
    {
      icon: Ban,
      title: "Ban Appeal",
      description: "Appeal a ban or punishment",
      color: "text-destructive",
      priority: "High Priority",
    },
    {
      icon: Bug,
      title: "Bug Report",
      description: "Report exploits or game bugs",
      color: "text-yellow-500",
      priority: "Critical",
    },
    {
      icon: AlertCircle,
      title: "Player Report",
      description: "Report rule violations or cheating",
      color: "text-orange-500",
      priority: "High Priority",
    },
    {
      icon: Shield,
      title: "Admin Abuse",
      description: "Report admin misconduct",
      color: "text-red-600",
      priority: "Critical",
    },
    {
      icon: MessageSquare,
      title: "Store Support",
      description: "Issues with purchases or VIP",
      color: "text-blue-500",
      priority: "Normal",
    },
    {
      icon: HelpCircle,
      title: "General Help",
      description: "Questions about server or gameplay",
      color: "text-green-500",
      priority: "Normal",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageSquare className="h-12 w-12 text-primary animate-pulse" />
            <h1 className="text-5xl font-bold text-gradient-crimson">Support Center</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help? Submit a ticket below. Average response time: <span className="text-primary font-bold">Under 24 hours</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {ticketCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="card-brutal p-6 hover-lift cursor-pointer group"
              onClick={() => setFormData({ ...formData, category: category.title })}
            >
              <div className="flex items-start gap-4">
                <category.icon className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform`} />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <span className={`text-xs font-bold ${category.color}`}>{category.priority}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ticket Form */}
        <Card className="card-brutal p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-6 text-center">
            Submit a Ticket
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-bold">Your Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="In-game name or real name"
                  required
                  className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-bold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category" className="text-foreground font-bold">Category *</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="mt-2 bg-background/50 border-primary/30">
                  <SelectValue placeholder="Select ticket category" />
                </SelectTrigger>
                <SelectContent>
                  {ticketCategories.map((cat) => (
                    <SelectItem key={cat.title} value={cat.title}>
                      {cat.title} - {cat.priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="subject" className="text-foreground font-bold">Subject *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief description of your issue"
                required
                className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-foreground font-bold">Detailed Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide as much detail as possible. Include dates, times, player names, screenshots if applicable..."
                required
                rows={8}
                className="mt-2 bg-background/50 border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Important:</strong> For ban appeals, include your Steam/EOS ID. 
                For bug reports, include steps to reproduce. For player reports, include evidence (screenshots/video links).
              </p>
            </div>

            <Button type="submit" className="w-full text-lg py-6 combat-pulse font-bold">
              Submit Ticket
            </Button>
          </form>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient-crimson mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How long until I get a response?",
                a: "Most tickets are answered within 24 hours. Critical issues (exploits, admin abuse) are prioritized and responded to within 1-6 hours."
              },
              {
                q: "Can I appeal a ban?",
                a: "Yes, but only if you have valid evidence. Mass ban appeals without proof will be ignored. Be respectful in your appeal."
              },
              {
                q: "What if my purchased item didn't arrive?",
                a: "Check your email for the redemption code first. If still missing, submit a Store Support ticket with your transaction ID."
              },
              {
                q: "How do I report a cheater?",
                a: "Submit a Player Report ticket with video evidence if possible. Screenshots of chat or suspicious stats also help."
              },
              {
                q: "Can I get a refund on my purchase?",
                a: "Refunds are only issued within 24 hours if the item was not redeemed. After redemption, all sales are final."
              },
            ].map((faq, idx) => (
              <Card key={idx} className="card-brutal p-6">
                <h3 className="font-bold text-lg text-primary mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Discord CTA */}
        <Card className="card-brutal p-8 mt-12 text-center max-w-2xl mx-auto">
          <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Prefer Live Support?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join our Discord for instant help from staff and community members. 
            50,000+ members ready to assist!
          </p>
          <Button 
            asChild
            variant="default" 
            className="combat-pulse font-bold"
          >
            <a href="https://discord.gg/onyxcluster" target="_blank" rel="noopener noreferrer">
              Join Discord Now
            </a>
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
