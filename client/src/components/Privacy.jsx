import Footer from "./Footer";
import Navbar from "./Navbar";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 min-h-screen py-12 sm:py-20 px-5">
        <div className="mt-14 max-w-3xl mx-auto p-4 bg-white shadow rounded-xl">
          <h1 className="mt-2 text-2xl text-center font-bold mb-4">
            Privacy Policy for the Parking Website
          </h1>
          <h2 className="text-xl text-center font-semibold mb-4">
            Last Updated: 10 Aug 2023
          </h2>
          <p>
            We, <span className="text-gray-900 font-bold">ParkMate</span>, are
            committed to protecting the privacy and security of your personal
            information. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard your information when you use our parking
            website. By accessing or using the Website, you consent to the
            practices described in this Privacy Policy.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">
            Information We Collect{" "}
          </h3>
          <p>
            We may collect both personal and non-personal information from you
            when you use our Website. Personal information may include:
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold"> 1. Contact Information:</span> Such
            as your name, email address, phone number, and mailing address.
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">2. Payment Information: </span>
            If you make payments through the Website, we collect necessary
            payment details, though we do not store complete credit card
            information.
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">3. Vehicle Information:</span>{" "}
            License plate number, vehicle make and model, and related details.
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">4. Usage Data:</span> Information
            about how you interact with our Website, including your IP address,
            browser type, and browsing behavior
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">
            How We Use Your Information
          </h3>
          <p className="mt-2 mb-2">
            {" "}
            We use the collected information for various purposes, including:{" "}
          </p>
          <p className="mt-2 mb-2">
            1. Providing parking services and processing reservations.
          </p>
          <p className="mt-2 mb-2">
            2. Sending booking confirmations, reminders, and updates.
          </p>
          <p className="mt-2 mb-2">
            3. Managing your account and improving user experience.
          </p>
          <p className="mt-2 mb-2">
            4. Responding to your inquiries and customer support requests.
          </p>
          <p className="mt-2 mb-2">
            5. Analyzing Website usage to enhance our services and offerings.
          </p>
          <p className="mt-2 mb-2">
            6. Sending promotional emails and updates, which you can opt out of
            at any time.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">Information Sharing</h3>
          <p className="mt-2 mb-2">
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with:
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">1. Service Providers :</span>
            We may engage third-party service providers to assist us in
            operating the Website and providing services. These providers have
            limited access to your information and are bound by confidentiality
            obligations.
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">2. Legal Requirements:</span>
            We may disclose your information if required by law, court order, or
            government authority.
          </p>
          <p className="mt-2 mb-2">
            <span className="font-semibold">3. Protection of Rights:</span>
            We may share information to protect our rights, privacy, safety, or
            property, as well as that of our users or others.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">Data Security</h3>
          <p className="mt-2 mb-2">
            We implement industry-standard security measures to protect your
            information. However, no method of transmission over the internet or
            electronic storage is completely secure. We cannot guarantee
            absolute security, but we strive to protect your information to the
            best of our ability.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">Your Choices</h3>
          <p className="mt-2 mb-2">
            You can manage your account settings and communication preferences
            by logging into your account on the Website. You can also
            unsubscribe from marketing emails using the provided link.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">Children Privacy</h3>
          <p className="mt-2 mb-2">
            Our Website is not intended for children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe we have collected information from a child, please contact
            us immediately.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-bold">
            Changes to this Privacy Policy
          </h3>
          <p className="mt-2 mb-2">
            We may update this Privacy Policy periodically to reflect changes in
            our practices or for legal reasons. The{" "}
            <span className="font-bold">Last Updated</span> date at the beginning
            of the policy will indicate when it was last revised.
          </p>
          {/* <h3 className="mt-4 mb-2 text-xl font-bold">Contact Us</h3>
          <p className="mt-2 mb-2">
            If you have any questions, concerns, or requests related to this
            Privacy Policy, please contact us at [contact information]. By using
            our Website, you acknowledge that you have read and understood this
            Privacy Policy and agree to its terms.
          </p> */}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Privacy;
