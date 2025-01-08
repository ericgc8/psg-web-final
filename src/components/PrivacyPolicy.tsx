// src/components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString(); // Get current date

  return (
    <div className="py-16 px-6 md:px-12 bg-soft-cream text-left">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-elegant-gray">
        Privacy Policy
      </h2>

      <p className="text-xl mb-4 text-gray-600">
        <strong>Effective Date:</strong> {currentDate}{' '}
        {/* Display current date */}
      </p>
      <p className="text-xl mb-4 text-gray-600">
        Pro Service Growth ("Company," "we," "our," or "us") is committed to
        protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your information when you engage with our services or
        visit our website.
      </p>
      <h3 className="text-2xl font-semibold mb-2">1. Information We Collect</h3>
      <p className="text-xl mb-4 text-gray-600">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          <strong>Personal Information:</strong> Includes your name, email
          address, phone number, billing address, and other details you provide
          when contacting us, making payments, or using our services.
        </li>
        <li>
          <strong>Domain Registration Details:</strong> When we register a
          domain on your behalf, we will collect the necessary information
          (e.g., name, address, and contact details) to complete the
          registration.
        </li>
        <li>
          <strong>Payment Information:</strong> Payment details provided for our
          services or domain renewals. We do not store sensitive payment data;
          this is handled by our secure payment processors.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about your interaction with
          our website, including IP addresses, browser types, pages visited, and
          time spent on our website.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">
        2. How We Use Your Information
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>To provide, maintain, and improve our services.</li>
        <li>
          To communicate with you about your projects, inquiries, or support
          requests.
        </li>
        <li>
          To process payments and manage your subscriptions, hosting, or domain
          renewals.
        </li>
        <li>To comply with legal obligations and protect our legal rights.</li>
        <li>To enhance user experience and website functionality.</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">
        3. Sharing Your Information
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        We do not sell or rent your personal information to third parties. We
        may share your information with:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          <strong>Service Providers:</strong> Trusted third-party vendors who
          assist in payment processing, hosting, or domain registration.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or to protect
          our legal rights.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">
        4. Domain Registration and Hosting
      </h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          When we register a domain on your behalf, your information will be
          used for the registration and may appear in public WHOIS records
          unless privacy protection is enabled.
        </li>
        <li>
          Hosting services are provided as outlined in our Terms of Service. If
          you choose to use a third-party hosting provider, we will transfer
          your website code and remove it from our servers upon request.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-2">5. Data Retention</h3>
      <p className="text-xl mb-4 text-gray-600">
        We retain your information for as long as necessary to fulfill the
        purposes outlined in this policy or as required by law. Upon termination
        of services, we may retain certain information for legal or
        administrative purposes.
      </p>
      <h3 className="text-2xl font-semibold mb-2">6. Data Security</h3>
      <p className="text-xl mb-4 text-gray-600">
        We implement appropriate technical and organizational measures to
        protect your data from unauthorized access, alteration, disclosure, or
        destruction. However, no method of data transmission or storage is
        entirely secure, and we cannot guarantee absolute security.
      </p>
      <h3 className="text-2xl font-semibold mb-2">7. Your Rights</h3>
      <p className="text-xl mb-4 text-gray-600">
        Depending on your location, you may have the following rights:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>To access, correct, or delete your personal information.</li>
        <li>To object to or restrict certain data processing activities.</li>
        <li>To withdraw consent for data collection and use.</li>
        <li>
          To file a complaint with a regulatory authority if you believe your
          rights have been violated.
        </li>
      </ul>
      <p className="text-xl mb-4 text-gray-600">
        To exercise these rights, please contact us at
        eric@proservicegrowth.com.
      </p>
      <h3 className="text-2xl font-semibold mb-2">8. Third-Party Links</h3>
      <p className="text-xl mb-4 text-gray-600">
        Our website or services may contain links to third-party websites. We
        are not responsible for the privacy practices or content of these
        websites. We encourage you to review their privacy policies.
      </p>
      <h3 className="text-2xl font-semibold mb-2">9. Children’s Privacy</h3>
      <p className="text-xl mb-4 text-gray-600">
        Our services are not directed to individuals under 18. We do not
        knowingly collect personal information from children. If we become aware
        that we have collected information from a child, we will delete it
        promptly.
      </p>
      <h3 className="text-2xl font-semibold mb-2">
        10. Changes to This Privacy Policy
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        We may update this Privacy Policy from time to time. Changes will be
        effective upon posting the updated policy on our website. We encourage
        you to review this policy periodically.
      </p>
      <h3 className="text-2xl font-semibold mb-2">11. Contact Us</h3>
      <p className="text-xl mb-4 text-gray-600">
        If you have questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <p className="text-xl mt-8 text-gray-600">
        Pro Service Growth
        <br />
        Email: eric@proservicegrowth.com
      </p>
    </div>
  );
};

export default PrivacyPolicy;
