import Footer from "./Footer";
import Navbar from "./Navbar";
const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 min-h-screen py-12 sm:py-20 px-5">
        <div className="mt-14 max-w-3xl mx-auto p-4 bg-white shadow rounded-xl">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Terms and Conditions
          </h1>
          <p>
            These Terms and Conditions{" "}
            <code className="px-1 rounded-lg text-center  bg-sky-200">
              Terms
            </code>{" "}
            govern the use of the ParkMate web application developed by the
            students of{" "}
            <span className="font-bold">
              G H Raisoni College of Engineering & Management, Wagholi Pune
            </span>{" "}
            is in testing phase. By accessing or using the ParkMate WebApp, you
            agree to comply with these Terms. If you do not agree with any part
            of these Terms, please refrain from using the WebApp.
          </p>
          <h2 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h2>
          <p className="mt-1">
            By accessing or using the ParkMate WebApp, you acknowledge that you
            have read, understood, and agree to be bound by these Terms, as well
            as any applicable laws and regulations. If you do not agree with
            these Terms, you are prohibited from using the WebApp.
          </p>
          <h2 className="text-lg font-semibold mt-4">
            2. Testing Phase and Feedback
          </h2>
          <p className="mt-1">
            a. The ParkMate WebApp is currently in the testing phase, developed
            as a part of a major project by students of GHRCEM. As such, the
            WebApp may contain errors, bugs, or other issues. Your use of the
            WebApp during this phase is voluntary and at your own risk.
          </p>
          <p className="mt-1">
            b. Users are encouraged to provide feedback and report any issues
            encountered during the testing phase to assist in improving the
            WebApp functionality and performance.
          </p>
          <h2 className="text-lg font-semibold mt-4">3. Use of the WebApp</h2>
          <p className="mt-1">
            a. You must be at least 18 years old to use the ParkMate WebApp.
          </p>
          <p className="mt-1">
            b.You agree not to use the WebApp for any unlawful or prohibited
            purpose.
          </p>
          <p className="mt-1">
            c. Any information you provide while using the WebApp should be
            accurate and reliable.
          </p>
          <p className="mt-1">
            d. You agree not to engage in any activity that may disrupt or
            interfere with the proper functioning of the WebApp.
          </p>
          <h2 className="text-lg font-semibold mt-4">
            4. Data Privacy and Security
          </h2>
          <p className="mt-1">
            a. During the testing phase, data security and privacy measures are
            being evaluated and improved. While efforts are made to protect user
            data, the students and GHRCEM shall not be liable for any data
            breaches or unauthorized access.
          </p>
          <p className="mt-1">
            b. Users are advised not to provide sensitive personal information
            while using the WebApp.
          </p>
          <h2 className="text-lg font-semibold mt-4">
            5. Intellectual Property
          </h2>
          <p className="mt-1">
            a. The design, code, graphics, and other elements of the ParkMate
            WebApp are the intellectual property of the students and GHRCEM.
          </p>
          <p className="mt-1">
            b.Users are not permitted to reproduce, distribute, modify, reverse
            engineer, or create derivative works based on the WebApp without
            prior written consent from the students and GHRCEM.
          </p>
          <h2 className="text-lg font-semibold mt-4">6. Disclaimer</h2>
          a. The ParkMate WebApp is provided on an <span>as-is</span> basis. The
          students and GHRCEM make no warranties, express or implied, regarding
          the accuracy, reliability, or functionality of the WebApp. b. The
          students and GHRCEM disclaim all liability for any damages, including
          but not limited to direct, indirect, incidental, consequential, or
          punitive damages, arising out of your use or inability to use the
          WebApp.
          <h2 className="text-lg font-semibold mt-4">7. Modifications</h2>
          The students and GHRCEM reserve the right to modify or replace these
          Terms at any time without prior notice. Your continued use of the
          WebApp after changes to the Terms constitutes your acceptance of the
          modified Terms.
          <h2 className="text-lg font-semibold mt-4">8. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the jurisdiction where GHRCEM is located, without regard to
            its conflict of law principles.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
