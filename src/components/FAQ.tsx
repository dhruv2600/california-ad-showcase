import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How much can I save on RSU taxation?",
      answer: "RSU tax savings depend on your total income and timing of vesting. We typically help clients save 15-30% through strategic planning, optimal tax regime selection, and proper timing of stock sales. Our expertise in ESOP taxation ensures maximum legal savings."
    },
    {
      question: "Do you handle foreign investment tax compliance?",
      answer: "Yes, we specialize in foreign investment taxation including US stocks, European investments, FBAR filing, and claiming foreign tax credits. We ensure full compliance while maximizing your tax efficiency and avoiding double taxation."
    },
    {
      question: "Can you resolve IT notices and assessments?",
      answer: "Absolutely. We have extensive experience handling IT notices, assessments, and appeals. Our success rate is over 90% in resolving notices favorably. We represent clients before tax authorities and ensure minimal stress during the process."
    },
    {
      question: "What's the difference between old and new tax regime for me?",
      answer: "We provide detailed calculations comparing both regimes based on your specific income, investments, and deductions. Most IT professionals with RSUs and investments benefit from personalized analysis rather than generic advice."
    },
    {
      question: "Do you provide services to NRIs?",
      answer: "Yes, we serve NRIs worldwide with expertise in NRI taxation, TDS issues, property transactions, and repatriation of funds. We handle complex scenarios involving multiple countries and tax treaties."
    },
    {
      question: "How quickly can you file my ITR?",
      answer: "Regular ITR filing: 3-5 business days. Complex cases with foreign income: 7-10 days. Emergency/last-minute filing: Same day service available. We ensure accuracy while meeting all deadlines."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Get answers to common tax questions</p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
