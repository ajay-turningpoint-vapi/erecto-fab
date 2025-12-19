import React from 'react';

const EngineeringData = () => {
  return (
    <section id="engineering-data" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Engineering Data</h2>
          <p className="text-muted-foreground text-sm">Key performance and construction data for selection and specification.</p>
        </div>

        {/* Impeller weights / WR2 table */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">Maximum RPM, Impeller Weights &amp; WR2</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2">Fan Size</th>
                  <th className="px-3 py-2">Housing</th>
                  <th className="px-3 py-2">Impeller Diameter</th>
                  <th className="px-3 py-2">Max. RPM</th>
                  <th className="px-3 py-2">Weight (lb)</th>
                  <th className="px-3 py-2">WR2 (lb-ft²)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="px-3 py-2">3</td><td className="px-3 py-2">19</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">38.2</td><td className="px-3 py-2">9.54</td></tr>
                <tr><td className="px-3 py-2">3</td><td className="px-3 py-2">20</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">41.2</td><td className="px-3 py-2">11.4</td></tr>
                

                <tr><td className="px-3 py-2">4</td><td className="px-3 py-2">19</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">41.9</td><td className="px-3 py-2">10.8</td></tr>
                <tr><td className="px-3 py-2">4</td><td className="px-3 py-2">20</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">45.1</td><td className="px-3 py-2">12.8</td></tr>
               
                <tr><td className="px-3 py-2">5</td><td className="px-3 py-2">21</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">44.3</td><td className="px-3 py-2">13.6</td></tr>

                <tr><td className="px-3 py-2">6</td><td className="px-3 py-2">21</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">3600</td><td className="px-3 py-2">48.5</td><td className="px-3 py-2">15.2</td></tr>
                
              </tbody>
            </table>
          </div>
        </div>

        {/* Inlet Suction Pressure Correction */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">Inlet Suction Pressure Correction</h3>
          <p className="text-sm text-muted-foreground mb-3">
            If inlet pressure is suction (negative), correct the static pressure required by dividing by the inlet density ratio.
            Example: 70°F at sea level with system resistance of 40" gives a correction factor of 0.902 ( = (407.5 − 40) / 407.5 ).
            Equivalent static pressure for curve selection: 40" ÷ 0.902 = 44.36". Actual inlet air density = 0.075 × 0.902 = 0.0676 lb/ft³.
          </p>

          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2">Inlet Suction (in. w.g.)</th>
                  <th className="px-3 py-2">Correction Factor</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[5,10,15,20,25,30,35,40,45,50,55].map((v,i) => (
                  <tr key={i}><td className="px-3 py-2">{v}</td><td className="px-3 py-2">{( (407.5 - v) / 407.5 ).toFixed(3)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shaft & Bearings */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">Shaft &amp; Bearings</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2">Fan Size</th>
                  <th className="px-3 py-2">Arrangement</th>
                  <th className="px-3 py-2">Shaft Diameter (in.)</th>
                  <th className="px-3 py-2">Bearing Type</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="px-3 py-2">3</td><td className="px-3 py-2">Arr. 1 &amp; 9</td><td className="px-3 py-2">1-11/16</td><td className="px-3 py-2">HDB</td></tr>
                <tr><td className="px-3 py-2">4</td><td className="px-3 py-2">All</td><td className="px-3 py-2">1-11/16</td><td className="px-3 py-2">HDB</td></tr>
                <tr><td className="px-3 py-2">5</td><td className="px-3 py-2">All</td><td className="px-3 py-2">1-15/16</td><td className="px-3 py-2">HDB</td></tr>
                <tr><td className="px-3 py-2">6</td><td className="px-3 py-2">All</td><td className="px-3 py-2">1-15/16</td><td className="px-3 py-2">HDB</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">HDB: Heavy-Duty Ball Bearing</p>
        </div>

        {/* Bare Fan Weights */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">Bare Fan Weights (lbs.)</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2">Fan Size</th>
                  <th className="px-3 py-2">Housing</th>
                  <th className="px-3 py-2">Impeller Diameter</th>
                  <th className="px-3 py-2">Arr. 1 &amp; 9</th>
                  <th className="px-3 py-2">Arr. 4</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="px-3 py-2">3</td><td className="px-3 py-2">19</td><td className="px-3 py-2">—</td><td className="px-3 py-2">263</td><td className="px-3 py-2">275</td></tr>
                <tr><td className="px-3 py-2">3</td><td className="px-3 py-2">20</td><td className="px-3 py-2">—</td><td className="px-3 py-2">266</td><td className="px-3 py-2">278</td></tr>
               
                <tr><td className="px-3 py-2">4</td><td className="px-3 py-2">19</td><td className="px-3 py-2">—</td><td className="px-3 py-2">271</td><td className="px-3 py-2">283</td></tr>
                
                <tr><td className="px-3 py-2">5</td><td className="px-3 py-2">26</td><td className="px-3 py-2">—</td><td className="px-3 py-2">402</td><td className="px-3 py-2">420</td></tr>

                <tr><td className="px-3 py-2">6</td><td className="px-3 py-2">21</td><td className="px-3 py-2">—</td><td className="px-3 py-2">390</td><td className="px-3 py-2">408</td></tr>
                
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Note: weights shown are for the largest inlet/outlet size available on the housing.</p>
        </div>

        {/* Housing Thickness */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-3">Housing Thickness</h3>
          <p className="text-sm text-muted-foreground">All fan sizes: Sides — 10 gauge; Scroll — 10 gauge.</p>
        </div>

        {/* Temperature Derate */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Temperature Derate</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2">Airstream Temp (°F)</th>
                  <th className="px-3 py-2">Derate Factor</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="px-3 py-2">70</td><td className="px-3 py-2">1.00</td></tr>
                <tr><td className="px-3 py-2">200</td><td className="px-3 py-2">1.00</td></tr>
                <tr><td className="px-3 py-2">300</td><td className="px-3 py-2">1.00</td></tr>
                <tr><td className="px-3 py-2">400</td><td className="px-3 py-2">1.00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringData;
