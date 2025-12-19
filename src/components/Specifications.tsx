import { Check } from 'lucide-react';

const Specifications = () => {
  const specs = [
    { label: 'Static Pressure', value: 'Up to 60" w.g.' },
    { label: 'Airflow Capacity', value: 'Up to 7,700 CFM' },
    { label: 'Temperature Rating', value: 'Up to 400°F' },
    { label: 'Construction', value: 'Heavy-gauge welded steel' },
    { label: 'Impeller Material', value: 'Corten Steel' },
    { label: 'Outlet Connection', value: 'Round punched flange' },
    { label: 'Inlet Connection', value: 'Punched flange standard' },
    { label: 'Drain', value: '3/4" NPT half coupling' }
  ];

  const accessories = [
    'Inlet Bell with Inlet Screen',
    'Belt Guard; Quick Access',
    'Shaft Guard (Bearings Exposed)',
    'Extended Lube Lines',
    'Stainless Steel Nameplate',
    'Vibration Rails with Isolators',
    'Outlet Blast Gate with Handle',
    'Tube-Adapter with Rubber Sleeve'
  ];

  return (
    <section id="specs" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Specifications */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Technical Data
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Specifications
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Built to exceed industry standards with premium materials and precision engineering.
            </p>

            <div className="space-y-1">
              {specs.map((spec, index) => (
                <div 
                  key={spec.label}
                  className={`flex justify-between items-center p-4 rounded-lg ${
                    index % 2 === 0 ? 'bg-card' : ''
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Options
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Accessories
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Customize your pressure blower with our range of optional accessories for enhanced performance and safety.
            </p>

            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {accessories.map((accessory) => (
                  <div 
                    key={accessory}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{accessory}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spark Resistant Construction */}
            <div className="mt-8 p-6 rounded-xl border border-primary/30 bg-primary/5">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                Spark Resistant Construction
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Available in Type B and Type C classifications per AMCA Standard 99-0401-86 
                for applications involving hazardous fumes or vapors.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-card rounded text-foreground">Type B</span>
                <span className="px-3 py-1 bg-card rounded text-foreground">Type C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
