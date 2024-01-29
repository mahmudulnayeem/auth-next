import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "./_components/about-us";
import ContactUsForm from "./_components/contact-us-form";
import Faq from "./_components/faq";
import { Hero } from "./_components/hero";
import OurServices from "./_components/our-services";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className={cn(font.className)}>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 sticky top-0">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height="40" src="/logo.png" width="40" />
            <span className="text-lg font-semibold">
              <span className="text-brand">ApexMed</span> Innovations
            </span>
          </Link>
          <nav className=" hidden sm:flex  gap-4 items-center">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#about-us"
            >
              About Us
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#contact-us"
            >
              Contact
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/admin"
            >
              Login
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <div className="w-screen bg-brand h-[60vh] flex justify-center items-center">
            <Hero />
          </div>
          <section
            id="home"
            className="w-full py-12 md:py-24 lg:py-32  bg-brand bg-cover bg-no-repeat"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your <span className="text-green-700"> Health</span>, Our{" "}
                    <span className="text-brand"> Priority</span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Providing top-notch medical services with a team of
                    dedicated professionals.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Schedule Appointment
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <OurServices />
          <AboutUs />
          <ContactUsForm />
          <Faq />
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 ApexMed Innovations. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="privacy-policy"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
