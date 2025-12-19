import { Wind, Gauge, Ruler } from 'lucide-react';
import modelHroHrs from '@/assets/images/8.png';
import modelTbrTba from '@/assets/images/9.png';
import modelMbo from '@/assets/images/10.png';
import modelImpellers from '@/assets/images/88.png';
import modelEfasbcn from '@/assets/images/11.png';

const AlternativeProducts = () => {
  
  const alternativeModels = [
    {
      id: 'hro-hrs',
      models: ['HRO', 'HRS'],
      image: modelHroHrs,
      sizes: '19.75" to 61.25" impeller diameters',
      specs: [
        { label: 'Airflow', value: 'Up to 10,000 CFM', icon: Wind },
        { label: 'Static Pressure', value: 'Up to 120" w.g.', icon: Gauge },
        { label: 'Impeller Range', value: '19.75" - 61.25"', icon: Ruler }
      ],
      description: 'High-performance radial blade impellers designed for high-pressure applications with open and shrouded configurations.',
      badge: 'High Pressure'
    },
    {
      id: 'tbr',
      models: ['TBR'],
      image: modelTbrTba,
      sizes: '10.75" to 35.19" impeller diameters',
      specs: [
        { label: 'Airflow (TBR)', value: 'Up to 10,100 CFM', icon: Wind },
        { label: 'Static Pressure (TBR)', value: 'Up to 104" w.g.', icon: Gauge },
        { label: 'Impeller Range', value: '10.75" - 35.19"', icon: Wind }
      ],
      description: 'Versatile turbo blower series with backward inclined impellers for efficient air handling across diverse applications.',
      badge: 'Versatile'
    },
    {
      id: 'tba',
      models: ['TBA'],
      image: modelMbo,
      sizes: '11.19" to 32.06" impeller diameters',
      specs: [
        { label: 'Airflow', value: 'Up to 28,700 CFM', icon: Wind },
        { label: 'Static Pressure', value: 'Over 70" w.g.', icon: Gauge },
        { label: 'Impeller Range', value: '11.19" - 32.06"', icon: Ruler }
      ],
      description: 'Multi-blade series offering exceptional pressure capabilities with open, radial, and wheel configurations.',
      badge: 'Max Pressure'
    },
    {
      id: 'efasbcn',
      models: ['EFASBCN'],
      image: modelEfasbcn,
      sizes: '27" to 73" impeller diameters',
      specs: [
        { label: 'Airflow', value: 'Up to 75,000 CFM', icon: Wind },
        { label: 'Static Pressure', value: 'Up to 100" w.g.', icon: Gauge },
        { label: 'Impeller Range', value: '27" - 73"', icon: Ruler }
      ],
      description: 'Industrial-grade centrifugal blower designed for maximum airflow capacity in large-scale ventilation systems.',
      badge: 'High Capacity'
    }
  ];

  return (
    <section id="alternative-products" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Extended Product Line
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Alternative Pressure Blowers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our comprehensive range of specialized pressure blowers, each engineered 
            for specific performance requirements and industrial applications.
          </p>
        </div>

        {/* Impeller Types Display */}
        <div className="mb-16 bg-card rounded-2xl border border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Impeller Options
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Multiple Impeller Designs
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our alternative pressure blowers feature various impeller configurations including 
                open radial, shrouded radial, and backward inclined designs to match your specific 
                airflow and pressure requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                  Open Radial
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                  Shrouded Radial
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg">
                  Backward Inclined
                </span>
              </div>
            </div>
            <div className="bg-secondary/30 p-8 flex items-center justify-center">
              <img 
                src={modelImpellers} 
                alt="Impeller Types" 
                className="max-h-48 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {alternativeModels.map((model) => (
            <div 
              key={model.id}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden hover-lift group"
            >
              {/* Image Section */}
              <div className="relative bg-secondary/30 p-8">
                <img
                  src={model.image}
                  alt={`Model ${model.models.join(' / ')}`}
                  className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-lg">
                  {model.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                {/* Models */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.models.map((m) => (
                    <span 
                      key={m}
                      className="px-3 py-1 bg-secondary text-foreground text-sm font-heading font-semibold rounded"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Sizes */}
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="text-primary font-medium">Sizes:</span> {model.sizes}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Specs */}
                <div className="space-y-3">
                  {model.specs.map((spec, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <spec.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-muted-foreground">{spec.label}:</span>
                        <span className="text-foreground font-medium ml-2">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need help selecting the right pressure blower for your application?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Our Engineers
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlternativeProducts;
