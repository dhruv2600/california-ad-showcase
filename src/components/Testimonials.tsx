import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Google",
      content: "CA Narender helped me save ₹2.5L on my RSU taxation. His expertise in stock options is unmatched. Highly recommend for tech professionals!",
      rating: 5,
      savings: "₹2.5L saved"
    },
    {
      name: "Rajesh Kumar",
      role: "Investment Manager, NRI",
      content: "Complex foreign investment compliance made simple. Resolved my FBAR issues and optimized tax credits perfectly. Worth every penny.",
      rating: 5,
      savings: "₹1.8L saved"
    },
    {
      name: "Anita Reddy",
      role: "Startup Founder",
      content: "Quick IT notice resolution in just 15 days. Professional, responsive, and got the best possible outcome. Stress-free experience.",
      rating: 5,
      savings: "Notice resolved"
    },
    {
      name: "Vikram Singh",
      role: "Senior Developer, Microsoft",
      content: "Perfect tax regime analysis saved me ₹3.2L annually. CA Narender's calculations were spot-on and detailed. Excellent service!",
      rating: 5,
      savings: "₹3.2L annually"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">CLIENT SUCCESS STORIES</p>
          <h2 className="font-playfair text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">Real results from real clients</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{testimonial.role}</p>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.savings}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 500+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
