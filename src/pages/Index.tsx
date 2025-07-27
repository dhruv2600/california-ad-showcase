import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, TrendingUp, FileText, Calculator, Building } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "RSU & Stock Options",
      description: "Expert handling of Restricted Stock Units and employee stock option taxation with maximum savings",
      icon: <TrendingUp className="h-6 w-6" />,
      highlight: "Popular for IT professionals"
    },
    {
      title: "Foreign Investments",
      description: "Complete tax compliance for foreign stock investments, FBAR filing, and international earnings",
      icon: <Building className="h-6 w-6" />,
      highlight: "US/Europe tax credits"
    },
    {
      title: "Tax Credit Optimization",
      description: "Maximize tax credits for taxes paid on dividends and other incomes in US/Europe - save thousands",
      icon: <Calculator className="h-6 w-6" />,
      highlight: "Avoid double taxation"
    },
    {
      title: "PMS & Trading",
      description: "Portfolio Management Services, Stock trading, F&O transactions with optimal tax efficiency",
      icon: <TrendingUp className="h-6 w-6" />,
      highlight: "Trading professionals"
    },
    {
      title: "Investment Planning",
      description: "Strategic mutual fund investments and comprehensive tax planning for wealth building",
      icon: <FileText className="h-6 w-6" />,
      highlight: "Long-term wealth"
    },
    {
      title: "Property & Salary",
      description: "Property transactions, capital gains optimization, and salary taxation with HRA benefits",
      icon: <Building className="h-6 w-6" />,
      highlight: "Real estate experts"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-4 text-foreground tracking-tight">
              CA ABCDEF & Co.
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
            Expert Chartered Accountants in Bangalore
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in complex tax scenarios for <span className="font-semibold text-primary">IT professionals, investors, and NRIs</span>. 
            From RSU taxation to foreign investments - we ensure maximum savings while maintaining full compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="secondary" className="px-6 py-3 text-base font-medium">✓ 25+ Years Combined Experience</Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base font-medium">✓ MNC & Fortune 500 Clients</Badge>
            <Badge variant="secondary" className="px-6 py-3 text-base font-medium">✓ Whitefield, Bangalore</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" asChild>
              <a href="tel:+919999999">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 9999999
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
              <a href="mailto:abdc@gmail.com?subject=Tax Consultation Inquiry&body=Hello, I would like to schedule a tax consultation. Please let me know your availability.">
                <Mail className="mr-2 h-5 w-5" />
                Email Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Our Specialized Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tax solutions tailored for modern professionals and investors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/20 hover:border-l-primary">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">{service.highlight}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-muted/30 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Why Choose CA ABCDEF & Co.?</h2>
            <p className="text-xl text-muted-foreground">Proven expertise that saves you money and stress</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Tax Regime Optimization</CardTitle>
                <CardDescription className="text-base">
                  Detailed comparison between old and new tax regimes. We calculate exactly which regime saves you more money based on your unique financial situation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Maximum Tax Savings</CardTitle>
                <CardDescription className="text-base">
                  Strategic planning to minimize tax liability through legal deductions, exemptions, and credits. Our clients typically save 15-30% on their tax burden.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Notice Resolution</CardTitle>
                <CardDescription className="text-base">
                  Expert handling of IT notices and assessments. We represent you before tax authorities and resolve issues with minimal stress and maximum success.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Trust Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Trusted by Professionals Across Bangalore</h2>
            <p className="text-xl text-muted-foreground">Experience that matters, results that speak</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary mb-2">25+</CardTitle>
                <CardDescription className="text-lg font-medium">
                  Years Combined Experience
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary mb-2">500+</CardTitle>
                <CardDescription className="text-lg font-medium">
                  Tax Returns Filed
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary mb-2">100+</CardTitle>
                <CardDescription className="text-lg font-medium">
                  MNC Professionals Served
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-primary mb-2">₹50L+</CardTitle>
                <CardDescription className="text-lg font-medium">
                  Tax Savings Generated
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Specialized in Tech Hub Professionals</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Located just 2km from Bagmane Tech Park (Amazon office), we understand the unique tax challenges faced by IT professionals, startup employees, and international workers in Bangalore's tech corridor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">Amazon Employees</Badge>
              <Badge variant="secondary" className="px-4 py-2">Microsoft Staff</Badge>
              <Badge variant="secondary" className="px-4 py-2">Startup Professionals</Badge>
              <Badge variant="secondary" className="px-4 py-2">NRI Investors</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Ready to Optimize Your Taxes?</h2>
            <p className="text-xl text-muted-foreground">Get in touch for a consultation that could save you thousands</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-playfair font-bold">CA Narender</CardTitle>
                  <CardDescription className="text-lg font-medium">
                    Chartered Accountant & Senior Tax Consultant
                  </CardDescription>
                  <div className="flex justify-center mt-4">
                    <Badge variant="secondary" className="px-4 py-2">Available for immediate consultation</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Direct Phone</p>
                      <p className="text-xl font-bold text-primary">+91 9999999</p>
                      <p className="text-sm text-muted-foreground">Best time to call: 9 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-lg font-bold text-primary">abdc@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-lg">Office Location</p>
                      <p className="text-muted-foreground">The Arcade, Whitefield, Bangalore</p>
                      <p className="text-sm text-muted-foreground font-medium">📍 Just 2km from Bagmane Tech Park (Amazon office)</p>
                      <p className="text-sm text-muted-foreground">Remote consultations available nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Quick Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Get expert advice on your tax situation. Whether it's RSU taxation, foreign investments, or complex scenarios - we're here to help.
                </p>
              </div>
              
              <div className="grid gap-4">
                <Button size="lg" className="w-full py-4 text-lg" asChild>
                  <a href="tel:+919999999">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now: +91 9999999
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full py-4 text-lg" asChild>
                  <a href="mailto:abdc@gmail.com?subject=Tax Consultation Request&body=Hello CA Narender,%0D%0A%0D%0AI would like to schedule a consultation for:%0D%0A%0D%0A☐ RSU/Stock Options taxation%0D%0A☐ Foreign investment compliance%0D%0A☐ Tax planning optimization%0D%0A☐ IT notice resolution%0D%0A☐ Other: ____________%0D%0A%0D%0APreferred contact method:%0D%0A☐ Phone call%0D%0A☐ Email%0D%0A☐ In-person meeting%0D%0A%0D%0ABest time to reach me: ____________%0D%0A%0D%0AThank you!">
                    <Mail className="mr-3 h-5 w-5" />
                    Email: abdc@gmail.com
                  </a>
                </Button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h4 className="font-bold text-green-800 mb-2">Free Initial Consultation</h4>
                <p className="text-green-700 text-sm">
                  First 30-minute consultation is completely free. No obligation, just expert advice to help you understand your options.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ⚡ Emergency tax notice support available<br/>
                  📋 Same-day ITR filing for urgent cases<br/>
                  🔒 100% confidential and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">CA ABCDEF & Co.</h3>
              <p className="opacity-90 mb-4">
                Expert chartered accountants specializing in complex tax scenarios for IT professionals and investors in Bangalore.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">25+ Years Experience</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-90">
                <li>• RSU & Stock Option Taxation</li>
                <li>• Foreign Investment Compliance</li>
                <li>• Tax Notice Resolution</li>
                <li>• Investment Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <p className="opacity-90 mb-2">📞 +91 9999999</p>
              <p className="opacity-90 mb-2">📧 abdc@gmail.com</p>
              <p className="opacity-90">📍 The Arcade, Whitefield, Bangalore</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="opacity-90">
              © 2024 CA ABCDEF & Co. | Professional Tax Consultants | Bangalore
            </p>
            <p className="text-sm opacity-75 mt-2">
              Reach out for help with tax filing or any notices received for previously filed returns
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
