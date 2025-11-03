import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Skull, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Store", path: "/store" },
    { name: "Season Pass", path: "/season-pass" },
    { name: "Servers", path: "/servers" },
    { name: "Leaderboards", path: "/leaderboards" },
    { name: "Live Map", path: "/live-map" },
    { name: "Events", path: "/events" },
    { name: "More", path: "#", submenu: [
      { name: "Tribes", path: "/tribes" },
      { name: "Recruitment", path: "/recruitment" },
      { name: "Bounties", path: "/bounties" },
      { name: "Auction House", path: "/auction" },
      { name: "Wiki & Guides", path: "/wiki" },
      { name: "Tools", path: "/tools" },
      { name: "Gallery", path: "/gallery" },
      { name: "Streams", path: "/streams" },
      { name: "Anti-Cheat", path: "/anti-cheat" },
      { name: "Private Havens", path: "/havens" },
      { name: "Rules", path: "/rules" },
      { name: "Support", path: "/support" },
    ]},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Skull className="h-8 w-8 text-primary group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
            </div>
            <span className="text-xl font-bold text-gradient-crimson glow-crimson hidden sm:block">
              ONYX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => 
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border/50">
                    {link.submenu.map((sublink) => (
                      <DropdownMenuItem key={sublink.path} asChild>
                        <Link to={sublink.path} className="cursor-pointer">
                          {sublink.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <div className="text-xs text-muted-foreground">
              <span className="text-primary font-bold">2,500+</span> Raiders
            </div>
            <Button variant="default" className="combat-pulse font-bold">
              RAID NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full mt-4 font-bold">
              RAID NOW
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
