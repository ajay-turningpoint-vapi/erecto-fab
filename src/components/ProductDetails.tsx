import React from 'react';
import blowerDiagram from '@/assets/images/home.webp';
import EngineeringData from './EngineeringData';

const ProductDetails = () => {
  const details = [
    'Flanged Inlet punched to ANSI 125/150 hole pattern for bolted connection is standard.',
    'Flanged Outlet punched to ANSI 125/150 hole pattern for bolted connection is standard.',
    'Drain — standard 3/4" NPT half coupling located at the lowest point of the housing. Available with or without plug.',
    'Shaft and bearing guard — sheet metal guards cover shaft and bearings and come with extended lube lines to a common point outside of the guard. Painted safety yellow.',
    'Belt guard — OSHA style to enclose the V-belt drive. Painted safety yellow.',
    'Access Door Heavy-duty bolted panel provides access for impeller inspection.',
    'Motor Slide Base for positioning motors and adjust.'
  ];

  return (
    <>
      <section id="product-details" className="section-padding">
      <a href='#product-details'>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Product Details</h2>
          <p className="text-muted-foreground">Diagram and numbered features for the pressure blower.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <img src={blowerDiagram} alt="Blower diagram with numbered features" className="w-full h-auto rounded-lg shadow-sm" />
          </div>

          <div>
            <ol className="space-y-4">
              {details.map((d, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-flex flex-none items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold mr-4">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-sm text-muted-foreground break-words">{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      </a>
    </section>
      <EngineeringData />
    </>
  );
};

export default ProductDetails;
