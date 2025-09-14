import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp } from "lucide-react";

const PricingCalculator = () => {
  const [income, setIncome] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [complexity, setComplexity] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculatePrice = () => {
    const baseIncome = parseInt(income) || 0;
    let basePrice = 0;
    let multiplier = 1;

    // Base pricing by service type
    switch (serviceType) {
      case "basic-itr": basePrice = 2500; break;
      case "rsu-taxation": basePrice = 8000; break;
      case "foreign-investment": basePrice = 12000; break;
      case "it-notice": basePrice = 15000; break;
      case "comprehensive": basePrice = 25000; break;
      default: basePrice = 5000;
    }

    // Complexity multiplier
    switch (complexity) {
      case "simple": multiplier = 1; break;
      case "moderate": multiplier = 1.5; break;
      case "complex": multiplier = 2.2; break;
      default: multiplier = 1;
    }

    // Income-based adjustment
    if (baseIncome > 5000000) multiplier += 0.3;
    else if (baseIncome > 2000000) multiplier += 0.2;

    setEstimate(Math.round(basePrice * multiplier));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-4">Service Fee Calculator</h2>
          <p className="text-xl text-muted-foreground">Get an instant estimate for your tax services</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calculate Your Service Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Annual Income (₹)</label>
                <Input
                  type="number"
                  placeholder="e.g., 1500000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Service Type</label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic-itr">Basic ITR Filing</SelectItem>
                    <SelectItem value="rsu-taxation">RSU & Stock Options</SelectItem>
                    <SelectItem value="foreign-investment">Foreign Investment Compliance</SelectItem>
                    <SelectItem value="it-notice">IT Notice Resolution</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Tax Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Case Complexity</label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complexity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Simple (Single income source)</SelectItem>
                    <SelectItem value="moderate">Moderate (Multiple sources, some investments)</SelectItem>
                    <SelectItem value="complex">Complex (International income, multiple assets)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculatePrice} className="w-full" disabled={!income || !serviceType || !complexity}>
                Calculate Estimate
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Service Estimate
              </CardTitle>
            </CardHeader>
            <CardContent>
              {estimate ? (
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">₹{estimate.toLocaleString()}</div>
                  <p className="text-muted-foreground">Estimated service fee</p>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base service fee:</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complexity adjustment:</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Follow-up support:</span>
                      <span>6 months free</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Total estimate:</span>
                      <span>₹{estimate.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    * Final fee may vary based on actual complexity and requirements
                  </div>

                  <Button className="w-full" asChild>
                    <a href="tel:+918310946034">
                      Discuss Your Case: +91 8310946034
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Fill in the details to get your service estimate</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
