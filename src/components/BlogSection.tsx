import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "RSU Taxation Guide 2024: Save Thousands on Stock Options",
      excerpt: "Complete guide to RSU taxation, timing strategies, and how to minimize tax liability on your stock options.",
      category: "RSU Taxation",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      popular: true
    },
    {
      title: "Foreign Investment Tax Compliance: FBAR & ITR Filing",
      excerpt: "Everything you need to know about reporting foreign investments, FBAR requirements, and claiming tax credits.",
      category: "Foreign Investment",
      readTime: "12 min read", 
      date: "Dec 10, 2024",
      popular: true
    },
    {
      title: "New vs Old Tax Regime: Which Saves More Money?",
      excerpt: "Detailed comparison with real examples showing when to choose new tax regime vs old tax regime in 2024.",
      category: "Tax Planning",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      popular: false
    },
    {
      title: "IT Notice Resolution: Step-by-Step Response Guide",
      excerpt: "How to respond to IT notices, required documents, and strategies to resolve assessments successfully.",
      category: "IT Notices",
      readTime: "10 min read",
      date: "Nov 28, 2024",
      popular: true
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">TAX INSIGHTS & GUIDES</p>
          <h2 className="font-playfair text-4xl font-bold mb-4">Latest Tax Updates & Tips</h2>
          <p className="text-xl text-muted-foreground">Stay informed with expert tax advice and regulatory updates</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={article.popular ? "default" : "secondary"} className="text-xs">
                    {article.popular ? "🔥 Popular" : article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Get Weekly Tax Tips</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tax updates, saving strategies, and regulatory changes that affect your finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
            />
            <Button className="px-8">Subscribe Free</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Unsubscribe anytime. 5,000+ subscribers trust our insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
