import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const text = `Hi CA Narender,

I'd like to request a consultation.

*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
${message ? `*Details:* ${message}` : ""}

Looking forward to hearing from you.`;

    window.open(
      `https://wa.me/918310946034?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-600" />
          Quick Consultation Request
        </CardTitle>
        <CardDescription>
          You'll be redirected to WhatsApp to send your request directly
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your Name" required />
          <Input name="phone" type="tel" placeholder="Phone Number" required />
          <Select name="service" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Service Needed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RSU & Stock Options">RSU & Stock Options</SelectItem>
              <SelectItem value="Foreign Investments">Foreign Investments</SelectItem>
              <SelectItem value="Tax Credit Optimization">Tax Credit Optimization</SelectItem>
              <SelectItem value="PMS & Trading">PMS & Trading</SelectItem>
              <SelectItem value="Investment Planning">Investment Planning</SelectItem>
              <SelectItem value="Property & Salary">Property & Salary</SelectItem>
              <SelectItem value="IT Notice Resolution">IT Notice Resolution</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea name="message" placeholder="Brief description (optional)" rows={3} />
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
            <MessageCircle className="mr-2 h-5 w-5" />
            {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
