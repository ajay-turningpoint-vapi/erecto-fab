import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'Products Details', href: '#product-details' },
    { name: 'More Models', href: '#alternative-products' },
    { name: 'Applications', href: '#applications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      {/* Top bar */}
      <div className="hidden md:block border-b border-border/30">
        <div className="container mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm text-muted-foreground">
          <a href="tel:7008545583" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>7008545583</span>
          </a>
          <a href="mailto:erectofabindustries@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>erectofabindustries@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              {/* <span className="font-heading font-bold text-primary-foreground text-lg">EF</span> */}
              <img
                src={logo}
                alt="Impeller Types"
                className="max-h-48 object-contain"
              />
            </div>
            <div className="block">
              <div className="font-heading font-semibold text-sm sm:text-lg text-foreground tracking-wide leading-tight truncate">ERECTO FAB</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground tracking-widest">INDUSTRIES</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider">
              Get a Quote
            </Button>
          </div> */}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* <li className="px-6 py-3">
                <Button variant="default" className="w-full bg-primary text-primary-foreground font-heading">
                  Get a Quote
                </Button>
              </li> */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
