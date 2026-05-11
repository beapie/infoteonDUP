export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: December 10, 2025</p>

        <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
          <section>
            <p className="text-base leading-relaxed">
              This Privacy Policy describes how Infoteon ("we," "us," or "our") collects, uses, and shares information when you use our website, platform, and services (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Personal Information</h3>
            <p className="text-base leading-relaxed">
              Your name, email address, phone number (if provided), and billing information when you create an account. Please note that phone numbers used with the Services are obtained and managed by you through a third-party provider (e.g., Twilio). We only collect the phone numbers you configure through their integration.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Information from Your Google Account</h3>
            <p className="text-base leading-relaxed">
              When you grant us access to your Google account, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>Google Profile Information:</strong> Your name, email address, and profile picture to create and manage your account.</li>
              <li><strong>Google Calendar Data:</strong> With your explicit consent, we access your calendar events, including titles, times, and attendees. We only access the data necessary to provide our scheduling features.</li>
            </ul>
            <p className="text-base leading-relaxed mt-3">
              Our application's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Information from Your GoHighLevel Account</h3>
            <p className="text-base leading-relaxed">
              When you grant us access to your GoHighLevel account, we collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>GoHighLevel Calendar Data:</strong> With your explicit consent, we access your calendar events, calendar groups, and calendar resources, including titles, times, attendees, and scheduling information. We only access the data necessary to provide our scheduling features.</li>
              <li><strong>GoHighLevel Contact Data:</strong> With your explicit consent, we access your contacts, including names, email addresses, phone numbers, and contact information. We only access the data necessary to provide our scheduling features.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Usage Data</h3>
            <p className="text-base leading-relaxed">
              Call logs, voice recordings (if enabled), IP address, and usage analytics, all processed through your third-party phone number integration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-base leading-relaxed">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">To Provide Core Scheduling Features with Google Calendar</h3>
            <p className="text-base leading-relaxed">
              We use your Google Calendar data to integrate our service with your schedule. Specifically, we:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>Read your calendar events to check your availability and prevent scheduling conflicts.</li>
              <li>Create new events in your calendar when you schedule an appointment or meeting through our app.</li>
              <li>Update and Delete events in your calendar when you reschedule or cancel an appointment, ensuring your schedule remains synchronized and accurate.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">To Provide Core Scheduling Features with GoHighLevel</h3>
            <p className="text-base leading-relaxed">
              We use your GoHighLevel Calendar data to integrate our service with your schedule and business workflows. Specifically, we:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>Read your calendar events to check your availability and prevent scheduling conflicts.</li>
              <li>Create new events in your calendar when you schedule an appointment or meeting through our app.</li>
              <li>Update and Delete events in your calendar when you reschedule or cancel an appointment, ensuring your schedule remains synchronized and accurate.</li>
              <li>Access your calendar groups and resources to manage team scheduling and resource availability.</li>
              <li>Use your location data, including custom values and fields, to support location-based scheduling features, suggest nearby venues, and auto-fill event locations.</li>
              <li>Integrate with your contacts to simplify event planning and collaboration, allowing you to select attendees from your existing contacts when creating or updating calendar events.</li>
              <li>Create and update contact records in your GoHighLevel account for lead generation, capturing new leads from interactions and updating existing contact information with relevant details.</li>
              <li>Access your opportunity data to integrate appointment scheduling with your sales and business management workflows, enabling seamless coordination between scheduled appointments and your sales pipeline.</li>
            </ul>
            <p className="text-base leading-relaxed mt-3">
              All GoHighLevel data access is limited strictly to data owned by you, and all actions are performed only after you have provided explicit consent. We adhere to the principle of least privilege, accessing only the data necessary to provide core functionality. Your GoHighLevel data is not sold, shared with third parties, or used for advertising purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">To Provide and Manage Your Account</h3>
            <p className="text-base leading-relaxed">
              We use your Google profile information to create and personalize your Infoteon account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">For Communication</h3>
            <p className="text-base leading-relaxed">
              We use your email address to send you service-related notifications and updates.
            </p>
            <p className="text-base leading-relaxed">
              By enabling SMS notifications, you agree to receive transactional alerts related to agent activity (call completed, call failed, call transferred, lead generated). Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Limited Use Compliance</h2>
            <p className="text-base leading-relaxed">
              Notwithstanding anything else in this Privacy Policy, our use of your Google user data will be subject to these additional restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li>The data will only be used to provide or improve user-facing features that are prominent in our application's user interface, such as the scheduling functionality described above.</li>
              <li>The data will not be transferred to others unless it is necessary to provide or improve these features, to comply with applicable laws, or as part of a merger, acquisition, or sale of assets.</li>
              <li>The data will not be used for serving advertisements.</li>
              <li>The data will not be accessed by human agents unless we have your affirmative consent, it is necessary for security purposes, to comply with applicable laws, or for our internal operations (and even then, only when the data has been aggregated and anonymized).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Account Registration</h2>
            <p className="text-base leading-relaxed">
              To use certain features, you must create an account with accurate information. You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Data Sharing</h2>
            <p className="text-base leading-relaxed">
              We may share your information with the following entities:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Service Providers</h3>
            <p className="text-base leading-relaxed">
              We share data with trusted third-party vendors (e.g., Twilio) who assist us in providing the Services. These vendors are bound by strict confidentiality agreements. Your third-party phone number provider may also process call-related data according to their own privacy policies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Legal Compliance</h3>
            <p className="text-base leading-relaxed">
              We may disclose your information if required by law or legal process, or to protect our rights, property, or safety, or the rights, property, or safety of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">SMS Messaging and Data Privacy</h2>
            <p className="text-base leading-relaxed">
              Infoteon is committed to protecting your privacy. Regarding our SMS/text messaging program:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
              <li><strong>No Mobile Information Sharing:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</li>
              <li><strong>Exclusion of Consent Data:</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
              <li><strong>Use of Data:</strong> Your personal information (phone number and name) is used solely for the purpose of providing the services you requested, such as appointment reminders and service updates via our AI Voice Assistant.</li>
              <li><strong>Opt-Out:</strong> You may opt-out of receiving text messages at any time by replying "STOP" to any message you receive from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">No Sale of Personal Information</h2>
            <p className="text-base leading-relaxed">
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Data Security</h2>
            <p className="text-base leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information, including encryption, secure servers, and access controls. However, no system is completely secure, and you acknowledge that there is some risk associated with using the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
            <p className="text-base leading-relaxed">
              You have the following rights regarding your information:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Access and Correction</h3>
            <p className="text-base leading-relaxed">
              You can request access to or correction of your personal information by contacting us at helpdesk@infoteon.com.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Deletion</h3>
            <p className="text-base leading-relaxed">
              You can request deletion of your personal information, subject to any legal obligations we may have to retain certain data.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">CCPA/GDPR</h3>
            <p className="text-base leading-relaxed">
              If you are a resident of California or the European Union, you may have additional rights under the California Consumer Privacy Act (CCPA) or the General Data Protection Regulation (GDPR), such as the right to opt-out of the sale or sharing of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Cookies and Tracking</h2>
            <p className="text-base leading-relaxed">
              We use cookies and similar tracking technologies for analytics and to improve the functionality of the Services. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Third-Party Services</h2>
            <p className="text-base leading-relaxed">
              The Services may contain links to third-party websites or services (e.g., payment processors). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">International Data Transfers</h2>
            <p className="text-base leading-relaxed">
              Your information may be processed in the United States or other countries where our servers or service providers are located. We will ensure that any international data transfers are subject to appropriate safeguards, such as Standard Contractual Clauses for GDPR compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Children's Privacy</h2>
            <p className="text-base leading-relaxed">
              The Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Updates to this Privacy Policy</h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-base leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at helpdesk@infoteon.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
