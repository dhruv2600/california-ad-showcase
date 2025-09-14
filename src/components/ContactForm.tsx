import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    // Create mailto link with form data
    const subject = `Tax Consultation Request - ${data.service}`;
    const body = `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Needed: ${data.service}

Message:
${data.message}`;

    const mailtoLink = `mailto:canarenders@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Email client opened",
      description: "Please send the email to complete your consultation request.",
    });

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Quick Consultation Request</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" required />
          <Input name="email" type="email" placeholder="Email Address" required />
          <Input name="phone" type="tel" placeholder="Phone Number" required />
          <Select name="service" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Service Needed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsu-taxation">RSU & Stock Options</SelectItem>
              <SelectItem value="foreign-investment">Foreign Investments</SelectItem>
              <SelectItem value="tax-credits">Tax Credit Optimization</SelectItem>
              <SelectItem value="trading">PMS & Trading</SelectItem>
              <SelectItem value="investment-planning">Investment Planning</SelectItem>
              <SelectItem value="property-salary">Property & Salary</SelectItem>
              <SelectItem value="it-notice">IT Notice Resolution</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea name="message" placeholder="Brief description of your tax situation..." rows={3} />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Opening Email..." : "Request Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
