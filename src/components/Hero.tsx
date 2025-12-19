import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import blowerImage from '@/assets/images/pressure-blower.png';
import catalogPdf from '@/assets/EFASPB-Pressure-Blowers-Catalog.pdf';
const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded text-primary text-sm font-medium tracking-widest uppercase mb-6">
                Model EFASPB
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Industrial
              <br />
              <span className="text-primary">Pressure Blowers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up animation-delay-200 leading-relaxed">
              High-performance ventilation systems engineered for demanding industrial applications. 
              Precision-built for maximum efficiency and reliability.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10 animate-fade-up animation-delay-300">
              <div className="industrial-border">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">60"</div>
                <div className="text-sm text-muted-foreground">Static Pressure</div>
              </div>
              <div className="industrial-border">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">7,700</div>
                <div className="text-sm text-muted-foreground">CFM Capacity</div>
              </div>
              <div className="industrial-border">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">400°F</div>
                <div className="text-sm text-muted-foreground">Max Temperature</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
              <a href='#products' ><Button 
             
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider group"
              >
                
                View Products 
                <ArrowRight  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button></a>
                          

              <Button 
                size="lg" 
                variant="outline" 
                className="border-border text-foreground hover:bg-secondary font-heading tracking-wider"
              >
                  <a href={catalogPdf} download="EFASPB-Pressure-Blowers-Catalog.pdf" aria-label="Download EFASPB Pressure Blowers Catalog" className="block w-full">
                Download Catalog</a>
              </Button>

            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-75 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-secondary to-card p-8 rounded-2xl border border-border/50 animate-float">
                <img
                  src={blowerImage}
                  alt="EFASPB Pressure Blower"
                  className="w-full max-w-md object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Efficiency Rating</div>
                <div className="font-heading text-2xl font-bold text-primary">A+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#products" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
