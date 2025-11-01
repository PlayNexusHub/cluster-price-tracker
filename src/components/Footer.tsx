import { Link } from "react-router-dom";
import { Skull, MessageSquare, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Skull className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient-crimson">PrimeASA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate ARK ASA PvP cluster. Survive or perish.
            </p>
            <div className="flex gap-4">
              <a
                href="https://discord.gg/primeasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/primeasa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servers" className="text-muted-foreground hover:text-primary transition-colors">
                  Servers
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-muted-foreground hover:text-primary transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link to="/havens" className="text-muted-foreground hover:text-primary transition-colors">
                  Private Havens
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rules" className="text-muted-foreground hover:text-primary transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support Tickets
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.gg/primeasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord (50k+ Members)
                </a>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Live Stats</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <span className="text-primary font-bold">2,500+</span> Active Raiders
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary font-bold">15+</span> Maps Available
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary font-bold">99.99%</span> Uptime
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary font-bold">24/7</span> Anti-Cheat
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 PrimeASA Cluster. Powered by PrimeASA - Survive or Perish.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            ARK: Survival Ascended is a trademark of Studio Wildcard. Not affiliated with Studio Wildcard.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
