import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="p-16 bg-brand h-screen overflow-auto ">
      <div>
        <Link href="/">
          <ArrowLeft className="w-8 h-8 text-gray-800 cursor-pointer" />
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Privacy Policy
        </h2>
      </div>

      <p className="my-3">
        Our Privacy Policy outlines how ApexMed Innovations collects, uses,
        discloses, and protects the information provided by users of our website
        and services. We are committed to safeguarding the privacy of our users
        and ensuring the confidentiality of their personal information. We
        collect and process data in accordance with applicable laws and only use
        it for legitimate purposes related to improving our services,
        communicating with users, and fulfilling legal obligations. We do not
        sell or rent personal information to third parties, and we implement
        reasonable security measures to protect against unauthorized access,
        disclosure, alteration, or destruction of data. By using our website and
        services, users consent to the collection and use of their information
        as described in this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
