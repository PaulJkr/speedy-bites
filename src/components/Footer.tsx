import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="font-display text-3xl text-gradient tracking-wider">
              FLAMEBITE
            </a>
            <p className="font-body text-sm text-muted-foreground mt-3">
              The dopest food delivery platform. Fast, fresh, and not normal.
            </p>
            <div className="flex gap-3 mt-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "COMPANY", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "SUPPORT", links: ["Help Center", "Contact", "Privacy", "Terms"] },
            { title: "PARTNERS", links: ["Restaurants", "Riders", "Affiliates", "Investors"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg tracking-wide text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 FlameBite. All rights reserved. We're not normal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
