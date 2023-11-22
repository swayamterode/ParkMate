import { FcFaq } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import { TITLE, faqText } from "../constants/FaqConstants";

const Faq = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-2xl lg:text-5xl tracking-tight font-extrabold text-white flex justify-center items-center">
            <FcFaq className="mr-4" />
            {TITLE}
          </h2>
          <div className="grid pt-8 text-left border-t md:gap-16 border-gray-700 md:grid-cols-2">
            {Object.keys(faqText).map((key) => (
              <div key={key} className="mb-5 md:mb-0">
                <h3 className="flex items-center mb-4 text-lg font-medium text-white">
                  <FaQuestionCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400" />
                  {faqText[key].title}
                </h3>
                <p className="text-gray-400">{faqText[key].answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
