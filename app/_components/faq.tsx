const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
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
            <div>
              <h3 className="text-lg font-bold">
                What are your visiting hours?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our visiting hours are from 8:00 AM to 8:00 PM.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Do you accept insurance?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                No, we don&rsquo;t accept any insurance providers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">
                How can I book an appointment?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                You can book an appointment by calling us or through our
                website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
