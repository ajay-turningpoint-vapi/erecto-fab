import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import catalogPdf from '@/assets/EFASPB-Pressure-Blowers-Catalog.pdf';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Plot No 1101/1/E, Sun Crane Compound', '3rd Phase GIDC Vapi', 'Gujarat 396195, India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['7008545583']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['erectofabindustries@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our engineering team is here to help you find the perfect ventilation solution
            for your industrial application.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Request a Quote
              </h3>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Full Name *</label>
                    <Input
                      placeholder="John Smith"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Company</label>
                    <Input
                      placeholder="Company Name"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Application Type</label>
                  <Input
                    placeholder="e.g., Material Conveying, Combustion Air"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wider group"
                >
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-5 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.title === 'Address' ? (
                      (() => {
                        const address = info.details.join(', ');
                        const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                        return (
                          <a
                            href={mapsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground block"
                            aria-label={`Open address in maps: ${address}`}
                          >
                            {info.details.map((detail, idx) => (
                              <div key={idx}>{detail}</div>
                            ))}
                          </a>
                        );
                      })()
                    ) : info.title === 'Phone' ? (
                      info.details.map((detail, idx) => {
                        const digits = detail.replace(/\D/g, '');
                        const tel = digits.startsWith('0') ? `+91${digits.replace(/^0+/, '')}` : `+91${digits}`;
                        return (
                          <a key={idx} href={`tel:${tel}`} className="text-sm text-muted-foreground block" aria-label={`Call ${detail}`}>
                            {detail}
                          </a>
                        );
                      })
                    ) : info.title === 'Email' ? (
                      info.details.map((detail, idx) => (
                        <a key={idx} href={`mailto:${detail}`} className="text-sm text-muted-foreground block" aria-label={`Email ${detail}`}>
                          {detail}
                        </a>
                      ))
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                Need Technical Support?
              </h4>
              <p className="text-muted-foreground mb-5">
                Our engineering team is available to assist with product selection,
                specifications, and application guidance.
              </p>
              <a href={catalogPdf} download="EFASPB-Pressure-Blowers-Catalog.pdf" aria-label="Download EFASPB Pressure Blowers Catalog" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-wider"
                >
                  Download Catalog
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
