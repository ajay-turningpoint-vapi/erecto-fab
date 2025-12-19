import { 
  Factory, 
  Flame, 
  Wind, 
  Layers, 
  Droplets, 
  Gauge,
  Zap,
  Settings
} from 'lucide-react';

const Applications = () => {
  
  const applications = [
    {
      icon: Factory,
      title: 'Material Conveying',
      description: 'Efficient transport of bulk materials through pneumatic systems'
    },
    {
      icon: Flame,
      title: 'Combustion Air',
      description: 'High-pressure air supply for industrial combustion processes'
    },
    {
      icon: Wind,
      title: 'Product Drying',
      description: 'Forced air circulation for industrial drying applications'
    },
    {
      icon: Layers,
      title: 'Textile Processing',
      description: 'Fiber stripping and textile manufacturing ventilation'
    },
    {
      icon: Droplets,
      title: 'Fluid Bed Aeration',
      description: 'Consistent airflow for fluidized bed processes'
    },
    {
      icon: Gauge,
      title: 'Gas Boosting',
      description: 'Pressure amplification for gas handling systems'
    },
    {
      icon: Zap,
      title: 'Air Pollution Control',
      description: 'Exhaust and ventilation for emission control systems'
    },
    {
      icon: Settings,
      title: 'Glass Blowing',
      description: 'Precision air supply for glass manufacturing'
    }
  ];

  return (
    <section id="applications" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Industry Applications
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engineered for Every Challenge
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our pressure blowers serve diverse industrial sectors, delivering reliable performance 
            across demanding process and commercial ventilation applications.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div 
              key={app.title}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <app.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {app.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
