import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Our Doctors
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We have a team of experienced and qualified doctors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2">
              <Image
                alt="Doctor"
                className="aspect-square overflow-hidden rounded-lg object-cover"
                height="300"
                src="https://media.discordapp.net/attachments/922720652803321906/1200717754248994826/doctor-removebg-preview.png?ex=65c7328c&is=65b4bd8c&hm=29c4b3a3ea4a927cb039f1caef8ca00ab779abe8913abeab87a852b94ffe2760&=&format=webp&quality=lossless&width=1224&height=816"
                width="300"
              />
              <h3 className="text-lg font-bold">Dr. John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">Heart Surgeon</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                alt="Doctor"
                className="aspect-square overflow-hidden rounded-lg object-contain"
                height="300"
                src="https://media.discordapp.net/attachments/922720652803321906/1200718401031634995/dddd-removebg-preview.png?ex=65c73327&is=65b4be27&hm=5f74ab41087bc7d1b9b1a292e8c0bd9fc285a07dc76937318f1c9683258e700b&=&format=webp&quality=lossless&width=1224&height=816"
                width="300"
              />
              <h3 className="text-lg font-bold">Dr. Richard Johnson</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Orthopedic Surgeon
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                alt="Doctor"
                className="aspect-square overflow-hidden rounded-lg object-contain"
                height="300"
                src="https://media.discordapp.net/attachments/922720652803321906/1200718826975797349/bbb-removebg-preview.png?ex=65c7338c&is=65b4be8c&hm=ef81500a7b376466832077a9497722c98f5427bb9d55fad1a8517192ec535384&=&format=webp&quality=lossless&width=758&height=816"
                width="300"
              />
              <h3 className="text-lg font-bold">Dr. Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">Neurologist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
