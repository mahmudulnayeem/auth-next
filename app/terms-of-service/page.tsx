import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="p-16 bg-brand h-screen overflow-auto ">
      <div>
        <Link href="/">
          <ArrowLeft className="w-8 h-8 text-gray-800 cursor-pointer" />
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Terms of Servicecy
        </h2>
      </div>
      <p className="mt-4 text-gray-600">
        Welcome to ApexMed Innovations! These Terms of Service
        (&rdquo;Terms&rdquo;) govern your use of the ApexMed Innovations website
        (the &rdquo;Site&rdquo;) and any related services provided by ApexMed
        Innovations (collectively, the &rdquo;Services&rdquo;). By accessing or
        using the Site or Services, you agree to be bound by these Terms and our
        Privacy Policy, which is incorporated by reference into these Terms. If
        you do not agree to these Terms or the Privacy Policy, please do not use
        the Site or Services.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">
        1. Use of the Site and Services
      </h3>
      <p className="my-3">
        1.1 Eligibility: You must be at least 18 years old to use the Site and
        Services. By using the Site or Services, you represent and warrant that
        you are at least 18 years old.
        <br />
        1.2 License: Subject to these Terms, ApexMed Innovations grants you a
        limited, non-exclusive, non-transferable, and revocable license to
        access and use the Site and Services for your personal, non-commercial
        use.
        <br />
        1.3 Prohibited Conduct: You agree not to:
        <br />
        (a) Use the Site or Services for any unlawful purpose or in violation of
        any applicable laws;
        <br />
        (b) Use the Site or Services to harass, abuse, or harm another person;
        <br />
        (c) Interfere with or disrupt the operation of the Site or Services or
        any servers or networks connected to the Site or Services;
        <br />
        (d) Attempt to gain unauthorized access to the Site or Services or any
        accounts, computer systems, or networks connected to the Site or
        Services;
        <br />
        (e) Use any data mining, robots, or similar data gathering or extraction
        methods on the Site or Services;
        <br />
        (f) Upload or transmit any viruses, worms, or other malicious code to
        the Site or Services;
        <br />
        (g) Violate or attempt to violate the security of the Site or Services;
        or
        <br />
        (h) Engage in any other conduct that restricts or inhibits
        anyone&rsquo;s use or enjoyment of the Site or Services, or which, as
        determined by us, may harm ApexMed Innovations or users of the Site or
        Services or expose them to liability.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">
        2. Intellectual Property Rights
      </h3>
      <p className="my-3">
        2.1 Content: All content on the Site, including text, graphics, logos,
        images, audio clips, and software, is the property of ApexMed
        Innovations or its licensors and is protected by copyright, trademark,
        and other intellectual property laws. <br />
        2.2 License: Subject to your compliance with these Terms, ApexMed
        Innovations grants you a limited, non-exclusive, non-transferable, and
        revocable license to access and view the content on the Site for your
        personal, non-commercial use.
        <br />
        2.3 Trademarks: &rdquo;ApexMed Innovations&rdquo; and the ApexMed
        Innovations logo are trademarks of ApexMed Innovations. You may not use
        these trademarks without the prior written permission of ApexMed
        Innovations.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">3. Privacy</h3>
      <p className="my-3">
        Please review our
        <Link href="/privacy-policy" className="underline mx-3">
          Privacy Policy
        </Link>
        to understand how we collect, use, and disclose information about you.
        By using the Site or Services, you consent to the collection, use, and
        disclosure of your information as described in our Privacy Policy.
      </p>

      <h3 className="mt-8 text-xl font-bold text-gray-800">
        4. Disclaimer of Warranties
      </h3>
      <p className="my-3">
        THE SITE AND SERVICES ARE PROVIDED ON AN &rdquo;AS IS&rdquo; AND
        &rdquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
        EXPRESS OR IMPLIED. APEXMED INNOVATIONS DISCLAIMS ALL WARRANTIES,
        INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">
        5. Limitation of Liability
      </h3>
      <p className="my-3">
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, APEXMED INNOVATIONS
        SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
        WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
        GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION
        WITH YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SITE
        OR SERVICES.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">6. Governing Law</h3>
      <p className="my-3">
        These Terms shall be governed by and construed in accordance with the
        laws of [Jurisdiction], without regard to its conflict of law
        principles.
      </p>
      <h3 className="mt-8 text-xl font-bold text-gray-800">
        7. Changes to Terms
      </h3>
      <p className="my-3">
        ApexMed Innovations reserves the right to modify or update these Terms
        at any time. If we make material changes to these Terms, we will notify
        you by email or by posting a notice on the Site. Your continued use of
        the Site or Services after any such changes constitutes your acceptance
        of the new Terms.
      </p>
    </div>
  );
};

export default TermsPage;
