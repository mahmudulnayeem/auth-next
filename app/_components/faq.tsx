import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your visiting hours?",
    answer:
      "Visiting hours are from Our visiting hours are from 8:00 AM to 8:00 PM.. Exceptions may apply in certain situations, so please check with the specific department or unit.",
  },
  {
    question: "Do I need an appointment to see a doctor?",
    answer:
      "Appointments are recommended to ensure prompt attention and minimal waiting times. However, we also accommodate walk-in patients based on availability.",
  },
  {
    question: "How do I pay my medical bills?",
    answer:
      "You can pay your medical bills online through our secure payment portal, in person at our billing office, or by mail. We accept various payment methods including cash, credit/debit cards, and insurance.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept a wide range of insurance plans. Please visit our Insurance and Billing page for a list of accepted insurance providers or contact our billing department for assistance.",
  },
  {
    question: "Do you have parking facilities?",
    answer:
      "Yes, we have ample parking facilities available for patients and visitors. Parking is free of charge.",
  },
  {
    question: "What medical specialties do you offer?",
    answer:
      "We offer a comprehensive range of medical specialties including but not limited to cardiology, orthopedics, pediatrics, oncology, neurology, and more. Please visit our Services page for a complete list.",
  },
  {
    question: "How can I request medical records?",
    answer:
      "You can request your medical records by filling out our online Medical Records Request form or by contacting our Medical Records Department directly. Please allow 30MINS for processing.",
  },
];

const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 bg-[url('/question.svg')] bg-[length:400px_400px] bg-no-repeat bg-right">
        <div className="grid gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of our most frequently asked questions.
            </p>
          </div>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
