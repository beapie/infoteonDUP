export default function SLA() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Service Level Agreement</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: December 10, 2025</p>

        <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Infoteon Voice AI for Your Enterprise Agreement</h2>
            <p className="text-base leading-relaxed">
              This Service Level Agreement ("SLA") applies to customers subscribing to Infoteon's Enterprise-tier plan ("you," "your") provided by Infoteon ("Infoteon," "we," "us," "our"). It defines our commitments to service availability, performance, and support for our Voice AI services (the "Services"). This SLA is an optional add-on to your Enterprise subscription and supplements our Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Service Availability</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Uptime Commitment</h3>
            <p className="text-base leading-relaxed">
              Infoteon guarantees that the Services will be available 99.9% of the time in any given calendar month, excluding scheduled maintenance and uncontrollable events (defined below).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Measurement</h3>
            <p className="text-base leading-relaxed">
              Uptime is calculated as the time the Services are available, while Downtime is the time the Services are unavailable, as measured by our monitoring systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Scheduled Maintenance</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>Notification:</strong> We provide 48 hours' notice for maintenance via email or in-app alerts.</li>
              <li><strong>Timing:</strong> Maintenance occurs outside standard business hours (Monday–Friday, 9 AM–5 PM PST).</li>
              <li><strong>Exclusion:</strong> Scheduled maintenance does not count as downtime under the uptime commitment.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Uncontrollable Events</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>Definition:</strong> Downtime caused by factors beyond our reasonable control (e.g., natural disasters, internet outages, third-party provider failures like Twilio, or cyberattacks despite reasonable security measures) is excluded from the uptime calculation.</li>
              <li><strong>Mitigation:</strong> We will restore service as quickly as possible but are not liable for delays caused by such events.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Performance Standards</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">Call Processing</h3>
            <p className="text-base leading-relaxed">
              Voice AI agents will process calls with an average latency of less than 2 seconds under normal conditions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Transcription Accuracy</h3>
            <p className="text-base leading-relaxed">
              Transcriptions will achieve at least 95% accuracy for clear audio inputs, barring external factors (e.g., poor call quality).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Concurrent Calls</h3>
            <p className="text-base leading-relaxed">
              The Services will support the contracted number of concurrent calls (e.g., 100+ as agreed) without degradation, subject to usage within your plan limits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Support Services</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">Availability</h3>
            <p className="text-base leading-relaxed">
              Enterprise clients receive 24/7 support via email, chat, and phone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Response Times</h3>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-sm border border-gray-700 dark:border-gray-600">
                <thead>
                  <tr className="border-b border-gray-700 dark:border-gray-600">
                    <th className="px-4 py-2 font-semibold text-gray-900 dark:text-white">Issue Type</th>
                    <th className="px-4 py-2 font-semibold text-gray-900 dark:text-white">Initial Response</th>
                    <th className="px-4 py-2 font-semibold text-gray-900 dark:text-white">Target Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 dark:border-gray-600">
                    <td className="px-4 py-2">Critical Issues (complete service outage)</td>
                    <td className="px-4 py-2">Within 1 hour</td>
                    <td className="px-4 py-2">Within 4 hours</td>
                  </tr>
                  <tr className="border-b border-gray-700 dark:border-gray-600">
                    <td className="px-4 py-2">High Priority (major feature failure)</td>
                    <td className="px-4 py-2">Within 4 hours</td>
                    <td className="px-4 py-2">Within 24 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Standard Issues (general inquiries)</td>
                    <td className="px-4 py-2">Within 24 hours</td>
                    <td className="px-4 py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Service Credits</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-3">Eligibility</h3>
            <p className="text-base leading-relaxed">
              If we fail to meet the 99.9% uptime commitment in a month, you may request a service credit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Credit Calculation</h3>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>99.5%–99.89% uptime: 10% of your monthly subscription fee</li>
              <li>99.0%–99.49% uptime: 20% of your monthly subscription fee</li>
              <li>Below 99.0% uptime: 30% of your monthly subscription fee</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Request Process</h3>
            <p className="text-base leading-relaxed">
              Submit a claim to helpdesk@infoteon.com within 30 days of the end of the affected month, including details of the downtime. Credits are applied to your next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Customer Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>Compliance:</strong> You must use the Services in accordance with our Acceptable Use Policy and applicable laws (e.g., TCPA, GDPR).</li>
              <li><strong>Usage Limits:</strong> Exceeding your contracted minute or call volume may impact performance and is not covered by this SLA.</li>
              <li><strong>Support Access:</strong> Provide necessary access and information to assist us in resolving issues promptly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Exclusions</h2>
            <p className="text-base leading-relaxed mb-3">This SLA does not apply to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>Downtime caused by your misuse, third-party integrations, or failure to follow usage guidelines</li>
              <li>Trial periods or non-Enterprise plans</li>
              <li>Scheduled maintenance or uncontrollable events as defined above</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Termination</h2>
            <p className="text-base leading-relaxed">
              You may terminate your Enterprise subscription without penalty if we fail to meet the 99.9% uptime commitment for three consecutive months, provided you notify us within 30 days of the third failure. See our Terms and Conditions for full details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Changes to This SLA</h2>
            <p className="text-base leading-relaxed">
              We may update this SLA with 30 days' notice via email or our website. Changes apply to your next billing cycle unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-base leading-relaxed">
              For support or SLA inquiries:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed mt-3">
              <li><strong>Email:</strong> helpdesk@infoteon.com</li>
              <li><strong>Support Hours:</strong> Monday–Friday, 9 AM–5 PM PST</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              We're committed to delivering reliable Voice AI—let us know how we can support your success!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
