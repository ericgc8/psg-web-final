// src/components/TermsOfService.tsx
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-soft-cream">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-elegant-gray">
        Terms of Service
      </h2>

      <h3 className="text-2xl font-semibold mb-2">1. Overview</h3>
      <p className="text-xl mb-4 text-gray-600">
        These Terms of Service ("Terms") govern the agreement between Pro
        Service Growth ("Company," "we," "our," or "us") and the Client ("you,"
        "your"). By engaging our services, you agree to abide by these Terms.
      </p>

      <h3 className="text-2xl font-semibold mb-2">2. Services Provided</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          <strong>Web Design and Development:</strong> We design and develop
          custom websites tailored to your needs.
        </li>
        <li>
          <strong>Domain Registration:</strong> If you do not have a domain, we
          will register one on your behalf, using your information.
        </li>
        <li>
          <strong>Hosting:</strong> Hosting options are provided as detailed
          below.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">3. Payment Terms</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          <strong>Full Payment:</strong> Services are charged at full price,
          with options for Buy Now, Pay Later (BNPL) provided through
          third-party platforms. We are not responsible for the terms,
          conditions, or disputes related to BNPL services.
        </li>
        <li>
          <strong>Custom Packages:</strong>
          <ul className="list-disc list-inside">
            <li>A proposal is sent based on your requests.</li>
            <li>A 50% deposit is required to begin work.</li>
            <li>The remaining 50% is due before the website goes live.</li>
            <li>Proposals are valid for 1 month.</li>
            <li>
              If the remaining balance is not paid within 7 days, the website
              may be taken offline, and a $150 reactivation fee will apply.
              Ownership of the code is transferred only after full payment.
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">4. Domain Registration</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>We register domains for one year at $25/year.</li>
        <li>
          After the initial year, you are responsible for renewal, either by:
          <ul className="list-disc list-inside">
            <li>Paying us the renewal fee.</li>
            <li>Having us transfer the domain to your account.</li>
          </ul>
        </li>
        <li>
          Failure to pay the renewal fee within 30 days will result in
          suspension of your website. Outstanding balances will accrue 15%
          interest monthly.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">5. Hosting Options</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Starter Package: 3 months free hosting.</li>
        <li>Pro Package: 6 months free hosting.</li>
        <li>Custom Plans: 12 months free hosting.</li>
        <li>
          After the free period, you can:
          <ul className="list-disc list-inside">
            <li>Purchase hosting from us at $10/month or $100/year.</li>
            <li>
              Find your hosting provider. We will export and deliver your
              website code.
            </li>
          </ul>
        </li>
        <li>
          <strong>Transfer Fee:</strong> If you request us to transfer your
          website to another hosting provider, a $75 hourly fee applies (minimum
          2 hours, prepaid). Additional hours are billed and must be settled
          before the website goes live.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">6. Non-Payment Policy</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>
          Payment for services, including domain purchases, must be made within
          30 days. Non-payment may result in:
          <ul className="list-disc list-inside">
            <li>The website being taken offline.</li>
            <li>Outstanding balances accruing 15% monthly interest.</li>
            <li>A $150 reactivation fee to restore service.</li>
          </ul>
        </li>
        <li>
          For reactivation, outstanding balances plus the reactivation fee must
          be paid in full.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">7. Performance Disclaimer</h3>
      <p className="text-xl mb-4 text-gray-600">
        We do not guarantee specific revenue projections or performance
        outcomes. Success depends on your marketing and sales efforts.
      </p>

      <h3 className="text-2xl font-semibold mb-2">
        8. Client Communication and Behavior
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        We respond to inquiries within 24 hours. Rude or abusive behavior will
        not be tolerated. We reserve the right to:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Terminate contracts.</li>
        <li>Take down websites.</li>
        <li>Charge a $150 reactivation fee if you wish to return.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2">
        9. Non-Responsive or Non-Cooperative Clients
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        During the pre-development/design phase, if you are unresponsive or
        uncooperative:
      </p>
      <p className="text-xl mb-4 text-gray-600">
        We reserve the right to retain 50% of the selected package fee
        (excluding custom packages).
      </p>

      <h3 className="text-2xl font-semibold mb-2">10. Ownership of Code</h3>
      <p className="text-xl mb-4 text-gray-600">
        Website code ownership transfers only after full payment of all
        balances.
      </p>

      <h3 className="text-2xl font-semibold mb-2">
        11. Amendments and Revisions
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        Any requested changes after the website is live may incur additional
        fees, which will be communicated beforehand.
      </p>

      <h3 className="text-2xl font-semibold mb-2">
        12. Termination of Services
      </h3>
      <p className="text-xl mb-4 text-gray-600">
        Either party may terminate the agreement at any time. Refunds, if
        applicable, will be determined based on the scope of completed work.
      </p>

      <h3 className="text-2xl font-semibold mb-2">
        13. Liability and Indemnity
      </h3>
      <p className="text-xl mb-4 text-gray-600">We are not liable for:</p>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        <li>Third-party services (e.g., BNPL terms, hosting providers).</li>
        <li>Loss of revenue or business due to website performance.</li>
      </ul>

      {/* Final note */}
      <p className="text-xl mt-8 text-gray-600">
        You agree to indemnify us against claims arising from misuse of our
        services.
      </p>

      {/* Closing statement */}
      <p className="text-xl mt-8 text-gray-600">
        By engaging our services, you acknowledge and agree to these Terms. For
        any questions or concerns, please contact us at
        eric@proservicegrowth.com.
      </p>
    </div>
  );
};

export default TermsOfService;
