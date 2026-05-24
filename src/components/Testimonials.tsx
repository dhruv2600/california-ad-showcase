import { useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/RmCoefeBRVZbQETb8";

// TODO: Replace with your Elfsight widget ID after creating one at https://elfsight.com/google-reviews-widget/create/
// Steps: 1) Sign up free  2) Connect your Google Business Profile  3) Copy the app ID
const ELFSIGHT_APP_ID = "c77bea0c-9e7b-4bba-8aa7-3674162f6425";

const Testimonials = () => {
  useEffect(() => {
    if (!ELFSIGHT_APP_ID) return;
    // Load Elfsight platform script once
    if (!document.querySelector('script[src*="elfsight"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-bold">5.0</span>
            <span className="text-muted-foreground">on Google</span>
          </div>
        </div>

        {ELFSIGHT_APP_ID ? (
          <div
            className="elfsight-app-c77bea0c-9e7b-4bba-8aa7-3674162f6425"
            data-elfsight-app-lazy
          />
        ) : (
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7!2d77.702774!3d12.9923808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ff265049db%3A0x6792a7f82921b890!2sCA%20Narender%20Sharma!5e0!3m2!1sen!2sin!4v1`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CA Narender Sharma - Google Maps"
            />
          </div>
        )}

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <Star className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
              Read All Reviews on Google
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
