import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, TrendingUp, FileText, Calculator, Building } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "RSU & Stock Options",
      description: "Expert handling of Restricted Stock Units and employee stock option taxation",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Foreign Investments",
      description: "Tax filing for foreign stock investments and earnings with proper compliance",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Tax Credit Optimization",
      description: "Maximize tax credits for taxes paid on dividends and other incomes in US/Europe",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "PMS & Trading",
      description: "Portfolio Management Services, Stock trading, and F&O transactions",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Investment Planning",
      description: "Mutual fund investments and comprehensive tax planning strategies",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Property & Salary",
      description: "Property transactions, buying/selling compliance, and salary taxation",
      icon: <Building className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Expert Chartered Accountant Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional tax filing and planning services for complex financial scenarios including RSUs, 
            foreign investments, and comprehensive tax optimization strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">25+ Years Total Experience</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">MNC Client Experience</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Bangalore Based</Badge>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Professional Tax Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Specialized Tax Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Planning Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Tax Planning Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Old vs New Tax Regime</CardTitle>
                <CardDescription>
                  Comprehensive comparison analysis to determine the most beneficial tax regime for your specific situation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Strategic Tax Planning</CardTitle>
                <CardDescription>
                  Explore and implement the most effective strategies to reduce tax liability while maintaining full compliance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl text-primary mb-2">5+</CardTitle>
                <CardDescription className="text-lg">
                  Years of specialized experience in tax return filing for multiple MNC clients
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl text-primary mb-2">20+</CardTitle>
                <CardDescription className="text-lg">
                  Years of additional corporate experience providing comprehensive financial expertise
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contact Information</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">CA Narender</CardTitle>
              <CardDescription className="text-center text-lg">
                Chartered Accountant & Tax Consultant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9999999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">abdc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">The Arcade, Bangalore, Whitefield</p>
                  <p className="text-sm text-muted-foreground">(2kms from Bagmane Tech Park Amazon office)</p>
                  <p className="text-sm text-muted-foreground">Services available to other locations as well</p>
                </div>
              </div>
              <div className="pt-4 text-center">
                <Button className="w-full">Schedule Consultation</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">Professional tax filing and consultation services in Bangalore</p>
          <p className="text-sm opacity-90">
            Reach out for help with tax filing or any notices received for previously filed returns
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
