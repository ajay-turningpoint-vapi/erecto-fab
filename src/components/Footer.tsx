import logo from '@/assets/images/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Pressure Blowers', href: '#products' },
      { name: 'Arrangements', href: '#products' },
      { name: 'Accessories', href: '#specs' },
      { name: 'Specifications', href: '#specs' },
    ],
    applications: [
      { name: 'Material Conveying', href: '#applications' },
      { name: 'Combustion Air', href: '#applications' },
      { name: 'Product Drying', href: '#applications' },
      { name: 'Textile Processing', href: '#applications' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Quality Assurance', href: '#' },
      { name: 'Certifications', href: '#' },
      { name: 'Contact', href: '#contact' },
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <img 
                src={logo} 
                alt="Impeller Types" 
                className="max-h-48 object-contain"
              />
              </div>
              <div>
                <div className="font-heading font-semibold text-xl text-foreground tracking-wide">ERECTO FAB</div>
                <div className="text-xs text-muted-foreground tracking-widest">AIR SYSTEM & BLOWER</div>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Leading manufacturer of industrial process and commercial ventilation systems. 
              Engineered for performance, built for reliability.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Plot No 1101/1/E, Sun Crane Compound</p>
              <p>3rd Phase GIDC Vapi, Gujarat 396195</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Applications</h4>
            <ul className="space-y-3">
              {footerLinks.applications.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Erecto Fab Industries. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
