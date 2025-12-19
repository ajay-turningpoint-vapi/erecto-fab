import React, { useRef } from 'react';
import { Wrench, Cog, Shield, Gauge, ChevronLeft, ChevronRight } from 'lucide-react';
import arrangements14 from '@/assets/images/generated-image1.png';
import arrangements89 from '@/assets/images/generated-image4.png';
import arrangements99 from '@/assets/images/generated-image5.png';
import arrangements79 from '@/assets/images/6.png';

const Products = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Heavy-Duty Construction',
      description: 'Continuously-welded steel housings with welded pedestals for rugged, long-term service.'
    },
    {
      icon: Cog,
      title: 'Reversible Impeller',
      description: 'All-welded radial back plate impeller in Corten steel, ideal for material handling.'
    },
    {
      icon: Shield,
      title: 'Spark Resistant',
      description: 'Available in Type B and Type C spark resistant construction per AMCA standards.'
    },
    {
      icon: Gauge,
      title: 'Field Adjustable',
      description: 'Housings are reversible and rotatable for easy retrofit and new applications.'
    }
  ];

  const arrangementGroups = [
    {
      image: arrangements14,
      items: [
        {
          name: 'Arrangement 1',
          type: 'Belt Driven',
          description: 'Features an overhung impeller mounted at the end of the fan shaft. The motor may be located in any of the four AMCA standard positions (W, X, Y or Z). Fan bearings are supported in a pedestal located outside the airstream for improved service life and easier maintenance.'
        },

      ]
    },
    {
      image: arrangements89,
      items: [
        {
          name: 'Arrangement 4',
          type: 'Direct Drive',
          description: 'Direct-drive configuration with the impeller mounted directly on the motor shaft and the motor installed on a pedestal. Eliminates fan bearings, shafts, and belt drives for a compact, low-maintenance assembly. Rated for typical operating temperatures up to 180°F.'
        },

      ]
    },
    {
      image: arrangements99,
      items: [
        {
          name: 'Arrangement 8',
          type: 'Direct Drive',
          description: 'A direct-drive adaptation of Arrangement 1: the bearing pedestal is extended to support the motor and a flexible coupling connects the fan and motor shafts. This offers easier installation and better alignment tolerance while retaining the standard pedestal support—consult factory for specific torque and size limitations.'
        },

      ]
    }
    ,
    {
      image: arrangements79,
      items: [

        {
          name: 'Arrangement 9',
          type: 'Belt Driven',
          description: 'Belt-driven layout with a motor slide base mounted to the side of the bearing pedestal, allowing the unit to ship as a complete assembly with motor and drive installed. Facilitates field belt tensioning and alignment. Motor mounting side is typically left for CW rotation and right for CCW—confirm rotation when ordering.'
        }
      ]
    }
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Product Overview
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Model PBW Pressure Blowers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Designed for low flow and high static pressures with stable operation throughout its entire operating range.
            The PBW is ideal for handling long, stringy, or fibrous materials in demanding industrial environments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-gradient p-6 rounded-xl border border-border/50 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Arrangements with Images */}
        <div className="mb-8">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Available Arrangements
          </h3>
          <p className="text-muted-foreground mb-8">
            Choose the configuration that best suits your application requirements
          </p>
        </div>

        {/* Arrangements: horizontal scroll on mobile, 2-column grid on lg+ */}
        <div className="relative">
          {/* Mobile scroll buttons */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => scrollRef.current && scrollRef.current.scrollBy({ left: -Math.round(scrollRef.current.clientWidth * 0.9), behavior: 'smooth' })}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <button
              type="button"
              onClick={() => scrollRef.current && scrollRef.current.scrollBy({ left: Math.round(scrollRef.current.clientWidth * 0.9), behavior: 'smooth' })}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-2 -mx-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-0 lg:mx-0"
          >
            {arrangementGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-[80%] sm:min-w-[60%] lg:min-w-full snap-start bg-card rounded-2xl border border-border/50 lg:overflow-hidden overflow-visible hover-lift"
              >
                {/* Image */}
                <div className="bg-secondary/30 p-6">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={group.image}
                      alt={`Arrangements ${groupIndex === 0 ? '1 & 4' : '8 & 9'}`}
                      className="max-w-full w-auto h-auto max-h-[300px] object-contain"
                    />
                  </div>
                </div>

                {/* Arrangements Info */}
                <div className="divide-y divide-border/50">
                  {group.items.map((arr) => (
                    <div
                      key={arr.name}
                      className="p-6 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-heading text-lg font-bold text-foreground">{arr.name}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {arr.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {arr.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
