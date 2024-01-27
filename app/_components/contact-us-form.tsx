import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactUsForm = () => {
  return (
    <section id="contact-us" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Contact Us
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We would love to hear from you. Please fill out the form below.
            </p>
          </div>
          <form className="space-y-4">
            <Input className="w-full" placeholder="Your Name" type="text" />
            <Input className="w-full" placeholder="Your Email" type="email" />
            <Input className="w-full" placeholder="Subject" type="text" />
            <textarea className="w-full h-32" placeholder="Your Message" />
            <Button className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
