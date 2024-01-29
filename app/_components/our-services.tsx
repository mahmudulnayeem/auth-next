import { Card } from "@/components/ui/card";
import { FaAmbulance, FaEye, FaTooth } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { MdOutlineBloodtype } from "react-icons/md";
const services = [
  {
    icon: <FaAmbulance className="h-6 w-6" />,
    title: "Emergency Care",
    description: "We provide high-quality emergency care services.",
  },
  {
    icon: <LuStethoscope className="h-6 w-6" />,
    title: "General Medicine",
    description: "We provide high-quality general medicine services.",
  },
  {
    icon: <MdOutlineBloodtype className="h-6 w-6 text-red-500" />,
    title: "Blood Test",
    description: "We provide high-quality blood test services.",
  },
  {
    icon: <FaTooth className="h-6 w-6" />,
    title: "Dental Care",
    description: "We provide high-quality dental care services.",
  },
  {
    icon: <LuStethoscope className="h-6 w-6 text-teal-600" />,
    title: "Outdoor Checkup",
    description: "We provide high-quality outdoor checkup services.",
  },
  {
    icon: <FaEye className="h-6 w-6" />,
    title: "Ophthalmology",
    description: "We provide high-quality ophthalmology services.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Heart Surgery",
    description: "We provide high-quality heart surgery services.",
  },
  {
    icon: <BoneIcon className="h-6 w-6" />,
    title: "Orthopedic Surgery",
    description: "We provide high-quality orthopedic surgery services.",
  },
  {
    icon: <BrainIcon className="h-6 w-6" />,
    title: "Neurology",
    description: "We provide high-quality neurology services.",
  },
];
const OurServices = () => {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32  ">
      <div className="container px-4 md:px-6 bg-[url('/heart.svg')] bg-[length:200px_200px] bg-no-repeat bg-right-top">
        <div className="grid gap-4 px-4 md:px-6 ">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Our Services
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide a wide range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              return (
                <Card
                  key={index}
                  className="flex flex-col space-y-2 p-3 hover:shadow-lg hover:transition-shadow "
                >
                  {service.icon}
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

function BoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </svg>
  );
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HotelIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}
