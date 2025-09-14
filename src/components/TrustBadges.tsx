import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock } from "lucide-react";

const TrustBadges = () => {
  const certifications = [
    {
      title: "ICAI Certified",
      description: "Institute of Chartered Accountants of India",
      icon: <Award className="h-8 w-8 text-primary" />,
      badge: "Membership No: 123456"
    },
    {
      title: "Tax Practitioner",
      description: "Authorized Income Tax Practitioner",
      icon: <Shield className="h-8 w-8 text-primary" />,
      badge: "PAN: ABCDE1234F"
    },
    {
      title: "GST Practitioner",
      description: "Certified GST Practitioner",
      icon: <Users className="h-8 w-8 text-primary" />,
      badge: "GSTIN Certified"
    },
    {
      title: "25+ Years",
      description: "Professional Experience",
      icon: <Clock className="h-8 w-8 text-primary" />,
      badge: "Since 1999"
    }
  ];

  const achievements = [
    "500+ Successful IT Notice Resolutions",
    "₹50Cr+ Tax Savings Generated for Clients", 
    "Zero Penalty Track Record",
    "Same-Day Emergency Filing Available",
    "100% Client Confidentiality Guaranteed",
    "Multi-Language Support (English, Hindi, Kannada)"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold mb-4">Professional Credentials & Trust</h2>
          <p className="text-lg text-muted-foreground">Certified expertise you can trust</p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{cert.icon}</div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <Badge variant="outline" className="text-xs">{cert.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Why Clients Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-6 bg-primary/10 px-8 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Data Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
